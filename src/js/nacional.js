import '../css/style.css'; 
import 'flowbite'; 

const  contenedor = document.getElementById("contenedor-internacional");
//Función para mostrar- cargar los libros
const cargarTienda = async () =>{
    try{
        const respuesta = await fetch("/data/nacional.json");
        //verificar si la respuesta fue exitosa
        if(!respuesta.ok ) throw new Error("Error en la red");
        //convertir el cuerpo de la respuesta a un objeto json q se pueda usar
        const datos = await respuesta.json();
        //limpiar el contenedor
        contenedor.innerHTML="";
        //Recorrer la lsita de libros
        datos.forEach((destino) => {
             contenedor.innerHTML += `
                <div class="p-10 border rounded-lg transition-colors group shadow-xl">
                    <div class="relative  rounded-lg h-200  bg-slate-700">
                        <img class="object-contain w-full h-full group-hover:scale-110  duration-500" 
                             src="${destino.imagen}" alt="${destino.titulo}">
                    </div>

                    <div class=" justify-center w-50 h-50 px-5 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                        <div>
                            <h1 class="font-bold text-white w-full uppercase text-sm line-clamp-1 mb-1">${destino.titulo}</h1>
                            <span class="text-[15px] bg-blue-600 text-white mt-2 px-5 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                               $ ${destino.precio}
                            </span>
                        </div>
                        
                        <div class="flex items-center justify-between mt-6">
                            <button 
                            data-titulo="${destino.titulo}" 
                            data-precio="${destino.precio}"
                            class="btn-agregar bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-all active:scale-95">
                                <span class="text-sm font-bold uppercase tracking-wider">Add Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
        });
    }
        catch(error){
            console.log("Error",error);
            contenedor.innerHTML=`<p class="text-red-800 text-center col-span-full font-bold"> verificar la conexión</p>`;
        };
        
    }

cargarTienda();
//localstorge
//intentar recuperrar los libros elegidos por el usuario y si no elige ninguno no nos devuelve nada
let carrito = JSON.parse(localStorage.getItem("carrito-general"))||[];
//funcion para actualizar el carrito
const actualizarContador = ()=>{
    const contador = document.getElementById("carrito-contador");
    //si existe el contador que le pongamos la longitud del carrito
    if(contador) 
        contador.innerText=carrito.length;
};
    contenedor.addEventListener("click", (e) => {
        const boton = e.target.closest(".btn-agregar");
        if(boton){
            const title = boton.dataset.titulo;
            const price = boton.dataset.precio;

            //crear un objeto con la informacion del libro
            const destino = {
                titulo:title, precio:price
            };
            // agregar al carrito
            carrito.push(destino);

            localStorage.setItem("carrito-general", JSON.stringify(carrito));
            actualizarContador();
        }
    })
    actualizarContador();