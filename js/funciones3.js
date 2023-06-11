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