/*----------------Variaveis----------------*/

var params = {
    container: document.getElementById('anima_eventos'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'assets/json/eventos.json'
};

/*----------------Events----------------*/

lottie.loadAnimation(params);