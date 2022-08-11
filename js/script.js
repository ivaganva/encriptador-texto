//Valores para encriptar
// a - ai
// e - enter
// i - imes
// o - ober
// u - ufat
// Orden para evitar duplicidad en la encriptación
// e --> enter
// o --> ober
// i --> imes
// a --> ai
// u --> ufat

function encriptar(){
    var texto = document.getElementById("inputText").value.tolowerCase();
    //i es ppara afectar tanto a mayusculas como minusculas
    //g para toda la oración
    //m para que afecte multiples lineas
    var txtEncrypt = texto.replace(/e/igm,"enter");
    var txtEncrypt = txtEncrypt.replace(/o/igm,"ober");
    var txtEncrypt = txtEncrypt.replace(/i/igm,"imes");
    var txtEncrypt = txtEncrypt.replace(/a/igm,"ai");
    var txtEncrypt = txtEncrypt.replace(/u/igm,"ufat");

    //Retirar imagen cada vez que ingrese texto en contenedor derecho
    document.getElementById("imgDoll").style.display = none;
    //Retirar texto "Ningún mensaje fue encontrado"
    document.getElementById("textoMensaje").style.display = none;
    //Muestra el resultado del texto cifrado
    document.getElementById("textoMensaje2").innerHTML = txtEncrypt;
    //Mostrar el boton para copiar el texto contenedor derecho
    document.getElementById("btnCopiar").style.display = "show";
    document.getElementById("btnCopiar").style.display = "inherit";
}