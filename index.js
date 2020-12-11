const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ignoreDefaultArgs: ['--disable-extensions']});
  const page = await browser.newPage();
  await page.goto('https://github.com/migueljr/botwhatsapptestes');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();


