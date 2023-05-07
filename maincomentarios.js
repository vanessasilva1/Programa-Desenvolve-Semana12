//const robotron = document.querySelector('#robotron');

//robotron.addEventListener("click", dizOi);
//escutar de enventos, do tipo clicle, quando houver um clique faça algo. Parametros - click, e a operação que ela vai fazer

//robotron.addEventListener("click", (evento) => {
  //  console.log(evento);
//});

//function dizOi(nome) {
  //  console.log(nome);
//}

//dizOi('Ana')

//função anônima.

//robotron.addEventListener("click", function() {
//  código
//}) OUUU ARROW FUNCTION
//robotron.addEventListener("click", () => {

//});

//const subtrair = document.querySelector('#subtrair');
//const somar = document.querySelector('#somar');
//const braco = document.querySelector('#braco');

//const controle = document.querySelectorAll('.controle-ajuste'); //busca todos os elementos que tem essa classe. Retorna um array

const controle = document.querySelectorAll('[data-controle]');
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//atualizar as estatisticas com os dados das peças a cada clique
        //console.log(evento.target)//onde aquele clique aconteceu, oque aconteceu.
        //manipulaDados(evento.target.textContent, evento.target.parentNode) //toda vez que o input é um value, e um texto é um text. content. Ele pega o conteúdo daquele meu botão
        //console.log(evento.target.parentNode) // me retorna o pai do elemento no html


controle.forEach( (elemento) => { //quero saber qual elemento foi clicado. elemento  é os elementos do array, seu valor
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})
/*Data-attributes são utilizados para guardar valores em elementos HTML. Esses valores podem ser manipulados através do JavaScript. Também é possível estilizar elementos HTML com CSS referenciando o seu data-attribute. Essa funcionalidade é bem recente no mundo do desenvolvimento, sendo lançada na última versão do HTML(HTML5). */

//somar.addEventListener("click", (evento) => {
    //braco.value = parseInt(braco.value) + 1//no value/valor do braço quero incrementar 1
//});

//somar.addEventListener("click", (evento) => {manipulaDados("somar")});

//subtrair.addEventListener("click", (evento) => {manipulaDados("subtrair")});

//subtrair.addEventListener("click", (evento) => {
   // braco.value = parseInt(braco.value) - 1//no value/valor do braço quero incrementar 1
//});

//problema --- dados de formulário vem com string e não permite essa soma de forma correta, por isso tem que converter para numero

function manipulaDados(operacao, controle) { //controle é o pai do elemento que foi clicado
    //const peca = controle.querySelector('.controle-contador');
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInd(peca.value) - 1 //no value/valor do braço quero incrementar 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

//que peça foi clicada e com ela eu manipulo os dados
function atualizaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}
