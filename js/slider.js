/*----------------Variaveis Pesquisadores----------------*/

const sliderP = document.querySelector('.layout-slider-pesquisadores');
const slidesP = document.querySelectorAll('.slides-pesquisadores');
const buttonsP = document.querySelectorAll('.button-pesquisadores');
const buttonLeftP = document.querySelector('.button-left-pesquisadores');
const buttonRightP = document.querySelector('.button-right-pesquisadores');
var variaveisP ={imgAtual : 0, imgProx : 1, imgProx2 : 2, imgAnt : (slidesP.length -1), imgAnt2 : (slidesP.length -2)};
var funcaoP;

/*----------------Variaveis Estudantes----------------*/

const sliderE = document.querySelector('.layout-slider-estudantes');
const slidesE = document.querySelectorAll('.slides-estudantes');
const buttonsE = document.querySelectorAll('.button-estudantes');
const buttonLeftE = document.querySelector('.button-left-estudantes');
const buttonRightE = document.querySelector('.button-right-estudantes');
var variaveisE ={imgAtual : 0, imgProx : 1, imgProx2 : 2, imgAnt : (slidesE.length -1), imgAnt2 : (slidesE.length -2)};
var funcaoE;

/*----------------Variaveis Gerais----------------*/

var rodando = 1

/*----------------Funções Gerais----------------*/

function rodarImagens(direcao,slides,buttons,variaveis){
    slides[variaveis.imgAtual].classList.remove('slide-visivel');
    slides[variaveis.imgProx].classList.remove('slide-proximo');
    slides[variaveis.imgProx2].classList.remove('slide-proximo_2');
    slides[variaveis.imgAnt].classList.remove('slide-anterior');
    slides[variaveis.imgAnt2].classList.remove('slide-anterior_2');
    buttons[variaveis.imgAtual].classList.remove('button-ativo');

    if(direcao == 1){   
        if(variaveis.imgAtual == (slides.length -1)){
            variaveis.imgAtual = 0;
        }else{
            variaveis.imgAtual ++;
        }
        if(variaveis.imgProx == (slides.length -1)){
            variaveis.imgProx = 0;
        }else{
            variaveis.imgProx ++;
        }
        if(variaveis.imgProx2 == (slides.length -1)){
            variaveis.imgProx2 = 0;
        }else{
            variaveis.imgProx2 ++;
        }
        if(variaveis.imgAnt == (slides.length -1)){
            variaveis.imgAnt = 0;
        }else{
            variaveis.imgAnt ++;
        }
        if(variaveis.imgAnt2 == (slides.length -1)){
            variaveis.imgAnt2 = 0;
        }else{
            variaveis.imgAnt2 ++;
        }
    }else if(direcao == 0){
        if(variaveis.imgAtual == 0){
            variaveis.imgAtual = slides.length -1;
        }else{
            variaveis.imgAtual --;
        }
        if(variaveis.imgProx == 0){
            variaveis.imgProx = slides.length -1;
        }else{  
            variaveis.imgProx --;
        }
        if(variaveis.imgProx2 == 0){
            variaveis.imgProx2 = slides.length -1;
        }else{  
            variaveis.imgProx2 --;
        }
        if(variaveis.imgAnt == 0){
            variaveis.imgAnt = slides.length -1;
        }else{  
            variaveis.imgAnt --;
        }
        if(variaveis.imgAnt2 == 0){
            variaveis.imgAnt2 = slides.length -1;
        }else{  
            variaveis.imgAnt2 --;
        }
    }

    slides[variaveis.imgAtual].classList.add('slide-visivel');
    slides[variaveis.imgProx].classList.add('slide-proximo');
    slides[variaveis.imgProx2].classList.add('slide-proximo_2');
    slides[variaveis.imgAnt].classList.add('slide-anterior');
    slides[variaveis.imgAnt2].classList.add('slide-anterior_2');
    buttons[variaveis.imgAtual].classList.add('button-ativo');
}

function buttonToggle(button){
    button.classList.toggle('button-pause');
}

function iniciar(){
    inicioP();
    sliderP.addEventListener('mouseenter',pararP);
    sliderP.addEventListener('mousemove',pararP);
    sliderP.addEventListener('mouseleave',inicioP);
    buttonLeftP.addEventListener('click',voltarP);
    buttonRightP.addEventListener('click',prosseguirP);

    inicioE();
    sliderE.addEventListener('mouseenter',pararE);
    sliderE.addEventListener('mousemove',pararE);
    sliderE.addEventListener('mouseleave',inicioE);
    buttonLeftE.addEventListener('click',voltarE);
    buttonRightE.addEventListener('click',prosseguirE);
}

window.addEventListener("load",iniciar);

/*----------------Funções Pesquisadores----------------*/

function pararP(){
    clearInterval(funcaoP);
}

function inicioP(){
    funcaoP = setInterval(function(){rodarImagens(1,slidesP,buttonsP,variaveisP)},6000);
}

function voltarP(){
    rodarImagens(0,slidesP,buttonsP,variaveisP)
    buttonToggle(buttonLeftP);
    setTimeout(function(){buttonToggle(buttonLeftP)},300);
}

function prosseguirP(){
    rodarImagens(1,slidesP,buttonsP,variaveisP)
    buttonToggle(buttonRightP);
    setTimeout(function(){buttonToggle(buttonRightP)},300);
}

/*----------------Funções Estudantes----------------*/


function pararE(){
    clearInterval(funcaoE);
}

function inicioE(){
    funcaoE = setInterval(function(){rodarImagens(1,slidesE,buttonsE,variaveisE)},6000);

}

function voltarE(){
    rodarImagens(0,slidesE,buttonsE,variaveisE);
    buttonToggle(buttonLeftE);
    setTimeout(function(){buttonToggle(buttonLeftE)},300);
}

function prosseguirE(){
    rodarImagens(1,slidesE,buttonsE,variaveisE);
    buttonToggle(buttonRightE);
    setTimeout(function(){buttonToggle(buttonRightE)},300);
}