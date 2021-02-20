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

  console.log({ priceFinal, _url });

  const date = Date.now();
  const dateformat = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);

  db.collection("products").doc("SayISgeHIc5fT17cRhNn").update({
    yesstyleprice: priceFinal,
    yesstyledate: dateformat,
  });

  //  fs.writeFileSync("database.json", data, function (err) {
  //    if (err) {
  //      console.log(err);
  //
  //  });

  browser.close();
}

scrape(
  "https://www.yesstyle.com/en/innisfree-daily-mild-sunscreen-50ml/info.html/pid.1073481317"
);
