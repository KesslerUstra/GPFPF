/*----------------Variaveis----------------*/

const header = document.querySelector('header');
const botao = document.querySelector('.menu_icone');

/*----------------Funções----------------*/

function fundoHeader(){
    window.scrollY >= 130 ? header.classList.add('ativo_bg') : header.classList.remove('ativo_bg');
}

function menu_mobile(){
    header.classList.toggle('ativo');
}

/*----------------Events----------------*/

window.addEventListener('scroll', fundoHeader);
botao.addEventListener('click',menu_mobile);
