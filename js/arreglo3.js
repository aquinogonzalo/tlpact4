function obtenerPromedioPonderado(notas, pesos) {
    let sumaPonderada = 0;
    let sumaPesos = 0;

    for (let i = 0; i < notas.length; i++) {
        sumaPonderada += notas[i] * pesos[i];
        sumaPesos += pesos[i];
    }

    const promedioPonderado = sumaPonderada / sumaPesos;
    
    return promedioPonderado;
}

  // Prueba
const notas = [90, 85, 95, 70];
const pesos = [0.3, 0.3, 0.2, 0.2];
const promedio = obtenerPromedioPonderado(notas, pesos);
console.log(promedio); 
