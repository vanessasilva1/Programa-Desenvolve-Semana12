//Chegou a hora de colocar a mão na massa! No desafio desta aula você irá criar uma função anônima que retorne a frase “Fui clicado”. Esta função será aplicada em conjunto de um evento de clique.

const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
  resultado.innerHTML = "Fui clicado"
});