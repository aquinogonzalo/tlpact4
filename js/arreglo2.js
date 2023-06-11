function obtenerPares(arreglo) {
    let pares = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            pares.push(arreglo[i]);
        }
    }
    return pares;
}

  // Prueba
console.log(obtenerPares([1, 2, 3, 4, 5]));