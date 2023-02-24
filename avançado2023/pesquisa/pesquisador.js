// get filter element
const pesquisaInput = document.querySelector("#filter")

// get cards elements
const cards = document.querySelectorAll(".cards>li")



// const cardTitle = cards.forEach(e => {
//     e.querySelector("h2")
//   })
// add input event for the filter element
 pesquisaInput.addEventListener("keyup",pesquisa)
  // filter function
 function pesquisa()
 {
   // if the filter is not empty
   if(pesquisaInput.value)
   {
    // for each card of cards
     cards.forEach((e) => {
        // get card heading (title)  
       let title = e.querySelector("h2")
       // tranform to lower case
       title = title.innerText.toLowerCase()
       // transform filter text to lower case
       let serchValue = pesquisaInput.value.toLowerCase()
       // if card title does not include the filter text
       if(!title.includes(serchValue)){
         // hide the card element        
         console.log(serchValue + title)
         e.style.display = "none"
       }// else
       else
       {
         // unhide the card element
          e.style.display = "block"
       }
       
     })
   } // else
   else
   { // for each card of cards
     cards.forEach((e) => {
       // unhide the card element
       e.style.display = "block"
     })
   }

 }

         
        
 
   
      

     
      
      
        
