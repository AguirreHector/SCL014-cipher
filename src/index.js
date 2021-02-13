import cipher from './cipher.js';

const primera = document.getElementById('primera')
const segunda = document.getElementById('segunda')
const tercera = document.getElementById('tercera')
const cuarta = document.getElementById('cuarta')
const quinta = document.getElementById('quinta')

let clickeado = (e) => {

    switch (e.target.id) {
        case "botonCifrar": {

            primera.style.display = "none";
            segunda.style.display = "inline";
            break;
        }

        case "botonCifrarCifrar": {

            segunda.style.display = "none";
            tercera.style.display = "inline";
            let desplazamiento = document.getElementById('selector').value;
            let texto = document.getElementById('texto').value;
            document.getElementById('yaCifrado').value = cipher.encode(desplazamiento,texto);
            break;
        }

        case "alInicio": {

            tercera.style.display = "none";
            primera.style.display = "inline";
            break;
        }

        case "botonDescifrar": {

            primera.style.display = "none";
            cuarta.style.display = "inline";
            break;
        }

        case "botonDescifrarDescifrar": {

            cuarta.style.display = "none";
            quinta.style.display = "inline";
            let desplazamientoD = document.getElementById('selectorD').value;
            let textoD = document.getElementById('textoD').value;
            document.getElementById('aDescifrar').value = cipher.decode(desplazamientoD,textoD);
            break;
        }

        case "alInicio2": {

            quinta.style.display = "none";
            primera.style.display = "inline";
            break;
        }
    }
}

document.addEventListener('click', clickeado);

// eslint-disable-next-line no-console
console.log(cipher);

