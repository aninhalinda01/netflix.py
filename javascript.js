const carrocelConteiner = document.querySelector ('conteiner')
const slides = document.querySelectorAll ('.slide')
let currentSlide = 0

function rodarCarrosel() {
  const angle = currentSlide * 90;
  carrocelConteiner.style.transform = 'rotateY(${angle}deg)';
}

function nextSlide() {
  currentSlide = (currentSlide +1) % slides.length;
  rodarCarrosel()
}

setInterval(nextSlide, 1000);