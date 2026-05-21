// ============================================
// AÑO DINAMICO EN EL FOOTER
// ============================================

// Obtener el año actual
const anioActual = new Date().getFullYear();

// Insertar el año en el footer
document.getElementById("anioActual").textContent = anioActual;


// ============================================
// MENSAJE DE BIENVENIDA
// ============================================

// Seleccionar el mensaje
const mensajeBienvenida = document.getElementById("mensajeBienvenida");

// Ocultar el mensaje despues de 5 segundos
setTimeout(() => {

    mensajeBienvenida.style.display = "none";

}, 5000);


// ============================================
// MENU HAMBURGUESA
// ============================================

// Seleccionar elementos
const botonMenu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Evento click
botonMenu.addEventListener("click", () => {

    nav.classList.toggle("activo");

});


// ============================================
// COTIZADOR
// ============================================

// Seleccionar formulario
const formulario = document.getElementById("formularioCotizador");

// Evento submit
formulario.addEventListener("submit", calcularPedido);


/**
 * Funcion para calcular el pedido
 * @param {Event} evento
 */
function calcularPedido(evento) {

    // Evitar recarga del formulario
    evento.preventDefault();

    // Capturar valores
    const nombre = document.getElementById("nombre").value.trim();

    const producto = document.getElementById("producto");

    const productoTexto =
        producto.options[producto.selectedIndex].text;

    const precio = parseInt(producto.value);

    const cantidad =
        parseInt(document.getElementById("cantidad").value);

    // Contenedores
    const mensajeError =
        document.getElementById("mensajeError");

    const resultado =
        document.getElementById("resultado");

    // Limpiar mensajes
    mensajeError.textContent = "";
    resultado.textContent = "";

    // Validaciones
    if (nombre === "") {

        mensajeError.textContent =
            "El nombre del cliente es obligatorio.";

        return;
    }

    if (isNaN(cantidad) || cantidad <= 0) {

        mensajeError.textContent =
            "La cantidad debe ser mayor a cero.";

        return;
    }

    // Calculos
    const subtotal = precio * cantidad;

    const iva = subtotal * 0.19;

    const total = subtotal + iva;

    // Formato moneda colombiana
    const totalFormateado =
        total.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP"
        });

    // Mostrar resultado
    resultado.innerHTML = `
        <h3>Resumen del Pedido</h3>

        <p><strong>Cliente:</strong> ${nombre}</p>

        <p><strong>Producto:</strong> ${productoTexto}</p>

        <p><strong>Cantidad:</strong> ${cantidad}</p>

        <p><strong>Total con IVA:</strong> ${totalFormateado}</p>
    `;

}
/* =====================================================
   CAMBIO DE TEMA
===================================================== */

const botonTema = document.getElementById("botonTema");

botonTema.addEventListener("click", () => {

    document.body.classList.toggle("tema-oscuro");

    // CAMBIAR ICONO
    if(document.body.classList.contains("tema-oscuro")){

        botonTema.textContent = "☀️";

    }else{

        botonTema.textContent = "🌙";

    }

});