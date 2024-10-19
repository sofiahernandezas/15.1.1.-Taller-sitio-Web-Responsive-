// Definimos las líneas de texto
const texts = ["Lorem ipsum dolor sit amet,...", "...consectetur adipiscing elit.", "Praesent scelerisque tristique turpis"];

// Seleccionamos el elemento del carrusel
const textItem = document.querySelector('.text-item');

// Función para cambiar el texto de manera aleatoria
function changeText() {
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  textItem.textContent = randomText;
}

// Cambiar el texto inmediatamente y luego cada 2 segundos
changeText();
setInterval(changeText, 2000);


