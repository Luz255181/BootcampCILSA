const claro = document.getElementById('claro');
const contraste = document.getElementById('contraste');
const body = document.getElementById('cuerpo');
const content = document.getElementById('formulario');
const titulo = document.getElementById('titulo');
const submit = document.getElementById('submit');
const footer = document.getElementById('footer');
const notificacion = document.getElementById('notification');
let modoclaro = true;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function modoClaro() {
    claro.classList.add('claro');
    claro.classList.remove('modedisable');
    contraste.classList.add('modedisable');
    contraste.classList.remove('dark');
    body.classList.add('cuerpo');
    body.classList.remove('cuerpodark');
    content.classList.add('content');
    content.classList.remove('contentdark');
    titulo.classList.add('titulo');
    titulo.classList.remove('titulodark');
    submit.classList.add('claro');
    submit.classList.remove('dark');
    footer.classList.add('footerclaro');
    footer.classList.remove('footerdark');
    modoclaro = true;
}

function modoContraste() {
    claro.classList.add('modedisable');
    claro.classList.remove('claro');
    contraste.classList.add('dark');
    contraste.classList.remove('modedisable');
    body.classList.add('cuerpodark');
    body.classList.remove('cuerpo');
    content.classList.add('contentdark');
    content.classList.remove('content');
    titulo.classList.add('titulodark');
    titulo.classList.remove('titulo');
    submit.classList.add('dark');
    submit.classList.remove('claro');
    footer.classList.add('footerdark');
    footer.classList.remove('footerclaro');
    modoclaro = false;
}

function mostrarNotificacion(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const birthdate = document.getElementById('birthdate').value;
    const country = document.getElementById('country').value;

    let error = validarCampo(name) || validarCampo(lastname) || validarCampo(country) || validarEmail(email) || validarFecha(birthdate);

    if (modoclaro) {
        notificacion.classList.remove('oculto');
        notificacion.classList.add('visibleclaro');
    } else {
        notificacion.classList.remove('oculto');
        notificacion.classList.add('visibleoscuro');
    }

    if (!error) {
        notificacion.innerText = `Datos Enviados: \n Nombre: ${name}\n Apellido: ${lastname} \n Email: ${email} \n Fecha de Nacimiento: ${birthdate} \n País: ${country}`;
        document.getElementById('formulario').reset();
    } else {
        notificacion.innerText = `Error en Nombre, Apellido, Email, Fecha de Nacimiento o País.`;
    }

    setTimeout(() => {
        notificacion.classList.remove(modoclaro ? 'visibleclaro' : 'visibleoscuro');
        notificacion.classList.add('oculto');
    }, 3000);
}

function validarCampo(data) {
    let error = false;
    if (data) {
        if (/^\s*$/.test(data)) {
            error = true;
        } else {
            if (!(/^[a-zA-Z]+$/.test(data))) {
                error = true;
            }
        }
    } else {
        error = true;
    }
    return error;
}

function validarEmail(email) {
    return !emailRegex.test(email);
}

function validarFecha(fecha) {
    let error = false;

    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!fechaRegex.test(fecha)) {
        error = true;
    }

    const fechaObjeto = new Date(fecha);

    if (isNaN(fechaObjeto.getTime())) {
        error = true;
    }

    const [year, month, day] = fecha.split("-");
    if (fechaObjeto.getUTCFullYear() != year || (fechaObjeto.getUTCMonth() + 1) != month || fechaObjeto.getUTCDate() != day) {
        error = true;
    }

    return error;
}


