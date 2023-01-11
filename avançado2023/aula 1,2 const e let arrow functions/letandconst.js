
//A diferença entre let(pode ser mudado mesmo depois da primeira atribuição) e const (só se atribui uma vez), e arrow function

let linklist = 
["https://titis.org/uploads/posts/2022-06/1654516344_1-titis-org-p-curvy-nude-porn-krasivaya-erotika-2.jpg",
"https://static-ca-cdn.eporner.com/gallery/ci/I7/pqf2MjTI7ci/864069-curvy-babe-nude.jpg",
"https://titis.org/uploads/posts/2022-05/thumbs/1652005007_1-titis-org-p-curvy-nude-erotika-1.jpg",
"https://southsouthcases.info/imgs/676709e0a4844d3ab3f76db2f2b0c0c1.jpg",
"https://boombo.biz/en/uploads/posts/2022-09/1663130452_17-boombo-biz-p-curvy-women-nude-pics-erotika-pinterest-17.jpg",
"https://static-ca-cdn.eporner.com/gallery/EL/LP/yv7i7PVLPEL/570541-tatted-pawg-nude.jpg",
"https://boombo.biz/en/uploads/posts/2022-09/1662860046_1-boombo-biz-p-curvy-naked-women-erotika-pinterest-2.jpg",
"http://mature.adulttrade.net/pictures/307yt/name10.jpg",
"https://www.telegraph.co.uk/content/dam/women/2015/11/10/models-Denise-Bidot-Marina-Bulatkin-1_trans_NvBQzQNjv4Bqcvd9NdYOn2o_dmHMC2Mis367OIg8BVGOT9_8p_TMGbI.jpg",
"https://media.wankbus.com/albums/sources/1000/1651/31071.jpg",
"https://media.wankbus.com/albums/sources/1000/1651/31070.jpg",
"https://media.wankbus.com/albums/sources/1000/1651/31073.jpg",
"https://tse2.mm.bing.net/th?id=OIP.UxisL5LfhHAR9WT8V8dv-wAAAA&pid=15.1",

]

let cimg = 0
let alea = Math.random()*13

let fotos = document.getElementById("foto").innerHTML += 
`<div class="imgbx">
<img src="${linklist[Math.floor(alea)]}" alt="totoznh">
</div>`

let nrepita =
[
    Math.floor(alea),

]

const mais = document.getElementById("mais").onclick = () => {

    if(cimg < 14)
    {
        let ct = 0
        let aleatorio

        do
        {
            ct = 0
            aleatorio = Math.random()*13
        
            nrepita.forEach((e) => {
                if(e == Math.floor(aleatorio))
                {
                    ct++
                    console.log(e+" "+Math.floor(aleatorio))
                }

                });
        }while(ct > 0)

            fotos = document.getElementById("foto").innerHTML += 
            `<div class="imgbx">
            <img src="${linklist[Math.floor(aleatorio)]}" alt="totoznh">
            </div>`
            cimg++ 
            nrepita.push(Math.floor(aleatorio))

            console.log("feito")
    }  

}

const restaurar = document.getElementById("restaurar").onclick = () => {
    let aleatorio = Math.random()*13
    foto = document.getElementById("foto").innerHTML = 
    `<div class="imgbx">
    <img src="${linklist[Math.floor(aleatorio)]}" alt="totoznh">
    </div>`
}

const menos = document.getElementById("menos").onclick= () => {

    let utmimg = document.querySelectorAll(".imgbx")
    
    if(cimg != 0)
    {
        foto = document.getElementById("foto").removeChild(utmimg[cimg])
        cimg--
    }
    

}