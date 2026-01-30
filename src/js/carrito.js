import '../css/style.css';
import 'flowbite';

const lista = document.getElementById("lista-carrito");
const totalPago = document.getElementById("total-compra");
const botonLimpiar = document.getElementById("btn-limpiar");

//carrito general
let carrito = JSON.parse(localStorage.getItem("carrito-general")) || [];

//contador
const actualizarContador = () => {
  const contador = document.getElementById("carrito-contador");
  if (contador) contador.innerText = carrito.length;
};

const mostrarCarrito = () => {
  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((destino, index) => {
    total += Number(destino.precio);

    lista.innerHTML += `
      <div class="flex justify-between items-center border-b border-slate-700 py-4">
        <p class="font-bold text-black">${destino.titulo}</p>
        <div class="flex items-center gap-4">
          <span class="text-red-600 font-bold">$${destino.precio}</span>
          <button data-index="${index}" class="btn-eliminar text-red-800 text-xs">
            Eliminar
          </button>
        </div>
      </div>
    `;
  });

  totalPago.innerText = `$${total.toFixed(2)}`;
  actualizarContador();
};

//para eliminar producto
lista.addEventListener("click", (e) => {
  const boton = e.target.closest(".btn-eliminar");
  if (!boton) return;

  const index = parseInt(boton.dataset.index);
  carrito.splice(index, 1);

  localStorage.setItem("carrito-general", JSON.stringify(carrito));
  mostrarCarrito();
});

//boton limpiar carrito
botonLimpiar.addEventListener("click", (e) => {
  carrito = [];
  localStorage.setItem("carrito-general", JSON.stringify(carrito));
  mostrarCarrito();
});

mostrarCarrito();
