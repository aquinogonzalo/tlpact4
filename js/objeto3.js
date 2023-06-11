let persona = {
    edad: 13
}

function esMayorEdad(edad){
    if (edad >= 18){
        return true
    }else{
        return false
    }
}

console.log(esMayorEdad(persona.edad))