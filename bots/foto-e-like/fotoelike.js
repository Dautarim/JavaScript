const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/?hl=pt-br');

  // const links = await page.evaluate(() => document.querySelector('input'));

    // await page.waitForNavigation  para esperar a pagina carregar...
 await page.type('[type="text"]', 'vava_andrelino');

  await page.type('', 'd3t0n4d0r');
await page.click('[type="submit"]')

})();