const puppet = require("puppeteer");
const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyApbQ-hvbF5Kv68FOqua14OWU5jYAzng8s",
  authDomain: "kbeauty-aggregate.firebaseapp.com",
  databaseURL: "https://kbeauty-aggregate.firebaseio.com",
  projectId: "kbeauty-aggregate",
  storageBucket: "kbeauty-aggregate.appspot.com",
  messagingSenderId: "845740091474",
  appId: "1:845740091474:web:de62bde604d3093fed978b",
  measurementId: "G-CN2Q8B6BV5",
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

  //let fs = require("fs"),
  //  data = JSON.stringify({ priceFinal });

  db.collection("products").doc("SayISgeHIc5fT17cRhNn").update({
    price: { priceFinal },
  });

  //  fs.writeFileSync("database.json", data, function (err) {
  //    if (err) {
  //      console.log(err);
  //
  //  });

  browser.close();
}

scrape(
  "https://www.yesstyle.com/en/purito-centella-green-level-safe-sun-spf50-pa-60ml/info.html/pid.1070026959"
);
