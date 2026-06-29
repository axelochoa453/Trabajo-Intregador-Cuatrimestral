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

