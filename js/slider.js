/*----------------Variaveis----------------*/

const slider = document.querySelector('.layout-slider');
const slides = document.querySelectorAll('.slides');
const buttons = document.querySelectorAll('.button');
const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');
var imgAtual = 0, imgProx = 1;
var funcao;



/*----------------Funções----------------*/

function rodarImagens(direcao){
    slides[imgAtual].classList.remove('slide-visivel');
    slides[imgProx].classList.remove('slide-proximo');
    buttons[imgAtual].classList.remove('button-ativo');

    if(direcao == 1){
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
    }else if(direcao == 0){
        if(imgAtual == 0){
            imgAtual = slides.length -1;
        }else{
            imgAtual --;
        }
        if(imgProx == 0){
            imgProx = slides.length -1;
        }else{  
            imgProx --;
        }
    }

    slides[imgAtual].classList.add('slide-visivel');
    slides[imgProx].classList.add('slide-proximo');
    buttons[imgAtual].classList.add('button-ativo');
}

function parar(){
    clearInterval(funcao);
}

function inicio(){
    funcao = setInterval(function(){rodarImagens(1)},3000);
}

function voltar(){
    rodarImagens(0);
    buttonPauseAdd(buttonLeft);
    setTimeout(function(){buttonPauseRemove(buttonLeft)},500);
}

function prosseguir(){
    rodarImagens(1);
    buttonPauseAdd(buttonRight);
    setTimeout(function(){buttonPauseRemove(buttonRight)},500);
}

function buttonPauseAdd(button){
    button.classList.add('button-pause');
}

function buttonPauseRemove(button){
    button.classList.remove('button-pause');
}

function iniciar(){
    inicio()
    slider.addEventListener('mouseenter',parar);
    slider.addEventListener('mouseleave',inicio);
    buttonLeft.addEventListener('click',voltar);
    buttonRight.addEventListener('click',prosseguir);
}

window.addEventListener("load",iniciar);