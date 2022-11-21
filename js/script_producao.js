/*----------------Variaveis----------------*/

var params = {
    container: document.getElementById('anima_prod'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/json/producao.json'
};

const prod_btn = Array.from(document.querySelectorAll('.link_prod'));
const btn_mobile_prod = document.querySelector('.btn_prod');
const prod_opcoes = document.querySelector('.opcoes');

/*----------------Funções----------------*/

function iniciar(){
    lottie.loadAnimation(params);
    prod_btn.map(x => x.addEventListener('click', eventProdClick));
}

function eventProdClick(e){
    let offSet = document.getElementById(e.target.dataset.pointer).offsetTop;

    $('html').animate({ 
		scrollTop: (offSet - 120)
	}, 500);
}

function menu_prod(){
    prod_opcoes.classList.toggle('ativo');
    btn_mobile_prod.classList.toggle('ativo');
}

/*----------------Events----------------*/

btn_mobile_prod.addEventListener('click', menu_prod);
window.addEventListener('load', iniciar);