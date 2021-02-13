
const cipher = {

  encode: (texto, desplazamiento) => {
    const textoIngresado = texto;
    const textoCifrado = String(textoIngresado).split('').map(c=>{
    let mayus = (c === c.toUpperCase()) ? true : false;
    let valorEntero = c.toLowerCase().charCodeAt(0);

    if(valorEntero >= 32 && valorEntero <= 126){

      const valorDesplazamiento = parseInt(desplazamiento);
      if(valorEntero + valorDesplazamiento > 126)
      valorEntero = 32 + (valorEntero - 126) + valorDesplazamiento - 1;
      else
      valorEntero = valorEntero + valorDesplazamiento;

    }

      let encode = String.fromCharCode(valorEntero);
      return mayus ? encode.toUpperCase() : encode;
    }).join('');
    return textoCifrado;
},

  decode: (textoD, desplazamientoD) =>{
  const textoIngresadoDescifrar = textoD;
  const textoADescifrar = String(textoIngresadoDescifrar).split('').map(c=>{
    let mayus = (c === c.toUpperCase()) ? true : false;
    let valorEntero = c.toLowerCase().charCodeAt(0);

    if(valorEntero >= 32 && valorEntero <= 126){

      const valorDesplazamientoD = parseInt(desplazamientoD);
      if(valorEntero - valorDesplazamientoD < 32)
      valorEntero = 126 - (valorEntero - 32);
      else
      valorEntero = valorEntero - valorDesplazamientoD;

    }
      let decode = String.fromCharCode(valorEntero);
      return mayus ? decode.toUpperCase() : decode;
    }).join('');
    return textoADescifrar;
}};

export default cipher;
