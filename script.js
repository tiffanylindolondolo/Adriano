function mostrarMensagem() {
  document.getElementById("mensagem").classList.toggle("hidden");
}

function surpresa() {
  alert(" Que amo-te muito ❤️");
}

// criar corações animados
function criarCoracoes() {
  const container = document.querySelector(".hearts");

  setInterval(() => {
    const coracao = document.createElement("span");
    coracao.innerText = "❤️";

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = (Math.random() * 20 + 10) + "px";

    container.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 6000);
  }, 500);
}

criarCoracoes();