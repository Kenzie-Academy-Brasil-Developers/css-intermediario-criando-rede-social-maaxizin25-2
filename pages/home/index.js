let ul = document.querySelector('.ul-posts')

const listPosts = (list) => {
for (let i = 0; i < list.length; i++){
    let listAdd = list[i]
    let template = criaPost(listAdd)
    ul.appendChild(template)
    
}
}
let sectionModal = document.querySelector('.modal')
listPosts (posts)

function criaPost (lista) {
  
    //Selecionando a UL MODAL
   

  
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
    likesOpen.classList.add('botaoLike')


    imgPerfil.src = userPost.img
    h2Perfil.innerHTML = userPost.user
    pPerfil.innerHTML = userPost.stack
    h2Info.innerHTML = lista.title
    pInfo.innerHTML = lista.text
    likesOpen.src = "../../assets/img/like.svg"
    likesOpen.addEventListener('click', ()=> {
        likesTotal++
        console.log(likesTotal)
        totalLike.innerHTML = `${likesTotal}`
    })
    totalLike.innerHTML = ('0')
    
    button.innerHTML = ('Ver post')
    button.addEventListener('click', ()=> {
        
        sectionModal.classList.toggle('show-modal')

        const modalPronto = criarModal (lista, imgPerfil.src, userPost.user, userPost.stack, likesTotal)
        sectionModal.appendChild(modalPronto)
        
        
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



// Adicionando INPUT aos posts e Zerando o HTML (V)
function zerarEvent (e){
        e.preventDefault()
}
// Selecionando o document e adicionando um evento de CLIQUE e ao clicar não carregar o HTML
let form = document.querySelector('.form-input').addEventListener('click', zerarEvent)
// Selecionando o botão do FORM
let buttonPost = document.querySelector('.button-post')
// Selecionando o INPUT do FORM
let input = document.querySelector('.input-title')
// Selecionando o TEXTAREA do FORM
let textarea = document.querySelector('.input-textarea')
// Adicionando o EVENTO de clique ao botão
buttonPost.addEventListener('click', () =>{
    // Zerando HTML
    ul.innerHTML = ""
    // Selecionando para próximo post pois já contém 3
    aux = 3
    // Push na ARRAY posts.js e usando o UNSHIFT que permite por em primeiro na lista
    posts.unshift({id_post: aux+1, user: 1, title: input.value, text: textarea.value})
    // Zerando os INPUTS após a ção ser efetuada
    input.value = "";
    textarea.value = "";
    //Chamando a função que cria o POST para atualizar
    listPosts (posts)
})

let buttonShowPost = document.querySelectorAll('.buttow-show')

function criarModal (list, imgPerfilModal, userName, userStack, likesTotal){
   
   
   //Criando o MODAL
   let ul = document.createElement('ul') //class ul-container-modal
   let li = document.createElement('li') //li-posts-modal
   let divOne = document.createElement('div') //close-modal
   let p = document.createElement('p') // Inner = X
   let divTwo = document.createElement('div') //perfil-post
   let img = document.createElement('img') 
   let spanOne = document.createElement('span') //perfil-title
   let divThree = document.createElement('div')
   let h2 = document.createElement('h2') // Inner da outra function
   let pStack = document.createElement('p') // inner da outra funcion
   let divFour = document.createElement('div') // info-post-modal
   let h2Title = document.createElement('h2') // title-post-modal inner de outra function
   let pTitle = document.createElement('p') // inner de outra function
   let divFive = document.createElement('div') //open-post-modal
   let spanTwo = document.createElement('span') //likes
   let pLike = document.createElement('p') //Inner: Likes:
   let pCount = document.createElement('p') //Inner do AUX contador da outra function

   // Adicionando as classes
   ul.classList.add('ul-container-modal')
   li.classList.add('li-posts-modal')
   divOne.classList.add('close-modal')
   p.innerHTML = 'X'
   p.addEventListener('click', () => {
      ul.remove()
      sectionModal.classList.remove('show-modal')
   })
   divTwo.classList.add('perfil-post')
   img.src = imgPerfilModal
   spanOne.classList.add('perfil-title')
   h2.innerHTML = userName
   pStack.innerHTML = userStack
   divFour.classList.add('info-post-modal')
   h2Title.classList.add('title-post-modal')
   h2Title.innerHTML = list.title
   pTitle.innerHTML = list.text
   divFive.classList.add('open-post-modal')
   spanTwo.classList.add('likes')
   pLike.innerHTML = 'Likes:'
   pCount.innerHTML = likesTotal

   //Adicionando filhos/PAIS
   ul.appendChild(li)
   li.append(divOne, divTwo, divFour, divFive)
   divOne.appendChild(p)
   divTwo.append(img, spanOne)
   spanOne.appendChild(divThree)
   divThree.append(h2, pStack)
   divFour.append(h2Title, pTitle)
   divFive.append(spanTwo)
   spanTwo.append(pLike, pCount)

   return ul
}




// Suggestions
let aside = document.querySelector('.suggestions')
// Criando os pais
let divSug = document.createElement('div')
let ulSug = document.createElement('ul')
let h2 = document.createElement('h2')

// Adicionando Class
divSug.classList.add('suggestions-users')
ulSug.classList.add('ul-container')
h2.innerHTML = 'Sugestões para você seguir'



divSug.appendChild(ulSug)
ulSug.appendChild(h2)

aside.appendChild(divSug)




function suggestions (list){
    for(let i = 0; i < list.length; i++){
        for(let j = 0; j < users.length; j++){
            if (list[i] == users[j].id){
                console.log(users[j].user)
                let sugTemplate = createSuggestions(users[j])
                
                ulSug.appendChild(sugTemplate)
                console.log(ulSug)
            }
        }
    }
}



const createSuggestions = (usersSug) => {
   let li = document.createElement('li') // li-suggestion
   let spanOne = document.createElement('span') // li-img
   let img = document.createElement('img')
   let divOne = document.createElement('div') // perfil-name-suggestion
   let h2 = document.createElement('h2')
   let p = document.createElement('p')
   let spanTwo = document.createElement('span') //li-button-suggestion
   let button = document.createElement('button') // inner: Seguir

   li.classList.add('li-suggestion')
   spanOne.classList.add('li-img')
   divOne.classList.add('perfil-name-suggestion')
   spanTwo.classList.add('li-button-suggestion')
   button.classList.add('button-suggestion')

   li.append(spanOne, divOne, spanTwo)
   spanOne.appendChild(img)
   divOne.append(h2, p)
   spanTwo.appendChild(button)

   img.src = usersSug.img
   h2.innerHTML = usersSug.user
   p.innerHTML = usersSug.stack
   button.innerHTML = 'Seguir'
   button.addEventListener('click', ()=> {
    if (button.innerHTML == 'Seguir'){
        button.innerHTML = 'Seguindo'
    }
    else {
        button.innerHTML = 'Seguir'
    }
    button.classList.toggle('botaoSeguir')
   })

   return li

}

suggestions(sugestUsers)

