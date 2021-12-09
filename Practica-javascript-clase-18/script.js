 /*Crear un objeto literal auto, con las siguientes propiedades: marca, modelo y puertas.*/
    let auto = {
        marca : "Volkswagen",
        modelo : "Gol Trend",
        puertas : "tiene 5 puertas",
    }
    console.log (auto);

/* Agregar al objeto del punto 1 un método llamado detalle que muestra el siguiente mensaje: La marca del auto es Ford, es modelo 2010 y tiene 5 puertas.*/

auto.marca="Ford";
auto.modelo="2010";
auto.puertas="tiene 5 puertas";

console.log(auto);

/*Usar querySelector para obtener el h1 a través de su clase, agregar dos eventos, uno cuando pase el mouse por arriba del h1 y otro cuando el mouse salga. Cuando el mouse esté por arriba del h1, cambie el color y el tamaño de la fuente. Cuando el mouse salga de arriba del h1, vuelve a los valores por defecto del h1.*/

let titulo = document.querySelector("h1")
titulo.addEventListener("mouseover", () => {
    titulo.style.color="red";
    titulo.style. fontSize= "100px";
})
titulo.addEventListener("mouseout", ()=> {
    titulo.style.color="black";
    titulo.style. fontSize= "2em";
})


    
        