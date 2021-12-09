let formu=document.querySelector("#formulario");
formu.addEventListener("submit", (event)=>{
    let errors = [ ];
    let nombre = document.querySelector("#usuario").value;
    let clave = document.querySelector("#password").value;
    let input = false; 
    let expresion = (/^\w+([\.-]?\w+)*@\w+/i);
       
        if (nombre === "") {
            errors.push("Usuario, debe completar este campo");
            input = nombre;
        } 
        if (!expresion.test(nombre)) { 
            errors.push("Usuario, debe contener un arroba");
            input = nombre;
        } 
        if (clave === "") {
            errors.push("Contraseña, este campo no puede estar vacío");
            input = clave;
        } 
        if (errors.length > 0) {
            event.preventDefault;
            alert("existen errores en el formulario:\n" + errors.join("\n"));
            input.focus;
        }
    })


