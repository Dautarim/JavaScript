function verificar()
{

var data = new Date ()
var ano = data.getFullYear()
var fano = window.document.getElementById('idad')
var genero = ''
var res = document.querySelector('div#infoo')

if(fano.value == 0 || Number(fano.value) > ano )
{
    window.alert('ERRO! VERIFIQUE A PARADA DIREITO E TENTE NOVAMENTE...')
}
else
{
var sexoo = document.getElementsByName('sexo')
var idade = ano - Number(fano.value)
var imagen = document.createElement('img')
imagen.setAttribute('id', 'foto') 

if(sexoo[0].checked)
{
    genero = 'Homen'

    if(idade >= 0 && idade < 2)
    {
        //bb
        imagen.setAttribute('src', 'images/bebem')
    }
    else if(idade >= 2 && idade < 11)
    {
        //criança
        imagen.setAttribute('src' , 'images/criancam')
    }
    else if (idade >= 11 && idade < 18)
    {
        //adolecente
        imagen.setAttribute('src' , 'images/adolecentem')

    }
    else if (idade >= 18 && idade < 40)
    {
        //homem
        imagen.setAttribute('src' , 'images/noite')

    }
    else 
    {
        //adulto
        imagen.setAttribute('src' , 'images/idosom')

    }
    
}
else
if(sexoo[1].checked)
{
    genero = 'Mulher'
    
    if(idade >= 0 && idade < 2)
    {
        //bb
        imagen.setAttribute('src' , 'images/bebef')

    }
    else if(idade >= 2 && idade < 11)
    {
        //criança
        imagen.setAttribute('src' , 'images/criancaf')

    }
    else if (idade >= 11 && idade < 18)
    {
        //adolecente
        imagen.setAttribute('src' , 'images/adolecenteff')

    }
    else if (idade >= 18 && idade < 40)
    {
        //homem
        imagen.setAttribute('src' , 'images/mulher')

    }
    else 
    {
        //adulto
        imagen.setAttribute('src' , 'images/idosaf')

    }
}
}

res.innerHTML = `<h2> ${genero} De ${idade} </h>`
res.appendChild(imagen)


}