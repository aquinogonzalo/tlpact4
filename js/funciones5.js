
//Crea una función llamada obtenerSuma que reciba un arreglo de números como parámetro y devuelva la suma de todos los elementos del arreglo.//

function obtenerSuma(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

console.log(obtenerSuma([1, 2, 3, 4, 5]))

//-----------------------------------------------------------------------------------------------------//
