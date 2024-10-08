const body = document.getElementById('cuerpo');
const titulo = document.getElementById('titulo');
const form = document.getElementById('formulario');
const enviar = document.getElementById('enviar');
const contrasteBtn = document.getElementById('contraste');
const claroBtn = document.getElementById('claro');
const notificacion = document.getElementById('notificacion');
let modoclaro = true;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function modoClaro() {
    body.classList.add('bg-danger', 'text-dark');
    body.classList.remove('bg-dark', 'text-light');
    titulo.classList.add('bg-white');
    titulo.classList.remove('bg-black');
    form.classList.add('bg-white');
    form.classList.remove('bg-black');
    enviar.classList.add('btn-danger');
    enviar.classList.remove('btn-light');
    claroBtn.disabled = true;
    contrasteBtn.disabled = false;
    modoclaro = true;
}

function modoContraste() {
    body.classList.add('bg-dark', 'text-light');
    body.classList.remove('bg-danger', 'text-dark');
    titulo.classList.add('bg-black');
    titulo.classList.remove('bg-white');
    form.classList.add('bg-black');
    form.classList.remove('bg-white');
    enviar.classList.add('btn-light');
    enviar.classList.remove('btn-danger');
    claroBtn.disabled = false;
    contrasteBtn.disabled = true;
    modoclaro = false;
}

function mostrarNotificacion() {
    const name = document.getElementById('nameinput').value;
    const lastname = document.getElementById('lastnameinput').value;
    const email = document.getElementById('emailinput').value;
    const birthdate = document.getElementById('birthdayinput').value;
    const country = document.getElementById('countryinput').value;
    const notificacion = document.getElementById('notificacion');

    let error = validarCampo(name) || validarCampo(lastname) || validarCampo(country) || validarEmail(email) || validarFecha(birthdate);

    if (!error) {
        notificacion.innerText = `Formulario enviado correctamente.\n Nombre: ${name},\n Apellido: ${lastname},\n Email: ${email},\n Fecha de Nacimiento: ${birthdate},\n País: ${country}.`;
        notificacion.classList.remove('visually-hidden');
        notificacion.classList.add('bg-white', 'text-dark');
    } else {
        notificacion.innerText = 'Error: Por favor, completa todos los campos correctamente.';
        notificacion.classList.remove('visually-hidden');
        notificacion.classList.add('bg-white', 'text-dark');
    }

    setTimeout(() => {
        notificacion.classList.add('visually-hidden');
    }, 10000);
}

function validarCampo(data) {
    return !data || /^\s*$/.test(data) || !/^[a-zA-Z\s]+$/.test(data);
}

function validarEmail(email) {
    return !emailRegex.test(email);
}

function validarFecha(fecha) {
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!fechaRegex.test(fecha)) return true;

    const fechaObjeto = new Date(fecha);
    return isNaN(fechaObjeto.getTime()) || fechaObjeto.toISOString().split('T')[0] !== fecha;
}
