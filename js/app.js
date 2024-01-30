function trocaTexto(tag, texto) {
  let notifica = document.querySelector(tag);
  notifica.innerHTML = texto;
}

function alterarStatus(id) {
  // Pega o game que eu cliquei pelo ID dele
  let gameClicado = document.getElementById(`game-${id}`);
  // Pega a imagem do game clicado pela CLASSE
  let imagem = gameClicado.querySelector(".dashboard__item__img");
  // Pega o botão do game clicado pela CLASSE
  let botao = gameClicado.querySelector(".dashboard__item__button");

  // Devolve a lista de classe do elemento, e verifica se contém a classe dashboard__item__img--rented //
  if (imagem.classList.contains("dashboard__item__img--rented")) {
    imagem.classList.remove("dashboard__item__img--rented");
    botao.classList.contains("dashboard__item__button--return");
    botao.classList.remove("dashboard__item__button--return");
    botao.innerHTML = "Alugar";
    trocaTexto("h1", "Você devolveu o jogo com sucesso!");
  } else {
    imagem.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    botao.innerHTML = "Devolver";
    trocaTexto("h1", "Você alugou o jogo com sucesso!");
  }
}
