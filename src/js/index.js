/*

Objetico 1 - quando o ususario clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataformas
     Passo 1 - pegar o botão de seleção de plataformas no JS para poder verificar quando o usuario clicar em cima dele

     Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

     Passo 3 - pegar o clique do usuario no JS

     Passo 4 - quando o usuario clicar, adicionar a classe ativo no botão para que o conteudo dele apareça

objetivo 2 - caso a lista de botõe de plataforma já esteja aparencendo e o clicar no botão de fechar, o conteudo deve ser escondido

     Passo 1 - verificar se o botão já esta aberto, se sim, devemos remover a classe ativo para que ele esconda o conteudo

*/
const botao = document.querySelector(".btn-plataformas")

const elementoPlataformas = document.querySelector(".btn-plataformas .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});