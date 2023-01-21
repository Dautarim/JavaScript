
//"https://jsonplaceholder.typicode.com/todos/"
const url = "https://jsonplaceholder.typicode.com/posts"

const containerpost = document.querySelector(".post_box")
const loader = document.querySelector(".loading") 

const containerdopostEComentario = document.querySelector("#post-container")
const post_box = document.querySelector("#box-post")

//Um post só

const inputEmail = document.querySelector("#emailinput")
const inputComentario = document.querySelector("#coment")
const abadeComentarios = document.querySelector("comentsContainer")


//vou criar um objeto que pega os parametros do nosso link

const objetourlPrametros = new URLSearchParams(window.location.search)
const postId = objetourlPrametros.get("id")

async function PegatoDosOsPosts()
{
    const dadosBruto = await fetch(url)
    const dados = await dadosBruto.json()
    //console.log(dados)


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
        linkElement.setAttribute("href", `post.html?id = ${e.id}`)

        divpost.appendChild(titleElement)
        divpost.appendChild(bodyElement)
        divpost.appendChild(linkElement)
        containerpost.appendChild(divpost)

    })
}


async function PegatoDosOsPostsEComentario()
{
    //agora o aralto, vamos fazer dois fetchs em paralelo (ajuda na performasse do site)
    //primeiro, criamos uma estruturação de array com dois elementos, um para receber o post, outro para receber os comentarios desse post

    const [responsePost, responseComents] = await Promise.all([
        fetch(`${url}/${postId}`),
        fetch(`${url}/${postId}/comments`)
    ])

    console.log(containerdopostEComentario)

    containerdopostEComentario.classList.remove("hiden")
    loader.classList.add("hiden")

    const postTitle = document.createElement("h2")
    const postBody = document.createElement("p")

    postTitle.innerText = responsePost.title
    postBody.innerText = responsePost.body 

    post_box.appendChild(postTitle)
    post_box.appendChild(postBody)

    responseComents.map((e) => {

    })   
    
}


if(!postId)
{
    PegatoDosOsPosts
}
else
{
    PegatoDosOsPostsEComentario()
}
