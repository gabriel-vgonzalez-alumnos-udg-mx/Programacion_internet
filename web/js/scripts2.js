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


// const btnEnviar = document.querySelector('#submit');
// btnEnviar.addEventListener('click', function(evento){
//   console.log(evento);
//   evento.preventDefault();

//   //validar un formulario
//   console.log('Enviando formulario...');
// });


//Eventos de los imputs y text area

const datos = {
  nombre: '',
  email: '',
  telefono: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#tel')
const formulario = document.querySelector('.formulario1');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);


//Event de sumbit

formulario.addEventListener('sumbit', function(evento){
  evento.preventDefault();
  //Validar el formulario

  const{ nombre , email, telefono} = datos;

  if(nombre === '' || email === '' || telefono === ''){
    mostrarAlerta('Todos los campos son obligatorios', 'error');
    return; //corta la ejecucion del código
  }

  //Crear la laerta de enviado correctamente
  mostrarAlerta(' El formulario ha sido enviado')
});


function leerTexto(e){
  //console.log(e.target.value);
  datos[e.target.id] = e.target.value;
  //console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
  const alerta = dcument.createElement('p');
  alerta.textContent = mensaje;

  if(error){
    alerta.classList.add('error');
  }else{
    alerta.classList.add('correcto');
  }

  formulario.appendChild(alerta);
  //Desaparezca despues de 5s
  setTimeout(() => {
    error.remove();
  }, 5000);
}

//Validar el radio

function comprobar() {
       var pulsado = false;//variable de comprobación
       var opciones = document.formulario1.genero; //array de elementos
       var elegido = -1; //número del elemento elegido en el array
       for (i=0;i<opciones.length;i++) { //bucle de comprobación
             if (opciones[i].checked == true) {
             pulsado = true 
             elegido = i //número del elemento elegido en el array
             }
           }
       if (pulsado == true) { //mensaje de formulario válido
          miOpcion = opciones[elegido].value
          mostrarAlerta('El formulario ha sido enviado')
          }
       else { //mensaje de formulario no válido.
          mostrarAlerta('Todos los campos son obligatorios', 'error');
          return false //el formulario no se envía.
          }
       }

//validar el select
function elige() {
  var lista = document.getElementById("paises")
  if (lista.selectedIndex == null || lista.selectedIndex == 0) { 
      mostrarAlerta('Todos los campos son obligatorios', 'error');
      return false
      }
  else { 
      mostrarAlerta('El formulario ha sido enviado')
      }		
}