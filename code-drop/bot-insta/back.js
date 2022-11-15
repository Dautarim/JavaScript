const puppeteer = require('puppeteer');



(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/vava_andrelino/?hl=pt-br');
  
  await page.evaluate(() =>{
    //pegando todas as minhas fotos do insta
   const nodelist = document.querySelectorAll('article img');

        // vamos transformar tudo em array 
    const imgarray = [...nodelist];
    
    //agora transformamos tudo para objeto
    const list = imgarray.map(({src}) => {
        src
    })
    console.log(list);

    //return arraydelinksdeimagem
  })

//   await browser.close();
})();