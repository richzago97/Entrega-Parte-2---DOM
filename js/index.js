//Adicionar os Cards dinamicamente 

const container = document.getElementsByClassName('container')[0]

for(let i = 0; i < data.length; i++){

    const card      = document.createElement('div')
    card.classList.add('card')
    const divImagem = document.createElement('div')
    divImagem.classList.add('imagem')
    const imagem    = document.createElement('img')
    imagem.src = data[i].img

    const conteudo = document.createElement('div')
    conteudo.classList.add('conteudo')

    const pTag     = document.createElement('p')
    pTag.classList.add('tag') 
    pTag.innerText = data[i].tag
    const p = document.createElement('p')
    p.innerText = data[i].description
    const h1 = document.createElement('h1')
    h1.innerText = data[i].nameItem

    const h4 = document.createElement('h4')
    h4.innerText = `R$ ${data[i].value}`
    const buttonCard = document.createElement('button')
    buttonCard.classList.add('button-card')
    buttonCard.innerText = data[i].addCart
    buttonCard.setAttribute('id',`${data[i].id}`)

    

    container.appendChild(card)
    card.appendChild(divImagem)
    divImagem.appendChild(imagem)
    card.appendChild(conteudo)
    conteudo.appendChild(pTag)
    conteudo.appendChild(h1)
    conteudo.appendChild(p)
    conteudo.appendChild(h4)
    conteudo.appendChild(buttonCard)

    buttonCard.addEventListener("click",(event)=>{
        adicionarCarrinho(event)
        somarCarrinho()
    })
}



const buttonCard = document.getElementsByClassName('button-card')
const conteudoCarrinho = document.getElementsByClassName('conteudo-carrinho')[0]
const card = document.getElementsByClassName('card')

let novaLista = []

//Função Adicionar Produto
function adicionarCarrinho(event){
    const click    = event.target
    for(let i = 0 ; i < data.length; i++){
        if(click.id == data[i].id){
            novaLista.push(data[i])
           renderizarCarrinho(data[i])
        }
    }
    const carrinhoVazio = document.getElementById('carrinho-vazio')
    carrinhoVazio.style.display = 'none'
}


function renderizarCarrinho(item){
      
        
            const titulo = document.createElement('h1')
            titulo.innerText = item.nameItem
            titulo.classList.add('titulo')
            const preco = document.createElement('h4')
            preco.innerText = `R$ ${item.value}`
            preco.classList.add('preco')
            const secondDiv = document.createElement('div')
            secondDiv.classList.add('secondDiv')
            const newDivImagem = document.createElement('div')
            newDivImagem.classList.add('newDivImagem')
            const newImagem    = document.createElement('img')
            newImagem.classList.add('newImagem')
            newImagem.src = item.img
            const buttonRemove = document.createElement('button')
            buttonRemove.classList.add('buttonRemove')
            buttonRemove.innerText = 'Remover Produto'
            buttonRemove.setAttribute('id',`${item.id}`)
            const divRecebedor = document.createElement("div")
            divRecebedor.classList.add('divRecebedor')
            newDivImagem.appendChild(newImagem)
            secondDiv.appendChild(titulo)
            secondDiv.appendChild(preco)
            secondDiv.appendChild(buttonRemove)
            divRecebedor.appendChild(newDivImagem)
            divRecebedor.appendChild(secondDiv)
            conteudoCarrinho.append(divRecebedor)

            buttonRemove.addEventListener("click",()=>{
                removerCarrinho(item.id)
                somarCarrinho()
            })
}



//Função Remover Produto

function removerCarrinho(id){
    
    novaLista = novaLista.filter(function(produto){
     console.log(produto)
   return produto.id != id
 })

  conteudoCarrinho.innerText = ''
  for(let i = 0; i < novaLista.length;i++){
      renderizarCarrinho(novaLista[i])
  }
  if(novaLista.length == 0){
    //const carrinhoVazio = document.getElementById('carrinho-vazio')
    //carrinhoVazio.style.display = 'flex'
    console.log('teste')
  }
 console.log(novaLista)
// console.log(renderizarCarrinho)
// console.log(conteudoCarrinho)
}

function somarCarrinho(){
let soma = 0
let count = 0
const preco = document.getElementById('preco')
const quantidade = document.getElementById('quantidade')


    for(let i = 0; i < novaLista.length; i++){
        
        soma += novaLista[i].value
        count++

    }
        
    preco.innerText = `R$ ${soma}`
    quantidade.innerText = count 
}


function displayPrecoeQuantidade(){

    const divTotal = document.createElement('div')
    divTotal.classList.add('divTotal')
    const quantidade = document.createElement('h6')
    quantidade.classList.add('quantidade')
    
    const preco = document.createElement('h5')
    preco.classList.add('preco')
    const precoSpan = document.createElement('span')
    precoSpan.id = 'preco'
    const quantidadeSpan = document.createElement('span')
    quantidadeSpan.id = 'quantidade'

    const containerCarrinho = document.querySelector('.container-carrinhodois')
    quantidade.innerText = `Quantidade:`
    preco.innerText = `Total: `
    console.log(containerCarrinho)

    divTotal.appendChild(quantidade)
    divTotal.appendChild(quantidadeSpan)
    divTotal.appendChild(preco)
    divTotal.appendChild(precoSpan)
    containerCarrinho.appendChild(divTotal)
    
somarCarrinho()
}
displayPrecoeQuantidade()









