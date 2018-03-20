/*
Algoritmo de cifrado programado por Eduardo López Melo
nota: los comentarios son solo una guía, estos pueden ser eliminados en cualquier momento
*/

function cifrar (mensaje, contra)
{
    /********************
     * Función Principal*
     ********************/

    var mensaje = document.getElementById('mensaje').value;
    var contra = document.getElementById('contra').value;

    /*Esto es solo para comproar el funcionamiento del botón*/
    console.log(mensaje);
    console.log(contra);
    /*fin*/ 
    var longitudMensaje = mensaje.length;
    var longitudContra = contra.length;
    var valorLongitudMensaje = parseInt(longitudMensaje);
    var valorLongitudContra = parseInt(longitudContra);

    /*inicio De la comprobación*/
    console.log(valorLongitudMensaje);
    console.log(valorLongitudContra);
    /*fin*/

    var tamanioBloque = calcularTamanioBloque (valorLongitudMensaje , valorLongitudContra);
    console.log("El tamaño de bloque es: " + tamanioBloque);

    for(var a = longitudMensaje; a < tamanioBloque; a++)
    {
        mensaje = mensaje + " ";
    }
    console.log(mensaje);
    for(var b = longitudContra; b < tamanioBloque; b++)
    {
        contra = contra + " ";
    }
    console.log(contra);
    var cadenaInvertida = invertirCadena(mensaje, tamanioBloque);
     suma(cadenaInvertida, contra, tamanioBloque);

}



function calcularTamanioBloque(valorLongitudMensaje , valorLongitudContra)
{
     /**********************************************************
     * Es para calcular de manera inmediata un tamaño de bloque*
    ************************************************************/   
    var tamBloque = 2;
    var comprobar = false;
    do
    {
        if( tamBloque < valorLongitudMensaje || tamBloque < valorLongitudContra)
        {
            tamBloque = tamBloque * 2;

            /*Comprobar tamaño de bloque*/
            console.log(tamBloque);
            /*fin*/
        }   
        else 
        {
            comprobar = true;
        }
    }while(comprobar == false);
    return tamBloque;
}


function invertirCadena(mensaje, tamaBloque)
{
    var arrNuevaCadena = [tamaBloque];
    var varTemporal = tamaBloque-1;
    var nuevaCadena = "";    
    for(var i = 0; i < tamaBloque; i ++)
    {
        arrNuevaCadena[i] = mensaje.charAt(varTemporal);
        varTemporal --;

        console.log(arrNuevaCadena[i]);
        nuevaCadena= nuevaCadena + arrNuevaCadena[i];
        
    }

    console.log(nuevaCadena);
    return nuevaCadena;
}
function suma (mensajeInvertido, contra, tamaBloque)
{
    var cifrado = "";
    var cifradoTemp = [tamaBloque];
    var cifradoAscii = [tamaBloque];

    for (var c = 0; c < tamaBloque; c++)
    {
        cifradoTemp [c] = mensajeInvertido.charCodeAt(c) ^ contra.charCodeAt(c);
        console.log(cifradoTemp[c]);
        cifradoAscii [c] =  String.fromCharCode(cifradoTemp[c]);
        console.log(cifradoAscii[c]);
        cifrado = cifrado.concat(cifradoAscii[c]);
    }
   
    alert(cifrado);
    return cifrado;
}
