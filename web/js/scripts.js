//Menu responsive telefono y tablet
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

//Cambiar tema entre oscuro y claro
const setTheme = theme => document.documentElement.className = theme;

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
const enviarBtn = document.getElementById("enviar");
enviarBtn.addEventListener("click", mostrar);
const alertClose = document.getElementById("alertClose");
alertClose.addEventListener("click", ocultar);
function ocultar(){
  modAlerta.classList.add("oculto");
}
function mostrar(){
  modAlerta.classList.remove("oculto");
}