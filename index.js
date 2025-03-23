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

		<div class = "ventana-modal">
			<div class = "contenido-modal" id="victoria-modal">
			</div>
		</div>
	
		<div class = "ventana-modal">
			<div class = "contenido-modal" id="derrota-modal">
			</div>
		</div>

		<div class = "ventana-modal">
			<div class = "contenido-modal" id="empate-modal">
			</div>
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

	const casillas = document.querySelectorAll('.casilla');
	let playerNumber = 1;
	let i = 0;
		
	for(casilla of casillas) {
		const casillaValue = casilla.getAttribute('data-value'); 
		const casillaId = document.getElementById(casillaValue);
		const arregloCoordenadas = casillaValue.split('-');

		casilla.addEventListener('click',() => {
			if (playerNumber === 1) {
				
				casillaId.classList.add('simbolo');
				casillaId.textContent = "x";
				casillaId.style.pointerEvents = "none";			
				casillasOcupadas.push(casillaId);
				
				const valorX = arregloCoordenadas[0];
				const valorY = arregloCoordenadas[1];

				tablaCasillas[valorX][valorY] = "x";
				playerNumber++;	

				if (tablaCasillas[0][0] === "x" && tablaCasillas[0][1] === "x" && tablaCasillas[0][2] === "x") {
					console.log('HAPPY'); // ARREGLAR ESTO, ASI PODER MOSTRAR EL MODAL
				} else if (tablaCasillas[1][0] === "x" && tablaCasillas[1][1] === "x" && tablaCasillas[1][2] === "x") {
					console.log('HAPPY');
				} // SEGUIR AGREGANDO PARA LUEGO VER EL TEMA DE LOS MODALES
							
				
			} else {
				
				casillaId.classList.add('simbolo');
				casillaId.textContent = "o";
				casillaId.style.pointerEvents = "none";			
				casillasOcupadas.push(casillaId);

				const valorX = arregloCoordenadas[0];
				const valorY = arregloCoordenadas[1];
				tablaCasillas[valorX][valorY] = "o";
				playerNumber = 1;					
			}

		});

		i++;
	}
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