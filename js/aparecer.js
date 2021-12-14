/*----------------Variaveis Gerais----------------*/

objs = document.querySelectorAll('.reveal')

/*----------------Funções Gerais----------------*/

function aparecerObjetos(){
    objs.forEach((element,index) => {
        if(element.getBoundingClientRect().top < window.innerHeight){
            element.classList.remove('reveal')
        }
    });
}

function iniciar(){
    window.addEventListener('scroll',aparecerObjetos)
}

window.addEventListener("load",iniciar);