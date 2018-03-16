/*
Algoritmo de cifrado programado por Eduardo López Melo
*/

function cifrar (mensaje, contra)
{
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

    
}
