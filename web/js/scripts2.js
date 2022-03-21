//Cambiar tema entre oscuro y claro
const setTheme = theme => document.documentElement.className = theme;
const setTheme2 = theme => document.documentElement.className = theme;

// Botor ir al inicio de la pagina
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

// Modal Exito
const modAlerta = document.getElementById("modAlerta");
const enviarBtn = document.getElementById("ejemploM");
enviarBtn.addEventListener("click", mostrar);
const alertClose = document.getElementById("alertClose");
alertClose.addEventListener("click", ocultar);
function ocultar(){
  modAlerta.classList.add("oculto");
}
function mostrar(){
  modAlerta.classList.remove("oculto");
}

// Modal Error
const modAlerta2 = document.getElementById("modAlerta2");
const enviarBtn2 = document.getElementById("ejemploM2");
enviarBtn2.addEventListener("click", mostrar2);
const alertClose2 = document.getElementById("alertClose2");
alertClose2.addEventListener("click", ocultar2);
function ocultar2(){
  modAlerta2.classList.add("oculto");
}
function mostrar2(){
  modAlerta2.classList.remove("oculto");
}

// Animacion con anime.js
var special = anime({
  targets: document.getElementById('special'),
  translateX: 100,
  autoplay: false
});

document.querySelector('.anime').onclick = special.restart;