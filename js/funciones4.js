//una función llamada generarNumeroAleatorio que no tome parámetros y devuelva un número entero aleatorio entre 1 y 10.//

function generarNumeroAleatorio() {
    return Math.ceil(Math.random() * 10);
}

console.log(generarNumeroAleatorio())
//-----------------------------------------------------------------------------------------------------//