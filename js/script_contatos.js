let btn_copiar = document.querySelector('.copiar');
let msg_copiar = document.querySelector('.mensagem_copiar');
let timerMsg = setInterval(1);

var params = {
    container: document.getElementById('anima_cont'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/json/contatos.json'
};

btn_copiar.addEventListener('click',()=>{
    let content = btn_copiar.children[1];
    navigator.clipboard.writeText(content.innerHTML);
    msgCopiado();
});

lottie.loadAnimation(params);

function msgCopiado(){
    clearTimeout(timerMsg)
    msg_copiar.classList.add('ativo');
    timerMsg = setTimeout(() =>{
        msg_copiar.classList.remove('ativo');
    },3000);
}