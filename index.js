const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://github.com/migueljr');
  await page.screenshot({path: 'examplee.png'});

  await browser.close();
})();


