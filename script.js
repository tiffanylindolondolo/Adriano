function mostrarMensagem() {
  document.getElementById("mensagem").classList.toggle("hidden");
}

function surpresa() {
  alert(" Que amo-te muito ❤️");
}

// criar corações animados
function criarCoracoes() {
  const container = document.querySelector(".hearts");
  const emojis = ["❤️", "🤍"]; // Lista com os corações que você quer

  setInterval(() => {
    const coracao = document.createElement("span");
    
    // Escolhe aleatoriamente entre vermelho e branco
    const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)];
    coracao.innerText = emojiAleatorio;

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = (Math.random() * 20 + 10) + "px";

    container.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 6000);
  }, 500);
}

criarCoracoes();

function tocarMusica(){
  document.getElementById("musica").play();
}