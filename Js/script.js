
// Criação e configuração da função que faz o mario pular.

const marioImg = document.querySelector(".mario");

function jump(){
    marioImg.classList.add("jump");

    setTimeout(() => {
        
        marioImg.classList.remove("jump");
    
    }, 500);
}

document.addEventListener("keydown", jump)