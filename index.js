const botonPlay = document.getElementById('play-boton');
const pantallaInicial = document.querySelector('.pantalla-inicial');
const contenidoPrincipal = document.querySelector('.contenido-principal');
const tituloPrincipal = document.querySelector('.titulo-principal');
const transition = new Audio('audios/transition.mp3');
const win = new Audio('audios/win.mp3');
const iconoMenu = document.querySelector('.icono-menu');
const ventananaModalMenu = document.querySelector('.ventana-modal-menu');
const botonCerrarModalMenu = document.getElementById('boton-cerrar-menu');
const casillasOcupadas = [];

const tablaCasillas = [[0,0,0],
					   [0,0,0],
					   [0,0,0]];

iconoMenu.addEventListener('click', () => {
	ventananaModalMenu.style.display = "flex";
});

botonCerrarModalMenu.addEventListener('click', () => {
	ventananaModalMenu.style.display = "none";
});

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function asignarCasillaDeFormaAutomatica() {
	const iconoO = document.createElement("img");
	let contadorDeCasillasOcupadas = 0;

	let casillaExistente;
	let casillaId;
	do {
	    const generarValorEjeX = Math.floor(Math.random() * 3);
	    const generarValorEjeY = Math.floor(Math.random() * 3);
	    const casillaCoordenadas = `${generarValorEjeX}-${generarValorEjeY}`;
	    casillaId = document.getElementById(casillaCoordenadas);

	    // Asegurarse de que la casilla existe en el DOM antes de verificar
	    casillaExistente = casillaId && casillasOcupadas.includes(casillaCoordenadas);

	    if (!casillaExistente && casillaId) {
	        casillasOcupadas.push(casillaCoordenadas);
	    }
	} while (casillaExistente);

	casillaId.appendChild(iconoO);
	iconoO.src = "images/Tc-X-min.png";
	iconoO.classList.add('tamaño-icono');	

	await delay(50);
	
	iconoO.classList.add('mostrar-icono');
	casillaId.style.pointerEvents = "none";		

	const casillaValue = casillaId.getAttribute('data-value');
	const arregloCoordenadas = casillaValue.split('-'); // arreglar esto

	const valorX = arregloCoordenadas[0];
	const valorY = arregloCoordenadas[1];

	tablaCasillas[valorX][valorY] = "o";

	contadorDeCasillasOcupadas++;

	if (tablaCasillas[0][0] === "o" && tablaCasillas[0][1] === "o" && tablaCasillas[0][2] === "o") {			
		const coordenada1 = "0-0";
		const coordenada2 = "0-1";
		const coordenada3 = "0-2";
		generarBrillo(coordenada1,coordenada2,coordenada3);					
		generarVentanaModal(ganaElJugador2);		
	} else if (tablaCasillas[1][0] === "o" && tablaCasillas[1][1] === "o" && tablaCasillas[1][2] === "o") {
		const coordenada4 = "1-0";
		const coordenada5 = "1-1";
		const coordenada6 = "1-2";
		generarBrillo(coordenada4,coordenada5,coordenada6);					
		generarVentanaModal(ganaElJugador2);
	} else if (tablaCasillas[2][0] === "o" && tablaCasillas[2][1] === "o" && tablaCasillas[2][2] === "o") {
		const coordenada7 = "2-0";
		const coordenada8 = "2-1";
		const coordenada9 = "2-2";
		generarBrillo(coordenada7,coordenada8,coordenada9);						
		generarVentanaModal(ganaElJugador2);			
	} else if (tablaCasillas[0][0] === "o" && tablaCasillas[1][0] === "o" && tablaCasillas[2][0] === "o") {
		const coordenada10 = "0-0";
		const coordenada11 = "1-0";
		const coordenada12 = "2-0";
		generarBrillo(coordenada10,coordenada11,coordenada12);						
		generarVentanaModal(ganaElJugador2);
	} else if (tablaCasillas[0][1] === "o" && tablaCasillas[1][1] === "o" && tablaCasillas[2][1] === "o") {
		const coordenada13 = "0-1";
		const coordenada14 = "1-1";
		const coordenada15 = "2-1";
		generarBrillo(coordenada13,coordenada14,coordenada15);					
		generarVentanaModal(ganaElJugador2);
	} else if (tablaCasillas[0][2] === "o" && tablaCasillas[1][2] === "o" && tablaCasillas[2][2] === "o") {
		const coordenada16 = "0-2";
		const coordenada17 = "1-2";
		const coordenada18 = "2-2";
		generarBrillo(coordenada16,coordenada17,coordenada18);						
		generarVentanaModal(ganaElJugador2);		
	} else if (tablaCasillas[0][0] === "o" && tablaCasillas[1][1] === "o" && tablaCasillas[2][2] === "o") {
		const coordenada19 = "0-0";
		const coordenada20 = "1-1";
		const coordenada21 = "2-2";
		generarBrillo(coordenada19,coordenada20,coordenada21);						
		generarVentanaModal(ganaElJugador2);
	} else if (tablaCasillas[0][2] === "o" && tablaCasillas[1][1] === "o" && tablaCasillas[2][0] === "o") {
		const coordenada22 = "0-2";
		const coordenada23 = "1-1";
		const coordenada24 = "2-0";
		generarBrillo(coordenada22,coordenada23,coordenada24);						
		generarVentanaModal(ganaElJugador2);
	} else if(contadorDeCasillasOcupadas === 9) {
		generarVentanaModal(empate);

	}


}

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

		<div class="ventana-modal" id="ventana-modal-1">
			<div class="contenido-modal" id="contenido-victoria">
				<div class="contenedor-botones-final">
					<button class="boton-nuevo" id="reiniciar-partida">Restart game</button>
					<button class="boton-nuevo" id="regresar-menu">Main Menu</button>				
				</div>			
			</div>
		</div>
	`;		
	
	await delay(500);
	
	const tableroJuego = document.querySelector('.tablero');
	tableroJuego.classList.add('mostrar-tablero');

    const reiniciarJuego = document.getElementById('reiniciar-partida');
    const volverAlMenu = document.getElementById('regresar-menu');

   	reiniciarJuego.addEventListener('click', generarJuegoMultiPlayer);
   	reiniciarJuego.addEventListener('click', () => transition.play());
   	volverAlMenu.addEventListener('click', mostrarOpcionesDeJuego);
   	volverAlMenu.addEventListener('click', () => transition.play());

	const casillas = document.querySelectorAll('.casilla');

	let playerNumber = 1;
	let contadorDeCasillasOcupadas = 0;		
	for(let casilla of casillas) {
		const casillaValue = casilla.getAttribute('data-value'); 
		const casillaId = document.getElementById(casillaValue);
		const arregloCoordenadas = casillaValue.split('-');
		const ganaElJugador1 = "Gana el jugador 1";
		const ganaLaMaquina = "Gana la maquina";
		const empate = "Empate!"
		const partidaEmpatada = false;		
	
		casilla.addEventListener('click', async () => {
			const iconoX = document.createElement("img");
			casillasOcupadas.push(casillaId);
			casillaId.appendChild(iconoX);
			iconoX.src = "images/Tc-X-min.png";
			iconoX.classList.add('tamaño-icono');
			await delay(50);
			iconoX.classList.add('mostrar-icono');
			casillaId.style.pointerEvents = "none";			
				
			const valorX = arregloCoordenadas[0];
			const valorY = arregloCoordenadas[1];

			tablaCasillas[valorX][valorY] = "x";
			contadorDeCasillasOcupadas++;
			playerNumber++;	

			if (tablaCasillas[0][0] === "x" && tablaCasillas[0][1] === "x" && tablaCasillas[0][2] === "x") {			
					const coordenada1 = "0-0";
					const coordenada2 = "0-1";
					const coordenada3 = "0-2";
					generarBrillo(coordenada1,coordenada2,coordenada3);
					generarVentanaModal(ganaElJugador1);		
			} else if (tablaCasillas[1][0] === "x" && tablaCasillas[1][1] === "x" && tablaCasillas[1][2] === "x") {
					const coordenada4 = "1-0";
					const coordenada5 = "1-1";
					const coordenada6 = "1-2";
					generarBrillo(coordenada4,coordenada5,coordenada6);				
					generarVentanaModal(ganaElJugador1);
			} else if (tablaCasillas[2][0] === "x" && tablaCasillas[2][1] === "x" && tablaCasillas[2][2] === "x") {
					const coordenada7 = "2-0";
					const coordenada8 = "2-1";
					const coordenada9 = "2-2";
					generarBrillo(coordenada7,coordenada8,coordenada9);						
					generarVentanaModal(ganaElJugador1);			
			} else if (tablaCasillas[0][0] === "x" && tablaCasillas[1][0] === "x" && tablaCasillas[2][0] === "x") {
					const coordenada10 = "0-0";
					const coordenada11 = "1-0";
					const coordenada12 = "2-0";
					generarBrillo(coordenada10,coordenada11,coordenada12);						
					generarVentanaModal(ganaElJugador1);
			} else if (tablaCasillas[0][1] === "x" && tablaCasillas[1][1] === "x" && tablaCasillas[2][1] === "x") {
					const coordenada13 = "0-1";
					const coordenada14 = "1-1";
					const coordenada15 = "2-1";
					generarBrillo(coordenada13,coordenada14,coordenada15);							
					generarVentanaModal(ganaElJugador1);
			} else if (tablaCasillas[0][2] === "x" && tablaCasillas[1][2] === "x" && tablaCasillas[2][2] === "x") {
					const coordenada16 = "0-2";
					const coordenada17 = "1-2";
					const coordenada18 = "2-2";
					generarBrillo(coordenada16,coordenada17,coordenada18);							
					generarVentanaModal(ganaElJugador1);		
			} else if (tablaCasillas[0][0] === "x" && tablaCasillas[1][1] === "x" && tablaCasillas[2][2] === "x") {
					const coordenada19 = "0-0";
					const coordenada20 = "1-1";
					const coordenada21 = "2-2";
					generarBrillo(coordenada19,coordenada20,coordenada21);						
					generarVentanaModal(ganaElJugador1);
			} else if (tablaCasillas[0][2] === "x" && tablaCasillas[1][1] === "x" && tablaCasillas[2][0] === "x") {
					const coordenada22 = "0-2";
					const coordenada23 = "1-1";
					const coordenada24 = "2-0";
					generarBrillo(coordenada22,coordenada23,coordenada24);						
					generarVentanaModal(ganaElJugador1);
			} else if(contadorDeCasillasOcupadas === 9) {
					generarVentanaModal(empate);}
	
			asignarCasillaDeFormaAutomatica();

		})
	}
}

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

		<div class="ventana-modal" id="ventana-modal-1">
			<div class="contenido-modal" id="contenido-victoria">
				<div class="contenedor-botones-final">
					<button class="boton-nuevo" id="reiniciar-partida">Restart game</button>
					<button class="boton-nuevo" id="regresar-menu">Main Menu</button>				
				</div>			
			</div>
		</div>
	`;	

	await delay(500);

	const tableroJuego = document.querySelector('.tablero');
	const tablaCasillas = [[0,0,0],
						   [0,0,0],
						   [0,0,0]];

    const reiniciarJuego = document.getElementById('reiniciar-partida');
    const volverAlMenu = document.getElementById('regresar-menu');

   	reiniciarJuego.addEventListener('click', generarJuegoMultiPlayer);
   	reiniciarJuego.addEventListener('click', () => transition.play());
   	volverAlMenu.addEventListener('click', mostrarOpcionesDeJuego);
   	volverAlMenu.addEventListener('click', () => transition.play());

	tableroJuego.classList.add('mostrar-tablero');

	async function generarVentanaModal(resultado) {
		const casillas = document.querySelectorAll('.casilla');
		const ventanaModalVictoria = document.getElementById('ventana-modal-1');
		const contenidoModalVictoria = document.getElementById('contenido-victoria');
		const textoResultado = document.createElement("h2");
		
		casillas.forEach(casilla => casilla.style.pointerEvents = "none");

		textoResultado.textContent = resultado;

		await delay(2000);

		ventanaModalVictoria.style.display = "flex";
		contenidoModalVictoria.appendChild(textoResultado);

		return;	}

	async function generarBrillo(coord1,coord2,coord3) {
		const brillar1 = document.getElementById(coord1);
		const brillar2 = document.getElementById(coord2);
		const brillar3 = document.getElementById(coord3);

		const icono1 = brillar1.querySelector('.tamaño-icono');
		icono1.classList.add('ejecutar-animacion');
		
		const icono2 = brillar2.querySelector('.tamaño-icono');
		icono2.classList.add('ejecutar-animacion');
		
		const icono3 = brillar3.querySelector('.tamaño-icono');
		icono3.classList.add('ejecutar-animacion');

		win.play();

		await delay(2000);

		icono1.classList.remove('ejecutar-animacion');
		icono2.classList.remove('ejecutar-animacion');
		icono3.classList.remove('ejecutar-animacion');}

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
		const partidaEmpatada = false;

		casilla.addEventListener('click', async () => {
			if (playerNumber === 1) {
				
				const iconoX = document.createElement("img");
				casillaId.appendChild(iconoX);
				iconoX.src = "images/Tc-X-min.png";
				iconoX.classList.add('tamaño-icono');
				await delay(50);
				iconoX.classList.add('mostrar-icono');
				casillaId.style.pointerEvents = "none";			
				
				const valorX = arregloCoordenadas[0];
				const valorY = arregloCoordenadas[1];

				tablaCasillas[valorX][valorY] = "x";
				contadorDeCasillasOcupadas++;
				playerNumber++;	

				if (tablaCasillas[0][0] === "x" && tablaCasillas[0][1] === "x" && tablaCasillas[0][2] === "x") {			
					const coordenada1 = "0-0";
					const coordenada2 = "0-1";
					const coordenada3 = "0-2";
					generarBrillo(coordenada1,coordenada2,coordenada3);
					generarVentanaModal(ganaElJugador1);		
				} else if (tablaCasillas[1][0] === "x" && tablaCasillas[1][1] === "x" && tablaCasillas[1][2] === "x") {
					const coordenada4 = "1-0";
					const coordenada5 = "1-1";
					const coordenada6 = "1-2";
					generarBrillo(coordenada4,coordenada5,coordenada6);				
					generarVentanaModal(ganaElJugador1);
				} else if (tablaCasillas[2][0] === "x" && tablaCasillas[2][1] === "x" && tablaCasillas[2][2] === "x") {
					const coordenada7 = "2-0";
					const coordenada8 = "2-1";
					const coordenada9 = "2-2";
					generarBrillo(coordenada7,coordenada8,coordenada9);						
					generarVentanaModal(ganaElJugador1);			
				} else if (tablaCasillas[0][0] === "x" && tablaCasillas[1][0] === "x" && tablaCasillas[2][0] === "x") {
					const coordenada10 = "0-0";
					const coordenada11 = "1-0";
					const coordenada12 = "2-0";
					generarBrillo(coordenada10,coordenada11,coordenada12);						
					generarVentanaModal(ganaElJugador1);
				} else if (tablaCasillas[0][1] === "x" && tablaCasillas[1][1] === "x" && tablaCasillas[2][1] === "x") {
					const coordenada13 = "0-1";
					const coordenada14 = "1-1";
					const coordenada15 = "2-1";
					generarBrillo(coordenada13,coordenada14,coordenada15);							
					generarVentanaModal(ganaElJugador1);
				} else if (tablaCasillas[0][2] === "x" && tablaCasillas[1][2] === "x" && tablaCasillas[2][2] === "x") {
					const coordenada16 = "0-2";
					const coordenada17 = "1-2";
					const coordenada18 = "2-2";
					generarBrillo(coordenada16,coordenada17,coordenada18);							
					generarVentanaModal(ganaElJugador1);		
				} else if (tablaCasillas[0][0] === "x" && tablaCasillas[1][1] === "x" && tablaCasillas[2][2] === "x") {
					const coordenada19 = "0-0";
					const coordenada20 = "1-1";
					const coordenada21 = "2-2";
					generarBrillo(coordenada19,coordenada20,coordenada21);						
					generarVentanaModal(ganaElJugador1);
				} else if (tablaCasillas[0][2] === "x" && tablaCasillas[1][1] === "x" && tablaCasillas[2][0] === "x") {
					const coordenada22 = "0-2";
					const coordenada23 = "1-1";
					const coordenada24 = "2-0";
					generarBrillo(coordenada22,coordenada23,coordenada24);						
					generarVentanaModal(ganaElJugador1);
				} else if(contadorDeCasillasOcupadas === 9) {
					generarVentanaModal(empate);

				}
		

			} else {
				
				const iconoO = document.createElement("img");
				casillaId.appendChild(iconoO);
				iconoO.src = "images/Tc-O-min.png";
				iconoO.classList.add('tamaño-icono');
				await delay(50);
				iconoO.classList.add('mostrar-icono');
				casillaId.style.pointerEvents = "none";				

				const valorX = arregloCoordenadas[0];
				const valorY = arregloCoordenadas[1];
				tablaCasillas[valorX][valorY] = "o";
				contadorDeCasillasOcupadas++;
				playerNumber = 1;					
			
				if (tablaCasillas[0][0] === "o" && tablaCasillas[0][1] === "o" && tablaCasillas[0][2] === "o") {			
					const coordenada1 = "0-0";
					const coordenada2 = "0-1";
					const coordenada3 = "0-2";
					generarBrillo(coordenada1,coordenada2,coordenada3);					
					generarVentanaModal(ganaElJugador2);		
				} else if (tablaCasillas[1][0] === "o" && tablaCasillas[1][1] === "o" && tablaCasillas[1][2] === "o") {
					const coordenada4 = "1-0";
					const coordenada5 = "1-1";
					const coordenada6 = "1-2";
					generarBrillo(coordenada4,coordenada5,coordenada6);					
					generarVentanaModal(ganaElJugador2);
				} else if (tablaCasillas[2][0] === "o" && tablaCasillas[2][1] === "o" && tablaCasillas[2][2] === "o") {
					const coordenada7 = "2-0";
					const coordenada8 = "2-1";
					const coordenada9 = "2-2";
					generarBrillo(coordenada7,coordenada8,coordenada9);						
					generarVentanaModal(ganaElJugador2);			
				} else if (tablaCasillas[0][0] === "o" && tablaCasillas[1][0] === "o" && tablaCasillas[2][0] === "o") {
					const coordenada10 = "0-0";
					const coordenada11 = "1-0";
					const coordenada12 = "2-0";
					generarBrillo(coordenada10,coordenada11,coordenada12);						
					generarVentanaModal(ganaElJugador2);
				} else if (tablaCasillas[0][1] === "o" && tablaCasillas[1][1] === "o" && tablaCasillas[2][1] === "o") {
					const coordenada13 = "0-1";
					const coordenada14 = "1-1";
					const coordenada15 = "2-1";
					generarBrillo(coordenada13,coordenada14,coordenada15);					
					generarVentanaModal(ganaElJugador2);
				} else if (tablaCasillas[0][2] === "o" && tablaCasillas[1][2] === "o" && tablaCasillas[2][2] === "o") {
					const coordenada16 = "0-2";
					const coordenada17 = "1-2";
					const coordenada18 = "2-2";
					generarBrillo(coordenada16,coordenada17,coordenada18);						
					generarVentanaModal(ganaElJugador2);		
				} else if (tablaCasillas[0][0] === "o" && tablaCasillas[1][1] === "o" && tablaCasillas[2][2] === "o") {
					const coordenada19 = "0-0";
					const coordenada20 = "1-1";
					const coordenada21 = "2-2";
					generarBrillo(coordenada19,coordenada20,coordenada21);						
					generarVentanaModal(ganaElJugador2);
				} else if (tablaCasillas[0][2] === "o" && tablaCasillas[1][1] === "o" && tablaCasillas[2][0] === "o") {
					const coordenada22 = "0-2";
					const coordenada23 = "1-1";
					const coordenada24 = "2-0";
					generarBrillo(coordenada22,coordenada23,coordenada24);						
					generarVentanaModal(ganaElJugador2);
				} else if(contadorDeCasillasOcupadas === 9) {
					generarVentanaModal(empate);

				}

				
			}

		});

		i++;
	}} 

async function mostrarOpcionesDeJuego() {
	
	pantallaInicial.classList.add('ocultar-pantalla-inicial');
	
	await delay(500);

	contenidoPrincipal.innerHTML = `		
		<div class="contenido-opciones">
				<h1 class="titulo-principal" id="main-menu">Main Menu</h1>
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

	botonSinglePlayer.addEventListener('click', () => transition.play());
	botonSinglePlayer.addEventListener('click', generarJuegoSinglePlayer);
	botonMultiPlayer.addEventListener('click', () => transition.play());
	botonMultiPlayer.addEventListener('click', generarJuegoMultiPlayer);
	botonInstrucciones.addEventListener('click', () => {
		ventanaModalInstrucciones.style.display = "flex";
		ventanaModalInstrucciones.classList.add('mostrar-modal');
	});

	cerrarVentanaModal.addEventListener('click', () => ventanaModalInstrucciones.style.display = "none");}

botonPlay.addEventListener('click', () => transition.play());
botonPlay.addEventListener('click', mostrarOpcionesDeJuego);