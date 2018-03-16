/*
Algoritmo de cifrado programado por Eduardo López Melo
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
            //console.log(tamBloque);
            /*fin*/
        }   
        else 
        {
            comprobar = true;
        }
    }while(comprobar == false);
    return tamBloque;
}