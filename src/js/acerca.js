import '../css/style.css'; 
import 'flowbite'; 


let carrito = JSON.parse(localStorage.getItem("carrito-general"))||[];
//funcion para actualizar el carrito
const actualizarContador = ()=>{
    const contador = document.getElementById("carrito-contador");
    //si existe el contador que le pongamos la longitud del carrito
    if(contador) 
        contador.innerText=carrito.length;
};
actualizarContador();

// Función  para aceptar cookies
const aceptarCookies = () => {
  localStorage.setItem("cookies-aceptadas", "true");
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.style.display = "none";
};

// Al cargar la página, verificamos si ya se aceptaron
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const cookiesAceptadas = localStorage.getItem("cookies-aceptadas");

  if (cookiesAceptadas === "true" && banner) {
    banner.style.display = "none";
  }

  // Asignamos eventos al boton
  document.getElementById("btn-aceptar").addEventListener("click", aceptarCookies);
  
});