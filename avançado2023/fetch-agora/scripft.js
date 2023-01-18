function pegadd() {
 fetch("https://jsonplaceholder.typicode.com/todos/")
   .then((rsp)=> rsp.json())
   .then((dd) => {
    dd.forEach((e) => {
        let boxList = document.querySelector("#lista")
        if(e.completed == "true")
        {
            boxList.innerHTML += 
        `<li>
        <h3>
            ${e.title}
        </h3>
        <p class="feito">
            ${e.completed}
        </p>
       </li>`

        }
        else
        {
            boxList.innerHTML += 
            `<li>
            <h3>
                ${e.title}
            </h3>
            <p class="">
                ${e.completed}
            </p>
           </li>`
        }
        

    });
    // console.log(dd[2].title)
   })   
}

pegadd()
