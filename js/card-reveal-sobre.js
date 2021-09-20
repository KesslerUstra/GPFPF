/*----------------Variaveis----------------*/

var card = document.querySelector('.card');
var funcao;

/*----------------Funções----------------*/

function iniciar(){
    funcao = setInterval(rodarCard,5000);
    card.addEventListener("mouseenter",mouseEnterCard);
    card.addEventListener("click",clickCard);
    card.addEventListener("mouseleave",mouseOutCard); 
}

function rodarCard(){
    card.classList.toggle("flip");
}

function mouseEnterCard(){
    clearInterval(funcao);
}

function mouseOutCard(){
    funcao = setInterval(rodarCard,5000);
}

function clickCard(){
    card.classList.toggle("flip");
}

window.addEventListener("load",iniciar);
