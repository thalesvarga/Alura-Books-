let livros = []

const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
buscarEndPointAPi()

async function buscarEndPointAPi(){
    const res = await fetch(endPointAPI)
    livros = await res.json()
    livros = aplicarDesconto(livros)
    exibirLivrosNaTela(livros)
}

const secaoDeLivros = document.getElementById('livros')

function exibirLivrosNaTela(listaDeLivros){
    secaoDeLivros.innerHTML = '';
    barraDeLivrosDisponiveisComValor.innerHTML = '';

listaDeLivros.forEach(livro => {
    const disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
    secaoDeLivros.innerHTML +=`
    <div class="livro">
    <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}"/>
    <h2 class="livro__titulo">
    ${livro.titulo}
    </h2>
    <p class="livro__descricao">${livro.autor}s</p>
    <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
    <div class="tags">
      <span class="tag">${livro.categoria}</span>
    </div>
  </div>
    `
    });
}

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


function aplicarDesconto(livros){
    const desconto  = 0.3 
    const livroComDesconto = livros.map(livro =>{
        return{...livro,preco:livro.preco - (livro.preco * desconto)}
    })
    return livroComDesconto

}
const ordenarPorPrecoBtn = document.getElementById('btnOrdenarPorPreco');
ordenarPorPrecoBtn.addEventListener('click', ordenarPorPreco)

function ordenarPorPreco(){
    let ordenarLivrosPorPreco = livros.sort((a,b) => a.preco - b.preco)
    exibirLivrosNaTela(ordenarLivrosPorPreco);

}

function somarValoresDeLivrosDisponiveis (){
    return livros.reduce((acc,livro) => acc + livro.preco,0).toFixed(2)
}

