const desplazamiento = document.getElementById('selector');
const texto = document.getElementById('texto');
const textoCifrado = document.getElementById('yaCifrado');
const cifrando =  document.getElementById('botonCifrarCifrar');
const valorDesplazamiento = desplazamiento.value;

function encode(){
  const textoIngresado = texto.value;
  textoCifrado.value = textoIngresado.split('').map(c=>{
    let mayus = (c === c.toUpperCase()) ? true : false;
    let valorEntero = c.toLowerCase().charCodeAt(0);
    if(valorEntero >= 97 && valorEntero <= 122){

        // const valorDesplazamiento = desplazamiento.value;

        if(valorEntero + valorDesplazamiento > 122)
          valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
        else
          valorEntero = valorEntero + valorDesplazamiento;
      }

      let encode = String.fromCharCode(valorEntero);
      return mayus ? encode.toUpperCase() : encode;
    }).join('');
}



const cipher = cifrando.addEventListener('click',encode);




export default cipher;
