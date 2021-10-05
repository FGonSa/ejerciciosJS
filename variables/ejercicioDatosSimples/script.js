let ejemplo = "algo"

function imprimirVariable() {
    let tipo = typeof ejemplo;
    let espacio = document.getElementById("valor")
    espacio.innerText = ejemplo + " = " + tipo;
}

function imprimirMensaje() {
    let saludo = "Hola";
    let mensaje = document.getElementById("respuesta");
    ejemplo = document.getElementById("cajaTexto").value
    mensaje.innerText = saludo + " " + ejemplo;
    imprimirVariable();
}

function imprimirNum() {
    ejemplo = parseFloat(document.getElementById("cajaTexto2").value)
    let mensaje = document.getElementById("respuestaNum")
    mensaje.innerText = ejemplo * 2;
    imprimirVariable();
}

function imprimirBoolean() {
    let mensaje = document.getElementById("respuestaBol")
    if (typeof ejemplo == "string") {
        ejemplo = true;
    } else {
        ejemplo = false;
    }
    mensaje.innerText = ejemplo;
    imprimirVariable();
}
