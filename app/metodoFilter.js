const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn =>btn.addEventListener('click',filtrarLivrosPorCategorias))

const barraDeLivrosDisponiveisComValor =document.getElementById("valor_total_livros_disponiveis");

function filtrarLivrosPorCategorias(){
    const elementosParaCadaBtn = document.getElementById(this.id)
    const categoria = elementosParaCadaBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados)
    if(categoria == 'disponivel'){
        const valorTotal = somarValoresDeLivrosDisponiveis()
        exibirBarraDePrecoDeLivrosDisponiveis(valorTotal)

    }
};


function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirBarraDePrecoDeLivrosDisponiveis(valorTotal){
    barraDeLivrosDisponiveisComValor.innerHTML =`
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}