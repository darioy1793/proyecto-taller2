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
//seleccionar todos los input y asignar a constantes
const nombre  = document.getElementById("username");
const email= document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const formulario = document.getElementById("formulario");
const telefono = document.getElementById("phone-input");
//Expreciones regulares para la validacion
const patron = {
     usuario: /^[a-zA-ZÀ-ÿ\s]{3,16}$/, // Letras y espacios (3-16 caracteres)
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Formato email
  clave: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // Mínimo 8 caracteres, 1 letra y 1 número
  telefono: /^\d{10}$/,
};

//crear una función para habilitar el mensaje de error
const mostrarError = (input, idError)=>{
    const mensaje=document.getElementById(idError);

    //si el mensaje existe le quitamos la clase hidden para q sea visible
    if(mensaje)mensaje.classList.remove("hidden");
    input.classList.add("border-red-500");
    input.classList.remove("border-slate-700");
}
//funcion para eliminar el error
const eliminarError = (input,idError)=>{
    const mensaje = document.getElementById(idError);
     if(mensaje)mensaje.classList.add("hidden");
    input.classList.remove("border-red-500");
    input.classList.add("border-green-700");

}
//manejar el evento principal q es la validadción
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();//evita que la pagina se actualice 
    let formularioValido=true;
    //validacion del nombre
    if(!patron.usuario.test(nombre.value)){
        mostrarError(nombre,"error-username");
        formularioValido=false;
    }else{
        eliminarError(nombre,"error-username");
        
        
    }
    //validacion del email
     if(!patron.correo.test(email.value)){
        mostrarError(email,"error-email");
        formularioValido=false;
    }else{
        eliminarError(email,"error-email");
       
        
    }
     //validacion del password
     if(!patron.clave.test(password.value)){
        mostrarError(password,"error-password");
        formularioValido=false;
    }else{
        eliminarError(password,"error-password");   
    }
    //validacion de las constraseñas sean iguales 
    //si el passwor es diferente o vacio
     if(password.value!==confirmPassword.value || confirmPassword.value==="" ){
        mostrarError(confirmPassword,"error-confirmPassword");
        formularioValido=false;
        }else{
            eliminarError(confirmPassword,"error-confirmPassword");
        }
        if(formularioValido){
            alert("registro exitoso! :)");
            //limpiar el campo
            formulario.reset();
        }
         //validacion del telefono
     if(!patron.telefono.test(telefono.value)){
        mostrarError(telefono,"error-telefono");
        formularioValido=false;
    }else{
        eliminarError(telefono,"error-password");   
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdown-phone-button');
    const dropdownMenu = document.getElementById('dropdown-phone');
    const prefixSpan = document.getElementById('current-prefix');
    const options = document.querySelectorAll('.option-prefix');

    // 1. Mostrar/Ocultar el menú al hacer clic en el botón
    dropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
    });

    // 2. Cambiar el prefijo y cerrar el menú al seleccionar una opción
    options.forEach(option => {
        option.addEventListener('click', () => {
            const newPrefix = option.getAttribute('data-prefix');
            prefixSpan.innerText = newPrefix;
            dropdownMenu.classList.add('hidden');
        });
    });

    // 3. Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', () => {
        dropdownMenu.classList.add('hidden');
    });
});