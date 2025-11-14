/* Archivo: js/main.js - Funciones JavaScript para interactividad */

document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa en móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Envío de formulario de contacto (demostración)
    const form = document.querySelector('.form-contacto');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('¡Mensaje enviado! Gracias por contactarnos.');
        form.reset();
    });
});
