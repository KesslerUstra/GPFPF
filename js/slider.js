/*----------------Variaveis Pesquisadores----------------*/

const sliderP = document.querySelector('.layout-slider-pesquisadores');
const slidesP = document.querySelectorAll('.slides-pesquisadores');
const buttonsP = document.querySelectorAll('.button-pesquisadores');
const buttonLeftP = document.querySelector('.button-left-pesquisadores');
const buttonRightP = document.querySelector('.button-right-pesquisadores');
var imgAtualP = 0, imgProxP = 1, imgAntP = (slidesP.length -1);
var funcaoP;

/*----------------Variaveis Estudantes----------------*/

const sliderE = document.querySelector('.layout-slider-estudantes');
const slidesE = document.querySelectorAll('.slides-estudantes');
const buttonsE = document.querySelectorAll('.button-estudantes');
const buttonLeftE = document.querySelector('.button-left-estudantes');
const buttonRightE = document.querySelector('.button-right-estudantes');
var imgAtualE = 0, imgProxE = 1, imgAntE = (slidesE.length -1);
var funcaoE;


/*----------------Funções Pesquisadores----------------*/

function rodarImagensP(direcao){
    slidesP[imgAtualP].classList.remove('slide-visivel');
    slidesP[imgProxP].classList.remove('slide-proximo');
    slidesP[imgAntP].classList.remove('slide-anterior');
    buttonsP[imgAtualP].classList.remove('button-ativo');

    if(direcao == 1){   
        if(imgAtualP == (slidesP.length -1)){
            imgAtualP = 0;
        }else{
            imgAtualP ++;
        }
        if(imgProxP == (slidesP.length -1)){
            imgProxP = 0;
        }else{
            imgProxP ++;
        }
        if(imgAntP == (slidesP.length -1)){
            imgAntP = 0;
        }else{
            imgAntP ++;
        }
    }else if(direcao == 0){
        if(imgAtualP == 0){
            imgAtualP = slidesP.length -1;
        }else{
            imgAtualP --;
        }
        if(imgProxP == 0){
            imgProxP = slidesP.length -1;
        }else{  
            imgProxP --;
        }
        if(imgAntP == 0){
            imgAntP = slidesP.length -1;
        }else{  
            imgAntP --;
        }
    }

    slidesP[imgAtualP].classList.add('slide-visivel');
    slidesP[imgProxP].classList.add('slide-proximo');
    slidesP[imgAntP].classList.add('slide-anterior');
    buttonsP[imgAtualP].classList.add('button-ativo');
}

function pararP(){
    clearInterval(funcaoP);
}

function inicioP(){
    funcaoP = setInterval(function(){rodarImagensP(1)},3000);
}

function voltarP(){
    rodarImagensP(0);
    buttonToggle(buttonLeftP);
    setTimeout(function(){buttonToggle(buttonLeftP)},300);
}

function prosseguirP(){
    rodarImagensP(1);
    buttonToggle(buttonRightP);
    setTimeout(function(){buttonToggle(buttonRightP)},300);
}

/*----------------Funções Estudantes----------------*/

function rodarImagensE(direcao){
    slidesE[imgAtualE].classList.remove('slide-visivel');
    slidesE[imgProxE].classList.remove('slide-proximo');
    slidesE[imgAntE].classList.remove('slide-anterior');
    buttonsE[imgAtualE].classList.remove('button-ativo');

    if(direcao == 1){
        if(imgAtualE == (slidesE.length -1)){
            imgAtualE = 0;
        }else{
            imgAtualE ++;
        }
        if(imgProxE == (slidesE.length -1)){
            imgProxE = 0;
        }else{
            imgProxE ++;
        }
        if(imgAntE == (slidesE.length -1)){
            imgAntE = 0;
        }else{
            imgAntE ++;
        }
    }else if(direcao == 0){
        if(imgAtualE == 0){
            imgAtualE = slidesE.length -1;
        }else{
            imgAtualE --;
        }
        if(imgProxE == 0){
            imgProxE = slidesE.length -1;
        }else{  
            imgProxE --;
        }
        if(imgAntE == 0){
            imgAntE = slidesE.length -1;
        }else{  
            imgAntE --;
        }
    }

    slidesE[imgAtualE].classList.add('slide-visivel');
    slidesE[imgProxE].classList.add('slide-proximo');
    slidesE[imgAntE].classList.add('slide-anterior');
    buttonsE[imgAtualE].classList.add('button-ativo');
}

function pararE(){
    clearInterval(funcaoE);
}

function inicioE(){
    funcaoE = setInterval(function(){rodarImagensE(1)},3000);
}

function voltarE(){
    rodarImagensE(0);
    buttonToggle(buttonLeftE);
    setTimeout(function(){buttonToggle(buttonLeftE)},300);
}

function prosseguirE(){
    rodarImagensE(1);
    buttonToggle(buttonRightE);
    setTimeout(function(){buttonToggle(buttonRightE)},300);
}

/*----------------Funções Gerais----------------*/

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
    sliderE.addEventListener('mouseleave',inicioE);
    buttonLeftE.addEventListener('click',voltarE);
    buttonRightE.addEventListener('click',prosseguirE);
}

window.addEventListener("load",iniciar);