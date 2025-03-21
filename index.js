const botonPlay = document.getElementById('play-boton');
const pantallaInicial = document.querySelector('.pantalla-inicial');
const contenidoPrincipal = document.querySelector('.contenido-principal');
const tituloPrincipal = document.querySelector('.titulo-principal');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function generarJuegoSinglePlayer() {
	contenidoPrincipal.innerHTML = `
		<div class="tablero">
			<div class="casilla" id="0-0" data-value = "0-0"></div>
			<div class="casilla" id="0-1" data-value = "0-1"></div>
			<div class="casilla" id="0-2" data-value = "0-2"></div>
			<div class="casilla" id="1-0" data-value = "1-0"></div>
			<div class="casilla" id="1-1" data-value = "1-1"></div>
			<div class="casilla" id="1-2" data-value = "1-2"></div>
			<div class="casilla" id="2-0" data-value = "2-0"></div>
			<div class="casilla" id="2-1" data-value = "2-1"></div>
			<div class="casilla" id="2-2" data-value = "2-2"></div>
		</div>
	`;	

	await delay(500);

	const tableroJuego = document.querySelector('.tablero');
	const casillasOcupadas = [];
	const diagonalPrincipal = [1,5,9], diagonalSecundaria = [3,5,7];
	const tablaCasillas = [[0,0,0],
						   [0,0,0],
						   [0,0,0]];

	tableroJuego.classList.add('mostrar-tablero');

	async function colocarXO() {
		const casillas = document.querySelectorAll('.casilla');
		let playerNumber = 1;
		let i = 0;
		
		for(casilla of casillas) {
			const casillaValue = casilla.getAttribute('data-value'); 
			const casillaId = document.getElementById(casillaValue);
			const arregloCoordenadas = casillaId.split('-');

			casilla.addEventListener('click',() => {
				if (playerNumber === 1) {
					casillaValue.classList.add('simbolo');
					casillaValue.textContent = "x";
					casillaValue.style.pointerEvents = "none";			
					casillasOcupadas.push(casillaValue);
				
					

					tablaCasillas[0][i] = "x"; // arreglar esto para agregar al tablero y luego de ir a verificar
					playerNumber++;	
				} else {
					casillaValue.classList.add('simbolo');
					casillaValue.textContent = "o";
					casillaValue.style.pointerEvents = "none";			
					casillasOcupadas.push(casillaValue);
					tablaCasillas[0][i] = "o"; // arreglar esto para agregar al tablero y luego de ir a verificar
					playerNumber = 1;					
				}
			});

			i++;
		}



	}


	colocarXO();
}

async function generarJuegoMultiPlayer() {
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

	tableroJuego.classList.add('mostrar-tablero');	}

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
					<div class="ventana-modal">
						<span class="boton-close" id="boton-cerrar">&times;</span>
						<div class="texto" id="ventana-instrucciones">
							<h1>How to play?</h1>
							<ol class="lista-ordenada">
								<li>Se juega entre dos jugadores.</li>
								<li>Un jugador usa el símbolo "X" y el otro "O".</li>
								<li>Los jugadores se turnan para colocar su símbolo en una casilla vacía del tablero.</li>
								<li>No se puede colocar un símbolo sobre otro ya existente.</li>
								<li>Gana el primer jugador que logre alinear tres símbolos seguidos en cualquier dirección.</li>
								<li>Si todas las casillas se llenan y nadie gana, el juego termina en empate.</li>
							</ol>
						</div>
					</div>
				</div>
		</div>
	`;

	const contenidoOpciones = document.querySelector('.contenido-opciones');
	const botonSinglePlayer = document.getElementById('single-player');
	const botonMultiPlayer = document.getElementById('multi-player');
	const botonInstrucciones = document.getElementById('instrucciones');
	const ventanaModalInstrucciones = document.querySelector('.ventana-modal');
	const cerrarVentanaModal = document.getElementById('boton-cerrar');

	await delay(500);
	
	contenidoOpciones.classList.add('mostrar-contenido-opciones');

	botonSinglePlayer.addEventListener('click', generarJuegoSinglePlayer);
	botonMultiPlayer.addEventListener('click', generarJuegoMultiPlayer);
	botonInstrucciones.addEventListener('click', () => {
		ventanaModalInstrucciones.style.display = "flex";
		ventanaModalInstrucciones.classList.add('mostrar-modal');
	});

	cerrarVentanaModal.addEventListener('click', () => ventanaModalInstrucciones.style.display = "none");
}

botonPlay.addEventListener('click', mostrarOpcionesDeJuego);