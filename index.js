
//----------Una funcion que ingresa edad y devuelve true o false segun si es mayor o menor a 18--------//
let edad = parseInt(prompt("Escriba su edad"));

function esMayorEdad(edad){
    if (edad >= 18)
    {
        return true
    }
    else
    {
        return false
    }
}

console.log(esMayorEdad(edad));

//-----------------------------------------------------------------------------------------------------//

//----------------------Una funcion que ingresa base y altura para devolver el area--------------------//

let base = parseInt(prompt("Escriba la base"));
let altura = parseInt(prompt("Escriba la altura"));

function calcularAreaRectangulo(base, altura){
    area = base * altura
    return area
}

console.log(calcularAreaRectangulo(base, altura))

//-----------------------------------------------------------------------------------------------------//

//--------------------Una funcion que determine si un string es palindromo o no-----------------------//

let palabra = prompt("Escriba una palabra")
function esPalindromo(palabra){
    if (palabra == palabra.split("").reverse().join(""))
    {
        return true
    }
    else
    {
        return false
    }
}
console.log(esPalindromo(palabra))

//-----------------------------------------------------------------------------------------------------//

//una función llamada generarNumeroAleatorio que no tome parámetros y devuelva un número entero aleatorio entre 1 y 10.//

function generarNumeroAleatorio() {
    return Math.ceil(Math.random() * 10);
}

console.log(generarNumeroAleatorio())
//-----------------------------------------------------------------------------------------------------//

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

//Implementa una función llamada obtenerPares que tome un arreglo de números como parámetro y devuelva un nuevo arreglo con solo los números pares del arreglo original.
