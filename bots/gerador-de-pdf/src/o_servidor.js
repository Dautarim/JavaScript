
const templaite_engine = require('ejs')
const pega_diretorio = require('path')
const vai_buscar_o_servidor = require('express'); // para pegar o gerador de servidor
// const { path } = require('express/lib/application');
const objeto_servidor = vai_buscar_o_servidor() // declarando sservidor, o "vai_buscar_o_servidor" é uma função que retorna um objeto esse ojeto é um tipode servidor, n tente ir mais a fundo 

const passageiros = [
    {
        nome: "Joice",
        numerodovoo: "4434",
        cadeira:"27"
    },

    {
        nome:"Amarildo",
        numerodovoo: "4243",
        cadeira: "23"
    },

    {
        nome: "vava",
        numerodovoo:"6969",
        cadeira:"69"

    },

    {
        nome: "Nildo",
        numerodovoo: "3893",
        cadeira:"12"
    },

    {
        nome:"Anita",
        numerodovoo: "5432",
        cadeira: "90"
    },

    {
        nome: "Juci",
        numerodovoo:"9303",
        cadeira:"13"

    }

];

// if(passageiros.length > 0)
// {
//     passageiros.forEach(passageiro => 
//         {
//             var i = 1
//             console.log(`Passageiro ${i}: ${passageiro.nome}  nv: ${passageiro.numerodovoo}  cd: ${passageiro.cadeira}`)
//         })
// }

objeto_servidor.get('/', (request, response) => {
   
    const diretorio = pega_diretorio.join(__dirname,"gerador-com-teng.ejs")
    templaite_engine.render(diretorio, {passageirooos: passageiros}, (erro, dados) => {
        if(erro)
        {
            response.send("Erro de leitura de arquivo!!")//fução para responder a pagina com uma frase 
        }
    })
    
}) 
objeto_servidor.listen(3000)

