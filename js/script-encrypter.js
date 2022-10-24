//Valores para encriptar
// a - ai
// e - enter
// i - imes
// o - ober
// u - ufat

const inputText = document.querySelector(".input-text");
const message = document.querySelector(".message");

// Función para encriptar
function btnEncrypt(){
    const encryptText = encrypt(inputText.value);
    message.value = encryptText;
    message.style.backgroundImage = "none";
    inputText.value = "";
}
function encrypt(stringEncrypt){
    let matrizCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncrypt = stringEncrypt.toLowerCase();

    for(let i = 0; i < matrizCode.length; i++){
        if(stringEncrypt.includes(matrizCode[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(matrizCode[i][0],matrizCode[i][1]);
        }
    }
    return stringEncrypt;
}

//Función para desencriptar

function btnDecrypt(){
    const decryptText = decrypt(inputText.value);
    message.value = decryptText;
    inputText.value = "";
}


function decrypt(stringDecrypt){
    let matrizCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase();

    for(let i = 0; i < matrizCode.length; i++){
        if(stringDecrypt.includes(matrizCode[i][1])){
            stringDecrypt = stringDecrypt.replaceAll(matrizCode[i][1],matrizCode[i][0]);
        }
    }
    return stringDecrypt;
}

function copyText(){
    message.select();
    navigator.clipboard.writeText(message.value);
    message.value = "";
    alert("Texto copiado");
}

