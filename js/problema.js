numero = parseInt(prompt("Ingrese un numero:"))

function esPositivo(numero){
    if (numero > 0){
        return true
    }else{
        if (numero < 0 || numero == 0)
        return false
    }
}

console.log(esPositivo(numero))

