/* Crear un array con números del 1 al 8, luego agregar el número 9 al final, cambiar el número 5 por un 53 y el 7 por un 77.*/
    
let numerosEnteros=[1,2,3,4,5,6,7,8 ]
numerosEnteros [8]= 9;
console.log (numerosEnteros);
numerosEnteros[4]=53;
console.log (numerosEnteros);
numerosEnteros[6]=77;
console.log (numerosEnteros);

/*Recorrer el array del punto 1 y mostrar un mensaje sólo si el número es par. Por ejemplo: 2 es el número par.*/

let numerosPares = numerosEnteros.map(function(item) {
    if (item % 2 ==0) {
        return "par"
    }
})
console.log(numerosPares);

/*Recorrer el array del punto 1 y generar un nuevo array filtrado solo con los números mayores a 5 y menores a 60.*/

const numerosAparte = numerosEnteros.filter (function(item){
 if (item < 5){
     return true
 } else {
     if (item > 60) {
         return true
     }
 }
})
console.log (numerosAparte);


