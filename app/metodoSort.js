const ordenarPorPrecoBtn = document.getElementById('btnOrdenarPorPreco');
ordenarPorPrecoBtn.addEventListener('click', ordenarPorPreco)

function ordenarPorPreco(){
    let ordenarLivrosPorPreco = livros.sort((a,b) => a.preco - b.preco)
    exibirLivrosNaTela(ordenarLivrosPorPreco);

}