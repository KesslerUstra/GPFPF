/*----------------Variaveis----------------*/

var params = {
    container: document.getElementById('anima_evento'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/json/evento.json'
};

const evento_btn = Array.from(document.querySelectorAll('.link_evento'));
const itens = document.querySelectorAll('.item');
const btn_mobile_evento = document.querySelector('.btn_eventos');
const evento_opcoes = document.querySelector('.opcoes');

/*----------------Funções----------------*/

function iniciar(){
    lottie.loadAnimation(params);
    evento_btn.map(x => x.addEventListener('click', eventProdClick));

    itens.forEach((item) =>{
        const btn_descricao = item.querySelector('.descricao');

        btn_descricao.addEventListener('click',() =>{
            toggleDescricao(item)
        });
    });
}

function toggleDescricao(item){
    const descricao = item.querySelector('p');
    if(item.classList.contains('open')){
        descricao.removeAttribute('style');
        item.classList.remove('open');
    }else{
        descricao.style.height = descricao.scrollHeight + 'px';
        item.classList.add('open');
    }
}

function eventProdClick(e){
    let offSet = document.getElementById(e.target.dataset.pointer).offsetTop;

    $('html').animate({ 
		scrollTop: (offSet - 120)
	}, 500);
}

function menu_evento(){
    evento_opcoes.classList.toggle('ativo');
    btn_mobile_evento.classList.toggle('ativo');
}

/*----------------Events----------------*/

btn_mobile_evento.addEventListener('click', menu_evento);
window.addEventListener('load', iniciar);