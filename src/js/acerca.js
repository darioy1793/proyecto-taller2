import '../css/style.css'; 
import 'flowbite'; 

// Archivo: js/cookies.js

function aceptarCookies() {
    const banner = document.getElementById('cookie-banner');
    
    // 1. Ya no guardamos nada en localStorage para que vuelva a salir
    
    // 2. Aplicar efecto visual de salida
    banner.style.opacity = '0';
    
    // 3. Ocultar después de la animación
    setTimeout(() => {
        banner.style.display = 'none';
    }, 500);
}

// Al cargar la página, NO revisamos nada, simplemente dejamos que el HTML lo muestre
window.addEventListener('load', function() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        // Nos aseguramos de que sea visible al recargar
        banner.style.display = 'block'; 
        banner.style.opacity = '1';
    }
});