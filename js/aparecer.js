/*----------------Variaveis Gerais----------------*/

objs = document.querySelectorAll('.reveal')

/*----------------Funções Gerais----------------*/

function aparecerObjetos(){
    objs.forEach((element,index) => {
        if(element.getBoundingClientRect().top < (window.innerHeight - window.innerHeight*0.15)){
            element.classList.remove('reveal')
        }
    });
}

function iniciar(){
    window.addEventListener('scroll',aparecerObjetos)
}

window.addEventListener("load",iniciar);