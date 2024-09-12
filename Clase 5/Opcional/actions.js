const body = document.getElementById('cuerpo');
const titulo = document.getElementById('titulo');
const form = document.getElementById('formulario');
const enviar = document.getElementById('enviar');
const contrasteBtn = document.getElementById('contraste');
const claroBtn = document.getElementById('claro');
let modoclaro = true;

function modoClaro() {
    // Cambiar a modo claro
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
    // Cambiar a modo de alto contraste
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
