//Definen las Constantes del Proyecto
const ingresarTexto = document.getElementById('ingresar__texto');
const botonEncriptar = document.getElementById('boton__encriptar');
const botonDesencriptar = document.getElementById('boton__desencriptar');
const inputResultado = document.getElementById('mensaje-texto');
const botonCopiar = document.getElementById('boton__copiar');
const soloLetras ='^[a-z !ñ]+$';

//Captura para Ejecutar Acción de los Botones
document.addEventListener('DOMContentLoaded', () => {
  botonEncriptar.addEventListener('click', encriptarTexto);
  botonDesencriptar.addEventListener('click', desencriptarTexto);
  botonCopiar.addEventListener('click', copiarTexto);
});

// Proceso de Encriptamiento
// function encriptarTexto(e) {
//   e.preventDefault();
//   inputResultado.value = '';
//   let texto = inputTexto.value;
  
//   if(texto.match(soloLetras)!=null){
//     let palabras = texto.split(' ');
//     let nuevasPalabras = [];
    
//     for (let palabra of palabras) {
//         palabra = palabra.replaceAll('a','ai');
//         palabra = palabra.replaceAll('e','enter');
//         palabra = palabra.replaceAll('i','imes');
//         palabra = palabra.replaceAll('o','ober');
//         palabra = palabra.replaceAll('u','ufat');      
//         nuevasPalabras.push(palabra);    
//     }

//     const resultado = nuevasPalabras.join(' ');
    
//     inputResultado.value = resultado;
//   } else {
//     mostrarError('Solo se permiten letras minúsculas, sin acentos');
//     return;
//   }  
// }

// // Proceso de Desencriptamiento
// function desencriptarTexto(e) {
//   e.preventDefault();  
//   inputResultado.value = '';
//   let texto = inputTexto.value;

//   if(texto.match(soloLetras)!=null){
//     let palabras = texto.split(" ");
//     let nuevasPalabras = [];    

//     for (let palabra of palabras) {
//       palabra = palabra.replaceAll('enter','e');
//       palabra = palabra.replaceAll('imes','i');
//       palabra = palabra.replaceAll('ai','a');
//       palabra = palabra.replaceAll('ober','o');
//       palabra = palabra.replaceAll('ufat','u');
//       nuevasPalabras.push(palabra);    
//     }

//     const resultado = nuevasPalabras.join(' ');
    
//     inputResultado.value = resultado;
//   } else {
//     mostrarError('Solo se permiten letras minúsculas, sin acentos');
//     return;
//   }  
// }

//Mensaje de Error por Posible Fallo
// function mostrarError(mensaje) {
//   const existeError = document.querySelector('.error');
  
//   if(!existeError) {
//       const formulario = document.getElementById('formulario');
//       const divMensaje = document.createElement('div');
//       divMensaje.classList.add('error');
  
//       divMensaje.textContent = mensaje;            
//       formulario.appendChild(divMensaje);
      
//       setTimeout(()=> {
//           divMensaje.remove();
//       }, 3000);
//   }
// }

//Proceso de Copia de Texto
// function copiarTexto(e) {
//     e.preventDefault(); 
//     const mensaje = inputResultado.value;

//     navigator.clipboard.writeText(mensaje);
// }