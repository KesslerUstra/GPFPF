/*----------------Variaveis----------------*/

var btnMenuAbrir  = document.querySelector('.menu-icone');
var btnMenuFechar = document.querySelector('.exit-menu')
var menu = document.querySelector('.menu');
var topicos = document.querySelectorAll('.topico-menu')
var funcaoTempo;


/*----------------Funções----------------*/

function iniciar(){
    btnMenuAbrir.addEventListener("click",abrirMenu);
    btnMenuFechar.addEventListener("click",fecharMenu);
    topicos.forEach(element => {
        element.classList.add('invisivel-topico')
    });
}

function abrirMenu(){
    let temp = 100;
    menu.classList.remove('invisivel');
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
    funcaoTempo = false;
    setTimeout(desaparecer,0)
    setTimeout(desaparecer,300)
}

function desaparecer(){
    topicos.forEach(element => {
        element.classList.add('invisivel-topico')
    });
}



window.addEventListener("load",iniciar);