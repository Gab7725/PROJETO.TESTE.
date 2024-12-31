const botoescarrinho = document.querySelectorAll('.btn-carrinho');

botoescarrinho.forEach(botao => {
    botao.addEventListener('click', () => 
        alert('Pizza adicionada ao carrinho!')
    );
});
