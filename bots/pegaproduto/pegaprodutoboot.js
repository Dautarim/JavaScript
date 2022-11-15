const pup = require('puppeteer')

const url_mercado_livre = "https://www.mercadolivre.com.br/";
const pesquisa = "macbook";
const produtofinal = []
let c = 1;

(async () => {
    const navegador = await pup.launch({headless: false}); //Entra no navegador
    const pagina = await navegador.newPage(); //abre uma pagina

    await pagina.goto(url_mercado_livre); //com a pagina, vai para a url
    //await pagina.waitForSelector('#cb1-edit'); //<-- espera o seletor aparecer o #cb1-edit
    await pagina.type('#cb1-edit',pesquisa); //digita no elemento pego pelo seletor, nesse caso um input

    /*se clicarmos para pesquisar, vamos para uma outra pagina, e para evitar problemas nessa outra pagina, fazemos assim
    então em vez de :
    await pagina.waitForSelector('.nav-search-btn'); //espera o seletor aparecer o .nav-search-btn
    await pagina.click('.nav-search-btn') // clicar no botao de pesquisar*/

    //Fazemos assim

    await Promise.all(
    [ //<-- Toma cuidado aqui, é [] e não {}
        //aqui já n precisamos colocar await já que está tudo encapsulado por uma função com await
        pagina.waitForNavigation(), // <-- Toma cuidado aqui é virgula e não ponto e virgula
        pagina.click('.nav-search-btn') // clicar no botao de pesquisar
    ])


    const produtos = await pagina.$$eval('.ui-search-result__image > a', el => el.map(link => link.href)) // $$eval -> isso é um tipo de querryselectorAll do puppeteer, agora fazemos uma função para pegar todos os links e colocar num array

    for(const linkprod of produtos)
    {
        if (c === 4) continue;

       console.log('Pagina '+ c)

        await pagina.goto(linkprod);

        await pagina.waitForSelector('.ui-pdp-title')
        const nome = await pagina.$eval('.ui-pdp-title', el => el.innerText);
        const preco = await pagina.$eval('.andes-money-amount__fraction', el => el.innerText);
        const vendedor = await pagina.evaluate(() => {
            const elem = document.querySelector('.ui-pdp-action-modal__link > span')

            if(!elem) return null
            return elem.innerText
        })
        const item = {}
        item.Nome = nome;
        item.Preço = preco;
        (vendedor ? item.Vendedor = vendedor : " ")
        item.Link = linkprod;

        produtofinal.push(item);
        c++
    }

    console.log(produtofinal)

    //await pagina.waitForTimeout(2000) //esperar um tempo nesse caso 2segundos antes de executar o procximo  comando
    await navegador.close();
})();