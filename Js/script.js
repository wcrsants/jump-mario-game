
// Criação e configuração da função que faz o mario pular.

const marioImg = document.querySelector(".mario");

function jump(){
    marioImg.classList.add("jump");

    setTimeout(() => {
        
        marioImg.classList.remove("jump");
    
    }, 500);
}

document.addEventListener("keydown", jump);


// Criação e configuração que verifica se o mario encostou no tubo (pipe) e para o jogo

const pipe = document.querySelector('.pipe');

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(marioImg).bottom.replace('px', "");

    
    
    if(pipePosition <= 125 && marioPosition < 80 && pipePosition > 0){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        marioImg.style.animation = 'none';
        marioImg.style.bottom = `${marioPosition}px`;

        marioImg.src = "./images/game-over.png";
        marioImg.style.width = "75px";
        marioImg.style.marginLeft = "50px";

        clearInterval(loop);
    }
},10)