 /*<script>
  // Datos de promociones
  const promotions = [
    "Vuelos a Europa desde $499",
    "Escapadas nacionales 2x1",
    "Paquetes Caribe todo incluido",
    "¡Descuentos de hasta el 30% en destinos seleccionados!",
    "¡Ofertas relámpago cada semana!"
  ];
  let currentPromotionIndex = 0;
  const promoTextRotator = document.getElementById('promo-text-rotator');
  const promoBackgroundCarousel = document.getElementById('promo-background-carousel');

  // Imágenes de fondo (usando Unsplash random para ejemplo)
  const backgroundImages = [
    "https://source.unsplash.com/random/1600x900/?travel,mountain",
    "https://source.unsplash.com/random/1600x900/?travel,cityscape",
    "https://source.unsplash.com/random/1600x900/?travel,forest"
  ];
  let currentImageIndex = 0;

  function rotatePromotions() {
    // Animación de salida del texto
    promoTextRotator.style.opacity = '0';
    promoTextRotator.style.transform = 'translateY(-20px)';

    setTimeout(() => {
      currentPromotionIndex = (currentPromotionIndex + 1) % promotions.length;
      promoTextRotator.textContent = promotions[currentPromotionIndex];
      // Animación de entrada del texto
      promoTextRotator.style.opacity = '1';
      promoTextRotator.style.transform = 'translateY(0)';
    }, 700); // Coincide con la duración de la transición
  }

  function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    promoBackgroundCarousel.style.opacity = '0'; // Fundido de salida para la imagen actual

    setTimeout(() => {
      promoBackgroundCarousel.innerHTML = `<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('${backgroundImages[currentImageIndex]}')"></div>`;
      promoBackgroundCarousel.style.opacity = '0.5'; // Fundido de entrada para la nueva imagen
    }, 1000); // Tiempo para el fundido de salida
  }

  // Iniciar rotación de promociones cada 4 segundos
  setInterval(rotatePromotions, 4000); 
  // Iniciar cambio de fondo cada 8 segundos
  setInterval(changeBackground, 8000);

  // Asegúrate de que las animaciones iniciales se ejecuten si el texto inicial no tiene el delay
  document.addEventListener('DOMContentLoaded', () => {
    // Si la clase animate-fade-in-down ya se aplica, no necesitamos más JS para el título
    // El texto rotativo y el botón tienen sus propios delays
  });
</script>*/