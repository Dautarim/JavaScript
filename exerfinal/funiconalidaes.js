var numer = document.getElementById('nad')
var numadd = document.getElementById('sel')
var inspect = document.querySelector('input#insp')
var numl = []

function isSenumero(n)
{

    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }else
    {
        return false
    }
}

function isSeestanalista(n,l)
{

    if(l.indexOf(n) != -1)
    {
        return true
    }
    else
    {
        return false
    }

}


function add()
{

    if(numer.length == 0)
    {
        window.alert('Digite algum numero por favor')
    }
    else{

   
  
    if(isSenumero(numer.value)  && isSeestanalista(numer.value,numl) )
    {
        numl.push(nn)
        numadd.innerHTML(`<opciom> ${nn} <\opcion>`)
    }
    else
    {
        window.alert('Erro! verifique o campo de preenchimento e tente novamnete. Parece que o seu numero já consta na lista ou excedeu o limite permitido')
    }
        }

}

function mostrar()
{

    inspect.innerHTML += (`<p> VOCE ADICIONOU ${numl.length} NUMEROS <\p>`)


}
