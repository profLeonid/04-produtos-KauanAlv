'use strict'

function adicionarProduto() {
    const produto = document.getElementById('produto')
    const lista = document.getElementById('lista')
    const span = document.createElement('span')

    if (produto.value == "" || !isNaN(produto.value)) {
        alert('ERRO!!! PRODUTO INSERIDO DE FORMA ERRADA!')
        produto.value = ''
    } else {
        span.textContent = produto.value
        span.className = 'bg-blue-200 px-8 py-2 border rounded text-center'

        //Vai adicionar o span na lista
        lista.appendChild(span)
        produto.value = ''
    }
}