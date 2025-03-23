const botonPlay = document.getElementById('play-boton');
const pantallaInicial = document.querySelector('.pantalla-inicial');
const contenidoPrincipal = document.querySelector('.contenido-principal');
const tituloPrincipal = document.querySelector('.titulo-principal');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function generarJuegoMultiPlayer() {
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

		<div class = "ventana-modal" id="ventana-modal-1">
			<div class = "contenido-modal" id="contenido-victoria">
			</div>
		</div>
	
		<div class = "ventana-modal">
			<div class = "contenido-modal" id="contenido-derrota">
			</div>
		</div>

		<div class = "ventana-modal" id="ventana-modal-3">
			<div class = "contenido-modal" id="contenido-empate">
			</div>
		</div>
	`;	

	await delay(500);

	const tableroJuego = document.querySelector('.tablero');
	const tablaCasillas = [[0,0,0],
						   [0,0,0],
						   [0,0,0]];

	tableroJuego.classList.add('mostrar-tablero');

	async function generarVentanaModal(resultado) {
		const casillas = document.querySelectorAll('.casilla');
		const ventanaModalVictoria = document.getElementById('ventana-modal-1');
		const contenidoModalVictoria = document.getElementById('contenido-victoria');
		
		casillas.forEach(casilla => casilla.style.pointerEvents = "none");

		await delay(2000);

		ventanaModalVictoria.style.display = "flex";
		contenidoModalVictoria.textContent = resultado;

		return;	
	}

	const casillas = document.querySelectorAll('.casilla');
	let playerNumber = 1;
	let i = 0;
	let contadorDeCasillasOcupadas = 0;	
	for(casilla of casillas) {
		const casillaValue = casilla.getAttribute('data-value'); 
		const casillaId = document.getElementById(casillaValue);
		const arregloCoordenadas = casillaValue.split('-');
		const ganaElJugador1 = "Gana el jugador 1";
		const ganaElJugador2 = "Gana el jugador 2";
		const empate = "Empate!"

		casilla.addEventListener('click', async () => {
			if (playerNumber === 1) {
				
				casillaId.classList.add('simbolo');
				casillaId.textContent = "x";
				casillaId.style.pointerEvents = "none";			
				
				const valorX = arregloCoordenadas[0];
				const valorY = arregloCoordenadas[1];

				tablaCasillas[valorX][valorY] = "x";
				contadorDeCasillasOcupadas++;
				console.log(contadorDeCasillasOcupadas);
				playerNumber++;	

				if (tablaCasillas[0][0] === "x" && tablaCasillas[0][1] === "x" && tablaCasillas[0][2] === "x") {			
					generarVentanaModal(ganaElJugador1);		
				} else if (tablaCasillas[1][0] === "x" && tablaCasillas[1][1] === "x" && tablaCasillas[1][2] === "x") {
					generarVentanaModal(ganaElJugador1);
				} else if (tablaCasillas[2][0] === "x" && tablaCasillas[2][1] === "x" && tablaCasillas[2][2] === "x") {
					generarVentanaModal(ganaElJugador1);			
				} else if (tablaCasillas[0][0] === "x" && tablaCasillas[1][0] === "x" && tablaCasillas[2][0] === "x") {
					generarVentanaModal(ganaElJugador1);
				} else if (tablaCasillas[0][1] === "x" && tablaCasillas[1][1] === "x" && tablaCasillas[2][1] === "x") {
					generarVentanaModal(ganaElJugador1);
				} else if (tablaCasillas[0][2] === "x" && tablaCasillas[1][2] === "x" && tablaCasillas[2][2] === "x") {
					generarVentanaModal(ganaElJugador1);		
				} else if (tablaCasillas[0][0] === "x" && tablaCasillas[1][1] === "x" && tablaCasillas[2][2] === "x") {
					generarVentanaModal(ganaElJugador1);
				} else if (tablaCasillas[0][2] === "x" && tablaCasillas[1][1] === "x" && tablaCasillas[2][0] === "x") {
					generarVentanaModal(ganaElJugador1);
				} 
				
				if (contadorDeCasillasOcupadas === 9) {
					generarVentanaModal(empate);
				}

			} else {
				
				casillaId.classList.add('simbolo');
				casillaId.textContent = "o";
				casillaId.style.pointerEvents = "none";			

				const valorX = arregloCoordenadas[0];
				const valorY = arregloCoordenadas[1];
				tablaCasillas[valorX][valorY] = "o";
				contadorDeCasillasOcupadas++;
				console.log(contadorDeCasillasOcupadas);
				playerNumber = 1;					
			
				if (tablaCasillas[0][0] === "o" && tablaCasillas[0][1] === "o" && tablaCasillas[0][2] === "o") {			
					generarVentanaModal(ganaElJugador2);		
				} else if (tablaCasillas[1][0] === "o" && tablaCasillas[1][1] === "o" && tablaCasillas[1][2] === "o") {
					generarVentanaModal(ganaElJugador2);
				} else if (tablaCasillas[2][0] === "o" && tablaCasillas[2][1] === "o" && tablaCasillas[2][2] === "o") {
					generarVentanaModal(ganaElJugador2);			
				} else if (tablaCasillas[0][0] === "o" && tablaCasillas[1][0] === "o" && tablaCasillas[2][0] === "o") {
					generarVentanaModal(ganaElJugador2);
				} else if (tablaCasillas[0][1] === "o" && tablaCasillas[1][1] === "o" && tablaCasillas[2][1] === "o") {
					generarVentanaModal(ganaElJugador2);
				} else if (tablaCasillas[0][2] === "o" && tablaCasillas[1][2] === "o" && tablaCasillas[2][2] === "o") {
					generarVentanaModal(ganaElJugador2);		
				} else if (tablaCasillas[0][0] === "o" && tablaCasillas[1][1] === "o" && tablaCasillas[2][2] === "o") {
					generarVentanaModal(ganaElJugador2);
				} else if (tablaCasillas[0][2] === "o" && tablaCasillas[1][1] === "o" && tablaCasillas[2][0] === "o") {
					generarVentanaModal(ganaElJugador2);
				} 

				if (contadorDeCasillasOcupadas === 9) {
					generarVentanaModal(empate);
				}

			}

		});

		i++;
	}
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

	botonMultiPlayer.addEventListener('click', generarJuegoMultiPlayer);
	botonInstrucciones.addEventListener('click', () => {
		ventanaModalInstrucciones.style.display = "flex";
		ventanaModalInstrucciones.classList.add('mostrar-modal');
	});

	cerrarVentanaModal.addEventListener('click', () => ventanaModalInstrucciones.style.display = "none");
}

botonPlay.addEventListener('click', mostrarOpcionesDeJuego);