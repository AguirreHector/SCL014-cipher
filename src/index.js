import cipher from './cipher.js';

const primera = document.getElementById('primera')
const segunda = document.getElementById('segunda')
const tercera = document.getElementById('tercera')
const cuarta = document.getElementById('cuarta')
const quinta = document.getElementById('quinta')


let clickeado = (e) => {

    switch (e.target.id) {
        case "botonCifrar":

            primera.style.display = "none";
            segunda.style.display = "inline";
            break;
        case "botonCifrarCifrar":

            segunda.style.display = "none";
            tercera.style.display = "inline";
            break;

        case "botonDescifrar":

            primera.style.display = "none";
            cuarta.style.display = "inline";
            break;

        case "botonDescifrarDescifrar":

            cuarta.style.display = "none";
            quinta.style.display = "inline";
            break;

        case "alInicio":

            tercera.style.display = "none";
            quinta.style.display = "none";
            primera.style.display = "inline";
            break;
    }
}

document.addEventListener('click', clickeado);


// const botonCifrar = document.getElementById('botonCifrar')
// const muestraCifrar = () => {
//     primera.style.display = "none";
//     segunda.style.display = "inline";
// }
// botonCifrar.addEventListener('click', muestraCifrar);

// const botonDescifrar = document.getElementById('botonDescifrar')
// const muestraDescifrar = () => {
//     primera.style.display = "none";
//     cuarta.style.display = "inline";
// }
// botonDescifrar.addEventListener('click', muestraDescifrar);

// const botonCifrarCifrar = document.getElementById('botonCifrar')
// const muestradCifrar = () => {
//     primera.style.display = "none";
//     segunda.style.display = "inline";
// }
// botonCifrar.addEventListener('click', muestraCifrar);

// const botonDaescifrar = document.getElementById('botonDescifrar')
// const muestraDefscifrar = () => {
//     primera.style.display = "none";
//     tercera.style.display = "inline";
// }
// botonDescifrar.addEventListener('click', muestraDescifrar);




console.log(cipher);

