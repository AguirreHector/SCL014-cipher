const desplazamiento = document.getElementById('selector');
const texto = document.getElementById('texto');
const textoCifrado = document.getElementById('yaCifrado');
const cifrando = document.getElementById("botonCifrarCifrar");

const desplazamientoD = document.getElementById('selectorD');
const textoD = document.getElementById('textoD');
const textoADescifrar = document.getElementById('aDescifrar')
const descifrando = document.getElementById("botonDescifrarDescifrar")

function encode(){
  const textoIngresado = texto.value;
  textoCifrado.value = textoIngresado.split('').map(c=>{
    let mayus = (c === c.toUpperCase()) ? true : false;
    let valorEntero = c.toLowerCase().charCodeAt(0);

    if(valorEntero >= 32 && valorEntero <= 126){

      const valorDesplazamiento = parseInt(desplazamiento.value);
      if(valorEntero + valorDesplazamiento > 126)
      valorEntero = 32 + (valorEntero - 126) + valorDesplazamiento - 1;
      else
      valorEntero = valorEntero + valorDesplazamiento;

    }

      let encode = String.fromCharCode(valorEntero);
      return mayus ? encode.toUpperCase() : encode;
    }).join('');
}

cifrando.addEventListener('click',encode);



function decode(){
  const textoIngresadoDescifrar = textoD.value;
  textoADescifrar.value = textoIngresadoDescifrar.split('').map(c=>{
    let mayus = (c === c.toUpperCase()) ? true : false;
    let valorEntero = c.toLowerCase().charCodeAt(0);

    if(valorEntero >= 32 && valorEntero <= 126){

      const valorDesplazamientoD = parseInt(desplazamientoD.value);
      if(valorEntero - valorDesplazamientoD < 32)
      valorEntero = 126 - (valorEntero - 32);
      else
      valorEntero = valorEntero - valorDesplazamientoD;

    }
      let decode = String.fromCharCode(valorEntero);
      return mayus ? decode.toUpperCase() : decode;
    }).join('');
}

descifrando.addEventListener('click',decode);


const cipher = {

};




export default cipher;
