const botonPlay = document.getElementById('play-boton');
const pantallaInicial = document.querySelector('.pantalla-inicial');
const contenidoPrincipal = document.querySelector('.contenido-principal');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function generarJuegoSinglePlayer() {
	contenidoPrincipal.innerHTML = `
		<div class="tablero">
			<div class="casilla" id="casilla-1"></div>
			<div class="casilla" id="casilla-2"></div>
			<div class="casilla" id="casilla-3"></div>
			<div class="casilla" id="casilla-4"></div>
			<div class="casilla" id="casilla-5"></div>
			<div class="casilla" id="casilla-6"></div>
			<div class="casilla" id="casilla-7"></div>
			<div class="casilla" id="casilla-8"></div>
			<div class="casilla" id="casilla-9"></div>
		</div>
	`;	

	await delay(500);

	const tableroJuego = document.querySelector('.tablero');

	tableroJuego.classList.add('mostrar-tablero');

}

async function mostrarOpcionesDeJuego() {
	
	pantallaInicial.classList.add('ocultar-pantalla-inicial');
	
	await delay(500);

	contenidoPrincipal.innerHTML = `		
		<div class="contenido-opciones">
				<h1 class="titulo-principal">Tic-Tac-Toc-Game</h1>
				<div class="contenedor-botones-opciones">
					<button class="boton" id="single-player">Single player</button>
					<button class="boton" id="multi-player">Multiplayer</button>
					<button class="boton" id="instrucciones">Instrucciones</button>
				</div>
		</div>
	`;

	const contenidoOpciones = document.querySelector('.contenido-opciones');
	const botonSinglePlayer = document.getElementById('single-player');
	const botonMultiPlayer = document.getElementById('multi-player');
	const botonInstrucciones = document.getElementById('instrucciones');
	
	await delay(500);
	
	contenidoOpciones.classList.add('mostrar-contenido-opciones');

	botonSinglePlayer.addEventListener('click', generarJuegoSinglePlayer);
}

botonPlay.addEventListener('click', mostrarOpcionesDeJuego);