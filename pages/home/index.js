let ul = document.querySelector('.ul-posts')

const listPosts = (list) => {
for (let i = 0; i < list.length; i++){
    let listAdd = list[i]
    let template = criaPost(listAdd)
    ul.appendChild(template)
    
}
}

listPosts (posts)

function criaPost (lista) {
  let likesTotal = 0
  let userPost = users.find((element) => {
    return element.id == lista.user
  })


    let li = document.createElement('li') //Class: li-posts
    let divPerfil = document.createElement('div') //class: perfil-post
    let imgPerfil = document.createElement('img') 
    let spanPerfil = document.createElement('span') // class: perfil-title
    let h2Perfil = document.createElement('h2')
    let pPerfil = document.createElement('p') 
    let divInfo = document.createElement('div') //class: info-post
    let h2Info = document.createElement('h2') //class: title-post
    let pInfo = document.createElement('p')
    let divOpen = document.createElement('div') //clasS: open-post
    let button = document.createElement('button')
    let spanOpen = document.createElement('span') //class: likes
    let likesOpen = document.createElement('img')
    let totalLike = document.createElement('p')
    
    li.classList.add('li-posts')
    divPerfil.classList.add('perfil-post')
    spanPerfil.classList.add('perfil-title')
    divInfo.classList.add('info-post')
    h2Info.classList.add('title-post')
    divOpen.classList.add('open-post')
    spanOpen.classList.add('likes')

    imgPerfil.src = userPost.img
    console.log(userPost)
    
    h2Info.innerHTML = lista.title
    pInfo.innerHTML = lista.text
    likesOpen.src = "../../assets/img/like.svg"
    totalLike.innerHTML = `${likesTotal}`
    button.innerHTML = ('Ver post')
    button.addEventListener('click', ()=> {
        /* criarModal (lista) */
        console.log(userPost)
        
    }) // Executar
    button.id = lista.id_post
    li.id = lista.id_post

    
    li.append(divPerfil, divInfo, divOpen)
    divPerfil.append(imgPerfil, spanPerfil)
    spanPerfil.append(h2Perfil, pPerfil)
    divInfo.append(h2Info, pInfo)
    divOpen.append(button, spanOpen)
    spanOpen.append(likesOpen, totalLike)
    
    return li
    
    
    }

function zerarEvent (e){
        e.preventDefault()
}
let form = document.querySelector('.form-input').addEventListener('click', zerarEvent)

let buttonPost = document.querySelector('.button-post')
let input = document.querySelector('.input-title')
let textarea = document.querySelector('.input-textarea')

buttonPost.addEventListener('click', () =>{
    ul.innerHTML = ""
    aux = 3
    posts.unshift({id_post: aux+1, user: 1, title: input.value, text: textarea.value})
    
    input.value = "";
    textarea.value = "";
    listPosts (posts)
})

let buttonShowPost = document.querySelectorAll('.buttow-show')

console.log(ul)



function criarModal (list){
   const tituloModal = list.title
   const textoModal = list.text


}


