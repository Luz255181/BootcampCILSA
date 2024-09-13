
function validarFormulario(nombre, email, mensaje) {
    const nombreValido = /^[a-zA-Z\s]+$/.test(nombre.trim());
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const mensajeValido = mensaje.trim().length >= 5;
    return nombreValido && emailValido && mensajeValido;
}

function mostrarNotificacion(mensaje, esError = true) {
    const notificacion = document.getElementById("notificacion");
    notificacion.innerText = mensaje;

    if (esError) {
        notificacion.classList.add("bg-danger", "text-light");
    } else {
        notificacion.classList.add("bg-success", "text-light");
    }

    notificacion.classList.remove("visually-hidden");

    setTimeout(() => {
        notificacion.classList.add("visually-hidden");
        notificacion.classList.remove("bg-danger", "bg-success", "text-light");
    }, 5000);
}

function enviar() {
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("message").value;

    if (validarFormulario(nombre, email, mensaje)) {
        mostrarNotificacion("Formulario enviado correctamente.", false);
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("message").value = '';
    } else {
        mostrarNotificacion("Error: Verifica los campos e inténtalo nuevamente.");
    }
}
