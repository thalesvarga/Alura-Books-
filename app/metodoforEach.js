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