const puppet = require("puppeteer");
const firebase = require("firebase");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyByyoFWELuGb-Krs9eaVnn9uvslCzci3uQ",
  authDomain: "kbeauty-aggregate-b7319.firebaseapp.com",
  projectId: "kbeauty-aggregate-b7319",
  storageBucket: "kbeauty-aggregate-b7319.appspot.com",
  messagingSenderId: "525778096551",
  appId: "1:525778096551:web:00659a15144a97d1b82682",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function scrape(_url) {
  const browser = await puppet.launch();
  const page = await browser.newPage();

  await page.goto(_url);

  //get price
  const [price] = await page.$x("/html/body/main/div[3]/div[3]/div[2]");
  const priceText = await price.getProperty("textContent");
  const priceJson = await priceText.jsonValue();
  const priceFinal = priceJson.replace("\\n", "").trim();

  const [image] = await page.$x("/html/body/main/div[3]/div[1]/div[2]/img");
  const imageText = await image.getProperty("src");
  const imageJson = await imageText.jsonValue();
  const imageFinal = imageJson.replace("\\n", "").trim();

  const [title] = await page.$x(
    "/html/body/main/div[1]/div/v-accordion/v-pane/v-pane-header/div/h1"
  );
  const titleText = await title.getProperty("textContent");
  const titleJson = await titleText.jsonValue();
  const titleFinal = titleJson.replace("\\n", "").trim();

  console.log({ priceFinal, _url });

  //let fs = require("fs"),
  //  data = JSON.stringify({ priceFinal });

  db.collection("products").doc("SayISgeHIc5fT17cRhNn").update({
    price: priceFinal,
    title: titleFinal,
    image: imageFinal,
  });

  //  fs.writeFileSync("database.json", data, function (err) {
  //    if (err) {
  //      console.log(err);
  //
  //  });

  browser.close();
}

scrape(
  "https://www.yesstyle.com/en/jigott-uv-sun-block-spf-50-pa-70ml-2-types/info.html/pid.1075338426"
);
