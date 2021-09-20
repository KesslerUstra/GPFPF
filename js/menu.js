/*----------------Variaveis----------------*/

var btnMenuAbrir  = document.querySelector('.menu-icone');
var btnMenuFechar = document.querySelector('.exit-menu')
var menu = document.querySelector('.menu');


/*----------------Funções----------------*/

function iniciar(){
    btnMenuAbrir.addEventListener("click",abrirMenu);
    btnMenuFechar.addEventListener("click",fecharMenu);
}

function abrirMenu(){
    menu.classList.remove('invisivel');
}

function fecharMenu(){
    menu.classList.add('invisivel');
}


window.addEventListener("load",iniciar);