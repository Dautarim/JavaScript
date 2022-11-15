function conttar()
{
    
    var inicial = document.getElementById('ini')
    var final = document.getElementById('fim')
    var passo = document.getElementById('pas')
    
    var informa = document.getElementById('info')

   
    if(inicial.value == 0 || final.value == 0 || passo.value == 0 ) 
    {
        window.alert("Verifique a parada direito e tente nvoamente")
    }
    else 
    {
        var i = Number(inicial.value)
        var f = Number(final.value)
        var p = Number(passo.value)

        if(i > f)
        {
            informa.innerHTML = `COUNTING... `
         

            for(var c = i; c >= f; c -= p)
            {
                informa.innerHTML += `${c} \u{23F3}`
            }

            informa.innerHTML += `\u{1F570}`
        }
        else
        {
            
            informa.innerHTML = `COUNTING... `
    
            for(var c = i; c <= f; c += p)
            {
                informa.innerHTML += `${c} \u{1F449} \u{1F44C}  `    
            }
            informa.innerHTML += `\u{1F95B} \u{1F37C}`

        }
    
        
    }
  
    
}