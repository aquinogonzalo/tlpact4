
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



//Implementa una función llamada obtenerPares que tome un arreglo de números como parámetro y devuelva un nuevo arreglo con solo los números pares del arreglo original.
