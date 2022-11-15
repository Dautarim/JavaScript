

const objetolsoncopy = [
    {
    nome: "Dautarim",
    idade: 22,
    estadodetrabalho: false,
    detalhesdetrabalho:
    {
        proficao: "Programdor",
        empresa: null
    },

    hobies: ["videogame", "futebol", "fazer-drincs", "ler", "conversar"]
    },

    {
    nome: "Vava",
    idade: 27,
    estadodetrabalho: true,
    detalhesdetrabalho:
    {
        proficao: "Programdor",
        empresa: "Google"
    },

    hobies: ["videogame", "futebol", "fazer-drincs", "ler", "conversar"]
    }

]



//Agora vamos transformar esse objeto para json (caso queira enviar o dado para api)

jsonstring = JSON.stringify(objetolsoncopy)

console.log(jsonstring)

// Agora vamos transformar json para objeto (caso queira receber os dados da api)

jsonobject = JSON.parse(jsonstring)

console.log(jsonobject)

jsonobject.map((pessoa) => {
    console.log(pessoa.detalhesdetrabalho.empresa)
})