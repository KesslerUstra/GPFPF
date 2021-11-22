/*----------------Variaveis----------------*/

var btnMenu = document.querySelector('.menu-icone');
var menu = document.querySelector('.menu');
var topicos = document.querySelectorAll('.topico-menu');
var header = document.querySelector('.header')
var funcaoTempo;
var menuControlador = 0;

/*----------------Funções----------------*/

function iniciar(){
    btnMenu.addEventListener("click",menuFuncao);
    topicos.forEach(element => {
        element.classList.add('invisivel-topico');
    });

    const propriedades = header.getBoundingClientRect();
    menu.style.height = "calc(100% - "+propriedades.height+"px)"
}

function menuFuncao(){
    if(menuControlador == 0){
        abrirMenu()
        menuControlador = 1
    }
    else if(menuControlador == 1){
        fecharMenu()
        menuControlador = 0
    }
}

function abrirMenu(){
    let temp = 100;
    menu.classList.remove('invisivel');
    btnMenu.classList.add('ativo');
    funcaoTempo = true;
    topicos.forEach(element => {
        if(funcaoTempo == true){
            setTimeout(function(){aparecer(element)},temp);
            temp+=50;
        }
    });
}

function aparecer(element){
    element.classList.remove('invisivel-topico');
}

function fecharMenu(){
    menu.classList.add('invisivel');
    btnMenu.classList.remove('ativo');
    funcaoTempo = false;
    setTimeout(desaparecer,0);
    setTimeout(desaparecer,300);
}

function desaparecer(){
    topicos.forEach(element => {
        element.classList.add('invisivel-topico');
    });
}

window.addEventListener("load",iniciar);