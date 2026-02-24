'use strict'

function adicionarProduto() {
    const codigo = document.getElementById('codigo')
    const produto = document.getElementById('produto')
    const quantidade = document.getElementById('quantidade')
    const lista = document.getElementById('lista')
    const spanCodigo = document.createElement('span')
    const spanProduto = document.createElement('span')
    const spanQuantidade = document.createElement('span')
    const div = document.createElement('div')

    if (codigo.value == "" || isNaN(codigo.value)) {
        alert('ERRO, O CÓDIGO DEVE CONTER SOMENTE NÚMEROS!!!')
        codigo.value = ''

    } else if (produto.value == "" || !isNaN(produto.value)) {
        alert('ERRO, O PRODUTO NÃO PODE CONTER SOMENTE NÚMEROS!!!')
        produto.value = ''

    } else if (quantidade.value == "" || isNaN(quantidade.value)) {
        alert('ERRO, A QUANTIDADE DEVE SER SOMENTE NÚMEROS!!!')
        quantidade.value = ''

    } else {
        div.className = 'flex w-80 justify-center gap-2'

        spanCodigo.textContent = codigo.value
        spanCodigo.className = 'bg-blue-200 px-8 py-2 border rounded text-center'

        spanProduto.textContent = produto.value
        spanProduto.className = 'bg-blue-200 px-8 py-2 border rounded text-center'
        
        spanQuantidade.textContent = quantidade.value
        spanQuantidade.className = 'bg-blue-200 px-8 py-2 border rounded text-center'
        
        div.appendChild(spanCodigo)
        div.appendChild(spanProduto)
        div.appendChild(spanQuantidade)
        lista.appendChild(div)
        
        codigo.value = ''
        produto.value = ''
        quantidade.value = ''
    }
}