let botãoEsquerdo = document.getElementById("L");
let botãoDireito = document.getElementById("R");
let filmes = document.getElementById("filmes");

// Quantidade total de iframes
let totalSlides = filmes.children.length;

// Tamanho de cada iframe (largura) + margem se tiver
let larguraSlide = 560; // px, baseado no seu <iframe>
let espacamento = 0; // ajuste se você colocar margin entre os vídeos
let slideAtual = 0;

function atualizar() {
  let deslocamento = (larguraSlide + espacamento) * slideAtual;
  filmes.style.transform = `translateX(-${deslocamento}px)`;
}

botãoDireito.addEventListener("click", () => {
  if (slideAtual < totalSlides - 1) {
    slideAtual++;
    atualizar();
  }
});

botãoEsquerdo.addEventListener("click", () => {
  if (slideAtual > 0) {
    slideAtual--;
    atualizar();
  }
});
