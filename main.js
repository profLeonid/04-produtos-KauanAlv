'use strict'

function adicionarProduto(){
    const produto = document.getElementById('produto')
    const lista = document.getElementById('lista')
    
    const span = document.createElement('span')
    span.textContent = produto.value
    span.className = 'bg-blue-200 px-8 py-2 border rounded text-center'

    //Vai adicionar o span na lista
    lista.appendChild(span)
}