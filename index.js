const botonPlay = document.getElementById('play-boton');
const pantallaInicial = document.querySelector('.pantalla-inicial');

async function mostrarOpcionesDeJuego() {
	pantallaInicial.classList.add('ocultar-pantalla-inicial');
}

botonPlay.addEventListener('click', mostrarOpcionesDeJuego);