let bottopo = document.querySelector('.top')

/*
Esse é o jeito pouco proficional

function ifscrol()
{
    if(window.scrollY == 0)
    {
    bottopo.style.display = "none"

    }
    else
    {
    bottopo.style.display = "block"
    }

}

setInterval(ifscrol,100)

*/
//AGORA O JEITO MAIS AVANÇADO


function ifscrol()
{
    if(window.scrollY == 0)
    {
    bottopo.style.display = "none"

    }
    else
    {
    bottopo.style.display = "block"
    }

}

window.addEventListener('scroll',ifscrol)



function colaemcima()
{
    window.scrollTo
    ({
            top: 0,
            behavior: 'smooth',
        })
}