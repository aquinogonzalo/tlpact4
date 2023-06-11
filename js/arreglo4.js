function obtenerMaximo(arreglo) {
    let arregloOrdenado = (arreglo.sort()).reverse();
    return arregloOrdenado[0]
}

console.log(obtenerMaximo([1,6,9,8,2]));