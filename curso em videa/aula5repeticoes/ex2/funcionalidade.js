function gerar()
{

    var on = document.getElementById('num')
    var resposta = document.getElementById('atab')
    if(on.value.length == 0 )
    {
        window.alert('CARALHO INSIRA O NUMERO PRIMEIRO, SEU BURRO')
    }
    else
    {
        var n = Number(on.value)
        var m
        resposta.innerHTML =' '
        for(var c = 1; c <= 10 ; c++)
        {
            m = n * c
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${m} `
            item.value = `atab ${c}`
            resposta.appendChild(item)
        }

    }
}