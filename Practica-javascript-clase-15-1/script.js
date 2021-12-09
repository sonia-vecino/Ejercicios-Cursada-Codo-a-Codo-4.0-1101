let num1 = prompt("dime un numero");
        let num2 = prompt("dime otro numero");
        let suma = (parseInt(num1) + parseInt(num2));
        alert("el resultado de la suma es  " + suma);
        if (num1 < num2) {
           alert(num2 + " es el mayor valor");
        } else {
            if (num1 > num2) {
                alert(num2 + " es el menor valor");            } else {
                if (num1 == num2) {
                    alert(" ambos números son iguales");
                }
            }
        }