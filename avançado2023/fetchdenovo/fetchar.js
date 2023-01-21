

//"https://jsonplaceholder.typicode.com/todos/"
const url = "https://jsonplaceholder.typicode.com/posts"

const containerpost = document.querySelector(".post_box")
const loader = document.querySelector(".loading") 

const containerdopostEComentario = document.querySelector("#post-container")
const post_box = document.querySelector("#box-post")

// Elementos para Um post só

const inputEmail = document.querySelector("#emailinput")
const inputComentario = document.querySelector("#coment")
const abadeComentarios = document.querySelector(".comentsContainer")
const formulario = document.querySelector("#formulario")


//vou criar um objeto que pega os parametros do nosso link

const objetourlPrametros = new URLSearchParams(window.location.search)
const postId = objetourlPrametros.get("id")



async function PegatoDosOsPosts()
{
    
    
    const dadosBruto = await fetch(url)
    const dados = await dadosBruto.json()
    // console.log(dados)


    //AGORA CRIAMOS AS COMPONENTES HTML PARA LEVAR OS DADOS
    loader.classList.add("hiden")
    dados.map((e) => 
    {
        const divpost = document.createElement("div")
        const titleElement = document.createElement("h2")
        const bodyElement = document.createElement("p")
        const linkElement = document.createElement("a")

        titleElement.innerText = e.title
        bodyElement.innerText = e.body
        linkElement.innerText = "Ver Mais"
        linkElement.setAttribute("href", `post.html?id=${e.id}`)
        
        divpost.appendChild(titleElement)
        divpost.appendChild(bodyElement)
        divpost.appendChild(linkElement)
        containerpost.appendChild(divpost)

    })

    //esconder o loader
    await loader.classList.add("hiden")
  
}


async function PegatoDosOsPostsEComentario()
{
    //agora o aralto, vamos fazer dois fetchs em paralelo (ajuda na performasse do site)
    //primeiro, criamos uma estruturação de array com dois elementos, um para receber o post, outro para receber os comentarios desse post

    const [responsePost, responseComents] = await Promise.all([
        fetch(`${url}/${postId}`),
        fetch(`${url}/${postId}/comments`)
    ])

    const responsePostjson = await responsePost.json()
    const responseComentsjson = await responseComents.json()

    containerdopostEComentario.classList.remove("hiden")
    loader.classList.add("hiden")

    const postTitle = document.createElement("h2")
    const postBody = document.createElement("p")

    postTitle.innerText = await responsePostjson.title
    postBody.innerText = await responsePostjson.body 

    post_box.appendChild(postTitle)
    post_box.appendChild(postBody)



   await responseComentsjson.map((e) => {
        // const divComentario = document.createElement("div")
        // const emailDoComentario = document.createElement("h3")
        // const comentaraioDoComeentario = document.createElement("p")

        // emailDoComentario.innerText =  e.email
        // comentaraioDoComeentario.innerText = e.body

        // divComentario.appendChild(emailDoComentario)
        // divComentario.appendChild(comentaraioDoComeentario)

        // abadeComentarios.appendChild(divComentario)
        
        createComentarios(e)

    })   
    
        //esconder o loader
     await   loader.classList.add("hiden")

}

 function createComentarios(comentario)
 {

        const divComentario = document.createElement("div")
        const emailDoComentario = document.createElement("h3")
        const comentaraioDoComeentario = document.createElement("p")

        emailDoComentario.innerText =  comentario.email
        comentaraioDoComeentario.innerText = comentario.body

        divComentario.appendChild(emailDoComentario)
        divComentario.appendChild(comentaraioDoComeentario)

        abadeComentarios.appendChild(divComentario)
        
    // // if(inputEmail.value && inputComentario.value)
    // // { }
    // const novoDivComent = document.createElement("div")
    // const novoEmailComent = document.createElement("h3")
    // const novoComentarioComent = document.createElement("p")

    // novoEmailComent.innerText = inputEmail.value
    // novoComentarioComent.innerText = inputComentario.value

    // novoDivComent.appendChild(novoEmailComent)
    // novoDivComent.appendChild(novoComentarioComent)

    // abadeComentarios.appendChild(novoDivComent)

 }

 async function requistarPost(comentario)
 {
    const dado = await fetch(`${url}/${postId}/comments`, {
        method : "POST", //evidencia que não é o metodo get(quem vem como padrão), mas o metodo POST que vai adicionar algo a api
        body: comentario, //aqui vc mostra o que vc vai adicionar, que nesse caso é o nosso Json
        headers: //no header mostramos que tipo de conteudo estamos trafegando
        {
            "Content-type": "application/json" //nesse caso, dizemos que é só um, que é o nosso json
        }
    })

    //quando fizermos essa requisição teremos o dado que postamos, de volta
    const dadoQueVolta = await dado.json()

    console.log(dadoQueVolta)
    createComentarios(dadoQueVolta)

 }


if(!postId)
{
    PegatoDosOsPosts()

}
else
{
    PegatoDosOsPostsEComentario()

    //função que adicona comentário
    formulario.addEventListener("submit", (e) => {

        e.preventDefault() //isso vai impedir que recaregue a pagina quando o formulario for submetido

        const content = {
            email : inputEmail.value,
            body: inputComentario.value
        }

        const conteudo = JSON.stringify(content)
        // console.log(conteudo)

        requistarPost(conteudo)
    })


}

