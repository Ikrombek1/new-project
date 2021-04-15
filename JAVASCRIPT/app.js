
// TEXT

const texts = ['websites content', 'illustiratision lorem ipsum doolar', 'web dizayener ingenerals', 'pancak es'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 300);
}());



let progress = document.getElementById('progressbar');

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;

  progress.style.height = progressHeight + "%";
}



window.addEventListener("scroll", function () {
  let nav = document.querySelector('nav');

  nav.classList.toggle('active', window.scrollY > 500)
});


function navbar() {
  const nav = document.querySelector('#mooth');

  nav.classList.toggle("navbar");
}

window.addEventListener('scroll', function () {
  const scrol = document.querySelector(".top");

  scrol.classList.toggle("act", window.scrollY > 500)
});