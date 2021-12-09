const validarFormulario = () => {
    const nombreDeUsuario = document.getElementById("usuario");
    const contrasenia = document.getElementById("clave");

    if(nombreDeUsuario.value ===""|| contrasenia.value === " ") {
        alert("debe completar estos campos con su nombre de usuario y contraseña ");
        return false;
     }
    }


const btnClick = document.getElementById("btn-enviar");
btnClick.addEventListener("click", validarFormulario);