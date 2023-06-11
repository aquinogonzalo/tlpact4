//----------------------Una funcion que ingresa base y altura para devolver el area--------------------//

let base = parseInt(prompt("Escriba la base"));
let altura = parseInt(prompt("Escriba la altura"));

function calcularAreaRectangulo(base, altura){
    area = base * altura
    return area
}

console.log(calcularAreaRectangulo(base, altura))

//-----------------------------------------------------------------------------------------------------//