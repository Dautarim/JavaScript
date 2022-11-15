function carrega()
{
    
var msg = window.document.getElementById('ahr')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var sauda = window.document.getElementById('saud')

msg.innerHTML = `<strong>São ${hora} horas </strong>`

if(hora >= 2 && hora < 12)
{
    //manhã
 img.src = 'images/manha.png'
 sauda.innerText = 'BOM DIA'
 window.document.body.style.backgroundColor = '#d4af77'

}
else 
    {
        if(hora >= 12 && hora < 20)
        {
            //tarde
            img.src = 'images/tarde.png'
            sauda.innerText = 'BOA TARDE'
            window.document.body.style.backgroundColor = '#89acbf'

        }
        else
            {
                //noite
                img.src = 'images/noite.png'
                sauda.innerText = 'BOA NOITE'
                window.document.body.style.backgroundColor = '#0D1E1F'

            }
    }

}


