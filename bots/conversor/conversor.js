const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('YHEA HELLO WORD de novo!!');


(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  const valor = readlineSync.question('Por favor, digite o valor --> ') || 1;
  const moedabase = readlineSync.question('Digite o nome da moeda --> ') ||"reais";
  const moedadesejo = readlineSync.question('Digite o nome da moeda da conversao --> ') || "dolar";
  

  const olink = `https://www.google.com/search?q=${valor}+${moedabase}+em+${moedadesejo}&sxsrf=ALiCzsbZEXaqoJgEFd8v2QaJzSPcGZqK9Q%3A1667766228193&ei=1BdoY92rC7nA5OUPpuy1kAg&oq=2+reais+para+dolare&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgBMgQIIxAnMgYIABAWEB46BAgAEEdKBAhBGABKBAhGGABQghFYghFglCNoAHACeACAAc8BiAHPAZIBAzItMZgBAKABAcgBCMABAQ&sclient=gws-wiz-serp`


  await page.goto(olink);

  const valorfinal = await page.evaluate(() =>  document.querySelector('.lWzCpb.a61j6').value );

//   await page.screenshot({path: "nv2.png"}); esse é para fazer print da tela

  await browser.close();

  console.log(`O valor de ${valor} ${moedabase} em ${moedadesejo} é de ${valorfinal} ${moedadesejo}`);

})();