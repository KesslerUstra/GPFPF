/*----------------Variaveis----------------*/

var slides = document.querySelectorAll('.slides')
var imgAtual = 0, imgProx = 1;
var buttons = document.querySelectorAll('.button')
var funcao;
var slider = document.querySelector('.slider')


/*----------------Funções----------------*/

function rodarImagens(){
    slides[imgAtual].classList.remove('slide-visivel');
    slides[imgProx].classList.remove('slide-proximo');

    buttons[imgAtual].classList.remove('button-ativo');


    if(imgAtual == (slides.length -1)){
        imgAtual = 0;
    }else{
        imgAtual ++;
    }
    if(imgProx == (slides.length -1)){
        imgProx = 0;
    }else{
        imgProx ++;
    }
    slides[imgAtual].classList.add('slide-visivel');
    slides[imgProx].classList.add('slide-proximo');

    buttons[imgAtual].classList.add('button-ativo');

}

function parar(){
    clearInterval(funcao);
}

function inicio(){
    funcao = setInterval(rodarImagens,3000);
}

function iniciar(){
    inicio()
    slider.addEventListener('mouseenter',parar);
    slider.addEventListener('mouseleave',inicio);
}

window.addEventListener("load",iniciar);