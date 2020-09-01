const puppet = require("puppeteer");
async function scrape(_url) {
  const browser = await puppet.launch();
  const page = await browser.newPage();
  const database = require("./firebase");

  await page.goto(_url);

  //get price
  const [price] = await page.$x("/html/body/main/div[3]/div[3]/div[2]");
  const priceText = await price.getProperty("textContent");
  const priceJson = await priceText.jsonValue();
  const priceFinal = priceJson.replace("\\n", "").trim();

  console.log({ priceFinal, _url });

  let fs = require("fs"),
    data = JSON.stringify({ priceFinal });

  database.collection("products").doc("SayISgeHIc5fT17cRhNn").update({
    price: { priceFinal },
  });

  //  fs.writeFileSync("database.json", data, function (err) {
  //    if (err) {
  //      console.log(err);
  //    }
  //  });

  browser.close();
}

scrape(
  "https://www.yesstyle.com/en/purito-centella-green-level-safe-sun-spf50-pa-60ml/info.html/pid.1070026959"
);
