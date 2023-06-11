let producto = {
    nombre: "manzana",
    precio: 200,
    cantidad: 2,
}

    function calcularTotal(precio, cantidad){
        cantidadTotal = precio * cantidad;
        return cantidadTotal;
    }

console.log(calcularTotal(producto.precio, producto.cantidad));
