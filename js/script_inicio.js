/*----------------Variaveis----------------*/

var params = {
    container: document.getElementById('anima_logo'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'assets/json/logo.json'
};

/*----------------Funções----------------*/

function iniciar(){
    lottie.loadAnimation(params);
}

/*----------------Events----------------*/

window.addEventListener('load', iniciar);