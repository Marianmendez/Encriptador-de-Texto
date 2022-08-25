const inputTexto = document.querySelector(".texto_box")
const mensaje = document.querySelector(".mensaje")


function BotonEncriptar(){
    const TextoEncriptado = encriptar(inputTexto.value)
    mensaje.value = TextoEncriptado
    mensaje.style.backgroundImage = "none"
    titulo4.style.display = 'none';
    solicitud_texto2.style.display = "none";
    inputTexto.value = "";
}


function encriptar(StringEncriptado){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    StringEncriptado = StringEncriptado.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++){
        if(StringEncriptado.includes(matrizcodigo[i][0])){
        StringEncriptado = StringEncriptado.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
    }
    return StringEncriptado;
}

function BotonDesencriptar(){
    const TextoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = TextoEncriptado
    inputTexto.value = ""
}

function desencriptar(StringDesencriptado){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    StringDesencriptado = StringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++){
        if(StringDesencriptado.includes(matrizcodigo[i][1])){
        StringDesencriptado = StringDesencriptado.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0])
        }
    }
    return StringDesencriptado;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    alert("El texto fue copiado")
}