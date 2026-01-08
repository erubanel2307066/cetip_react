// --- CONFIGURACIÓN Y CONSTANTES ---

// Centralización de datos de contacto para fácil mantenimiento
const CETIP_PHONE_NUMBER = '+525512345678';
const WHATSAPP_MESSAGE = encodeURIComponent('Hola CETIP, estoy interesado(a) en la carrera de Técnico Programador Analista de Sistemas y me gustaría recibir más información.');
const WHATSAPP_LINK = `https://wa.me/${CETIP_PHONE_NUMBER.replace('+', '')}?text=${WHATSAPP_MESSAGE}`;
const PHONE_LINK = `tel:${CETIP_PHONE_NUMBER}`;


// --- FUNCIONES DE LA INTERFAZ DE USUARIO ---

/**
 * Alterna la visibilidad del menú de navegación móvil.
 */
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    // Alterna la clase 'hidden' para mostrar u ocultar el menú
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

/**
 * Maneja el envío del formulario de contacto.
 * Simula una respuesta de éxito sin usar la función alert().
 * @param {Event} event - El evento de envío del formulario.
 */
function handleFormSubmit(event) {
    // Previene el envío estándar del formulario para evitar la recarga de la página
    event.preventDefault();
    
    const formMessage = document.getElementById('form-message');
    const contactForm = document.getElementById('contact-form');

    // Muestra el mensaje de éxito
    if (formMessage) {
        formMessage.textContent = '¡Gracias por tu interés! Nos pondremos en contacto pronto.';
        formMessage.classList.remove('hidden', 'bg-red-100', 'border-red-400', 'text-red-700');
        formMessage.classList.add('bg-green-100', 'border-green-400', 'text-green-700', 'border', 'rounded-lg', 'px-4', 'py-3', 'mb-6', 'text-center');
    }

    // Opcionalmente, resetear el formulario después de un breve delay
    if (contactForm) {
        setTimeout(() => {
            contactForm.reset();
            // Oculta el mensaje de éxito
            if (formMessage) {
                formMessage.classList.add('hidden');
                formMessage.classList.remove('bg-green-100', 'border-green-400', 'text-green-700');
            }
        }, 5000);
    }
}

/**
 * Inicializa los enlaces de contacto dinámicamente (WhatsApp y Teléfono)
 * Esto asegura que los números sean fáciles de actualizar centralmente.
 */
function initializeContactLinks() {
    // 1. Asigna el enlace de WhatsApp al botón flotante

// --- MODO OSCURO ---
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Guardar preferencia en localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

function setInitialTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', setInitialTheme);
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if(whatsappFloat) whatsappFloat.href = WHATSAPP_LINK;

    // 2. Asigna el enlace de teléfono en la sección de Contacto
    const contactPhoneLink = document.getElementById('contact-phone-link');
    if(contactPhoneLink) contactPhoneLink.href = PHONE_LINK;

    // 3. Asigna el enlace de teléfono en el Footer
    const footerPhoneLink = document.getElementById('footer-phone-link');
    if(footerPhoneLink) footerPhoneLink.href = PHONE_LINK;
}


// --- INICIALIZACIÓN DE EVENTOS ---

// Asocia la función de manejo de formularios al evento submit
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // En lugar de usar onsubmit en el HTML, lo asociamos aquí.
        // Se mantiene la llamada en el HTML por simplicidad en este entorno,
        // pero esta es la forma más limpia en JS puro:
        // contactForm.addEventListener('submit', handleFormSubmit); 
    }
});

// Llama a la función de inicialización cuando la ventana haya cargado completamente
window.onload = initializeContactLinks;