//Capturar los elementos del DOM
const textoEntrada = document.getElementById('texto_entrada');
const textoSalida = document.getElementById('texto_encriptado');
const botonEncriptar = document.getElementById('boton_encriptar');
const botonDesencriptar = document.getElementById('boton_desencriptar');
const botonCopiar = document.getElementById('botonCopiarTexto');
const textoResultado = document.getElementById('textoResultado');

// Reglas de encriptación
const llavesEncriptacion = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

// Habilitar o deshabilitar los botones cuando el text tenga texto
function habilitarBotones() {
  const conTexto = textoEntrada.value.trim().length > 0;
  botonEncriptar.disabled = !conTexto;
  botonDesencriptar.disabled = !conTexto;
  botonEncriptar.classList.toggle('apagado', !conTexto);
  botonDesencriptar.classList.toggle('apagado', !conTexto);
}
// Eventos que escucha el ingreso de texto
textoEntrada.addEventListener('input', habilitarBotones);

// Función para validar que el texto solo contenga minúsculas y espacios
function validarEntrada(texto) {
  return /^[a-z\s]*$/.test(texto);
}

// Función para verificar si hay mayúsculas o caracteres especiales
function tieneMayusculas(texto) {
  return /[A-Z]/.test(texto) || /[^a-zA-Z\s]/.test(texto);
}

// Encriptar el texto
function encriptar(texto) {
  return texto.replace(/[eiaou]/g, letra => llavesEncriptacion[letra]);
}

// Desencriptar el texto
function desencriptar(texto) {
  let desencriptado = texto;
  for (let [clave, valor] of Object.entries(llavesEncriptacion)) {
      desencriptado = desencriptado.replaceAll(valor, clave);
  }
  return desencriptado;
}

// Mostrar el resultado en la interfaz
function mostrarResultado(texto) {
  textoResultado.style.display = 'none';
  textoSalida.style.display = 'block';
  botonCopiar.style.display = 'block';
  textoSalida.value = texto;
}

// Eventos para el botón de encriptar
botonEncriptar.addEventListener('click', () => {
  const texto = textoEntrada.value;
  if (validarEntrada(texto)) {
      mostrarResultado(encriptar(texto));
  } else {
    if (tieneMayusculas(texto)) {
        alert("El texto contiene mayúsculas o caracteres especiales. Solo se aceptan letras minúsculas y espacios.");
    } else {
        alert("Texto inválido. Solo se aceptan letras minúsculas y espacios.");
    }
 }
});

// Eventos para el botón de desencriptar
botonDesencriptar.addEventListener('click', () => {
  const texto = textoEntrada.value;
  if (validarEntrada(texto)) {
      mostrarResultado(desencriptar(texto));
  } else {
      if (tieneMayusculas(texto)) {
          alert("El texto contiene mayúsculas o caracteres especiales. Solo se aceptan letras minúsculas y espacios.");
      } else {
          alert("Texto inválido. Solo se aceptan letras minúsculas y espacios.");
      }
  }
});

// Eventos para el botón de copiar
botonCopiar.addEventListener('click', () => {
  textoSalida.select();
  document.execCommand('copy');
  alert('Texto copiado al portapapeles');
});

// Llamar a alternarBotones al cargar la página para establecer el estado inicial de los botones
habilitarBotones();