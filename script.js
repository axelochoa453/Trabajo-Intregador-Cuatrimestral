// =======================
// BUSCADOR
// =======================

const buscador = document.getElementById("buscador");
const cards = document.querySelectorAll(
".card_1, .card_2, .card_3, .card_4, .card_5"
);

buscador.addEventListener("input", buscarJuego);

function buscarJuego() {

    const texto = buscador.value.toLowerCase().trim();

    cards.forEach(card => {

        const titulo = card.querySelector("figcaption").textContent.toLowerCase();

        card.classList.remove("resaltada");
        card.classList.remove("atenuada");

        if (texto === "") {
            return;
        }

        if (titulo.includes(texto)) {
            card.classList.add("resaltada");
        } else {
            card.classList.add("atenuada");
        }

    });

}

// =======================
// CURIOSIDADES
// =======================

const curiosidades = [

    "Metro 2033 fue escrito por Dmitry Glukhovsky y publicado inicialmente en Internet.",

    "Las balas militares funcionan como moneda dentro del Metro de Moscú.",

    "Los Oscuros son una nueva especie surgida tras la guerra nuclear.",

    "Artyom es el protagonista de la trilogía principal de los videojuegos.",

    "Metro Exodus fue el primer juego de la saga con un mundo mucho más abierto."

];

const botonCuriosidad = document.getElementById("btnCuriosidad");
const textoCuriosidad = document.getElementById("textoCuriosidad");

botonCuriosidad.addEventListener("click", mostrarCuriosidad);

function mostrarCuriosidad(){

    const numeroAleatorio = Math.floor(Math.random() * curiosidades.length);

    textoCuriosidad.textContent = curiosidades[numeroAleatorio];

}

// =======================
// VALIDACIÓN DEL FORMULARIO
// =======================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){

    e.preventDefault();

    const nombre = formulario.Nombre.value.trim();
    const email = formulario.email.value.trim();
    const comentario = formulario.comentarios.value.trim();

    const mensaje = document.getElementById("mensaje");

    try{

        if(nombre === ""){
            throw new Error("Debe ingresar un nombre.");
        }

        if(!email.includes("@")){
            throw new Error("Ingrese un email válido.");
        }

        if(comentario.length < 10){
            throw new Error("El comentario debe tener al menos 10 caracteres.");
        }

        mensaje.style.color = "lightgreen";
        mensaje.textContent = "Formulario enviado correctamente.";

        formulario.reset();

    }catch(error){

        mensaje.style.color = "tomato";
        mensaje.textContent = error.message;

    }

}

// =======================
// ORDENAR VIDEOJUEGOS
// =======================

const botonOrdenar = document.getElementById("ordenarJuegos");

botonOrdenar.addEventListener("click", ordenarJuegos);

function ordenarJuegos(){

    const contenedor = document.querySelector(".cards");

    const juegos = Array.from(contenedor.children);

    juegos.sort(function(a,b){                                                      
        return a.dataset.anio - b.dataset.anio;

    });

    juegos.forEach(function(juego){

        contenedor.appendChild(juego);

    });

}