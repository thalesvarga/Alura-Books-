function aplicarDesconto(livros){
    const desconto  = 0.3 
    const livroComDesconto = livros.map(livro =>{
        return{...livro,preco:livro.preco - (livro.preco * desconto)}
    })
    return livroComDesconto

}