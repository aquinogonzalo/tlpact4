function obtenerSuma(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
  //Prueba
console.log(obtenerSuma([1,2,3,4]))