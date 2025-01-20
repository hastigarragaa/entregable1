//Función para mostrar mensaje de bienvenida
function mostrarBienvenida() {
    alert("¡Bienvenido al Calculador de Presupuesto!");
    console.log("Iniciando el simulador...");
}

//Función para ingresar datos
function obtenerDatos() {
    const nombreProducto = prompt("Ingresa el nombre del producto:");
    const precioProducto = parseFloat(prompt("Ingresa el precio del producto (en pesos):"));
    const porcentajeDescuento = parseFloat(prompt("Ingresa el porcentaje de descuento (sin %):")) / 100;
    const presupuesto = parseFloat(prompt("Ingresa tu presupuesto disponible (en pesos):"));

    if (!(precioProducto) || !(porcentajeDescuento) || !(presupuesto)) {
        alert("Por favor, ingresa valores numéricos válidos.");
        return null;
    }

    return {
        nombreProducto,
        precioProducto,
        porcentajeDescuento,
        presupuesto,
    };
}

//Función para calcular el precio con descuento
function calcularPrecioFinal(precio, descuento) {
    return precio * (1 - descuento);
}

//Función para mostrar los resultados
function mostrarResultados(datos, precioFinal) {
    const precioRedondeado = Math.round(precioFinal * 100) / 100;

    if (precioRedondeado <= datos.presupuesto) {
        alert(`¡Puedes comprar el producto "${datos.nombreProducto}"! 
Precio final: $${precioRedondeado} 
Tu presupuesto: $${datos.presupuesto}`);
        console.log(`Producto: ${datos.nombreProducto}`);
        console.log(`Precio con descuento: $${precioRedondeado}`);
        console.log(`Presupuesto disponible: $${datos.presupuesto}`);
    } else {
        alert(`El producto "${datos.nombreProducto}" supera tu presupuesto. 
Precio final: $${precioRedondeado} 
Tu presupuesto: $${datos.presupuesto}`);
        console.log(`Producto: ${datos.nombreProducto}`);
        console.log(`Precio con descuento: $${precioRedondeado}`);
        console.log(`Presupuesto disponible: $${datos.presupuesto}`);
    }
}

//Función principal que ejecuta el simulador
function ejecutarSimulador() {
    mostrarBienvenida();
    const datos = obtenerDatos();

    if (datos) {
        const precioFinal = calcularPrecioFinal(datos.precioProducto, datos.porcentajeDescuento);
        mostrarResultados(datos, precioFinal);
    } else {
        console.log("Simulador finalizado debido a datos inválidos.");
    }
}

//Boton para iniciar el simulador
document.getElementById("iniciarSimulador").addEventListener("click", ejecutarSimulador);


// ejecutarSimulador();
