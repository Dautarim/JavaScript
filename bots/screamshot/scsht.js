const puppeteer = require('puppeteer');

console.log('YHEA HELLO WORD!!');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://dautarim.github.io/o_projeto-V3/starsv2.html');
    await page.screenshot({path: 'imagem-gerada.png'});
    await browser.close();
  })();