# Metal Gear - Remake (Phaser 3)
## Documento de diseño de videojuego
- Ignacio Ligero Martín (iligero@ucm.es)
- Versión 1.0 – 7 de mayo 2023

| **Resumen** |  |
| :--- | ---: |
| **Géneros:** *sigilo / acción* | **Modos:** *un jugador* |
| **Público objetivo:** *hombres y mujeres jóvenes* | **Plataformas:** *PC* |
| **Cantidades:** *sólo habrá un escenario con varios objetos* | **Hitos:** |


### Descripción
Metal Gear Remake es la reelaboración del proyecto hecho en 1987 y creado por Hideo Kojima y distribuido por Konami. Ya que se trata de un proyecto para una asignatura de la universidad, esta versión solo abarcará una pequeña sección con recursos y enemigos limitados debido a la falta de tiempo y a ciertos elementos de la versión original a los que no se ha podido acceder de ninguna manera. Aún así, se tratará de respetar de la manera más fidedigna al juego original que se programe. 

La franquicia 'Metal Gear', incluídos los recursos (música, sprites, ...), de este repositorio, son propiedad de Konami Digital Entertainment B.V.

### Logotipo y portada del juego




### Versiones del documento
Histórico de versiones y control de cambios
### Tabla de contenidos
Cada sección de este documento, debidamente numerada
#### 1. Aspectos generales
Párrafos donde se describe la experiencia que deseamos ofrecer a los jugadores, sus claves estéticas como obra interactiva, la narrativa del juego, su tema, su ambientación, etc. También el tipo de dinámica que esperamos establecer en el juego, el clásico planteamiento de “¿a qué juega el jugador?”, etc. y alguna descripción de la mecánica del juego, el tipo de las acciones que puede realizar el jugador y el comportamiento del sistema  
Vista general








##### 1.1. Relato breve y parcial de una partida típica
El jugador comienza en una zona vacía sin armas, y deberá abrirse paso entre enemigos que si le ven no dudarán en disparar. El objetivo "narrativo" sería infiltrarse en la base enemiga sin que el jugador sea detectado, pero se contempla la posibilidad de que el enemigo vea al jugador y la base se ponga en modo "alerta" para acabar con éste a toda costa. A lo largo del mapa habrá diferentes objetos que facilitarán la infiltración, como es el caso de los objetos, o las armas, que sirven para defenderse / atacar a los distintos enemigos que vayan apareciendo por el mapa.

#### 2. Jugabilidad
Párrafos e ilustraciones donde se describe toda la jugabilidad del juego, toda la mecánica, dinámica y estética, aunque sin entrar a hablar de todos los elementos posibles que aparecen en el juego sino sólo sus “familias” o tipologías, clasificadas según su comportamiento.
##### 2.1. Mecánica
###### 2.1.1. Mecánicas del personaje
El movimiento es en cuatro direcciones. El personaje posee una barra de vida que indica la salud del jugador; si llega a cero se acabará la partida. Existe, además, la opción de pegar un puñetazo que debilite a los enemigos (a costa de quedarse inmóvil). 

###### 2.1.2. Mecánicas de escenario
A lo largo del mapa hay distintos objetos de dos tipos: armamento y objetos sueltos. El armamento consta, como su propio nombre indica, de armas (véase pistolas, fusiles, ...). Por contra, los objetos sueltos pueden ser la munición de dichas armas, raciones para curar la vida y prismáticos, entre otros.
###### 2.1.3. Controles
El personaje se controla con el tradicional WASD del teclado del ordenador, y habrá distintas teclas (por determinar) que abrirán el inventario de objetos o el inventario de armas, así como los puñetazos y los disparos que Solid Snake pueda realizar.

###### 2.1.4. Cámara
La cámara es top-down 2D que mostrará únicamente la sección del mapa en la que se encuentre el jugador.

##### 2.2. Dinámica
Para ganar se ha de llegar sano y salvo al punto B (que sería una continuación en la infiltración de la base enemiga), y perder implica todo lo contrario. Realmente no hay una forma única de pasarse el juego, todas las formas que encuentre el jugador son válidas (infiltrarse con sigilo o acabar con todos los enemigos) si ello implica que éste llegue a su destino con vida.

##### 2.3. Estética
#### 3. Menús y modos de juego 
Párrafos e ilustraciones donde se describe todos aquellos menús “out-game” con las variantes posibles que presente el título, según distintos modos de juego -como el multijugador-. A menudo se utiliza un diagrama de estados para explicar esto.
Si hay opciones para ejecutar directamente los niveles del juego, se incluirá aquí una lista completa.
Mencionar el tipo de elementos que se van a necesitar (imágenes, sonidos, música…)
##### 3.1. Configuración
Se podrá subir y bajar el volumen desde un menú de pausa que se desplegará encima de la partida.

##### 3.2. Interfaz y control
Dentro de la página web, abajo del todo, se detallará qué tecla corresponde a qué acción del juego. Se podrá, además, desplegar un menú durante la partida de pausa que permitirá volver al menú, volver al juego o tocar configuraciones básicas (como se ha descrito en el apartado anterior). Por otra parte, el HUD mostrará únicamente la barra de vida en un recuadro negro en la parte inferior de la pantalla.

#### 4. Contenido
Se necesitarán los sonidos originales (tanto golpes, pantalla de inicio, ...) como los sprites para recrear los escenarios, personajes y enemigos que hay por el mapa.
##### 4.1. Historia
Párrafos e ilustraciones donde se describe todo el trasfondo narrativo del juego, los antecedentes que no llegamos a jugar y también la parte de la historia que sí se cubre con la jugabilidad. Se puede enumerar los personajes desde un punto de vista dramático, aunque si hay información jugable asociada a ellos, es mejor tenerlos en una lista aparte (sección 8).
Si hay cinemáticas o grandes fragmentos de texto, puede incluirse una lista completa en una sección aparte, o tener alguna base de datos u hoja de cálculo que luego será utilizado por los traductores y revisores de textos.
##### 4.2. Niveles
Un único nivel. El objetivo será llegar desde un punto A a un punto B con vida. Es posible utilizar el sigilo o, por el contrario, armarse contra los enemigos y atacarlos.
##### 4.3. Personajes y enemigos
Párrafos e ilustraciones donde se describe en detalle todos los personajes del juego, tanto avatares del jugador, como enemigos u otros personajes no-jugables, hasta secundarios. Con todas sus características convenientemente recogidas en tablas uniformes.
Puede ayudar incluir retratos y arte conceptual de los personajes 
##### 4.4. Objetos
Como he mencionado anteriormente, los objetos pueden dividirse en dos subsecciones: los objetos sueltos y el armamento.
	- Objetos sueltos:
			Prismáticos: servirán para "echar un vistazo" de lo que hay al otro lado de ciertas salas 			y así saber a qué se enfrenta el jugador.
			Raciones: servirán para curar la vida de Solid Snake. Recuperan en torno a un cuarto de 			la vida total.
			Tarjeta(s) de acceso: servirán para acceder a ciertas salas cerradas al paso.
			Caja de cartón: permite a Solid Snake moverse por ciertas zonas sin ser detectado. Sin 				embargo, obliga al usuario a moverse más lentamente y a prescindir de sus armas durante 			el tiempo a cubierto.
			Munición (específica para cada arma): da más munición a determinadas armas.
	- Armamento:
			Pistola: proporciona la posibilidad de disparar a un enemigo que esté a medio-corto 					alcance.
			Minas: objetos que, desplegados en el suelo, si el enemigo pasa por encima, hace que éste 			muera de forma instantánea.
			Silenciador: una vez equipado, disminuye el ruido de las armas para que los enemigos una 			 vez han sido disparados no den la voz de alarma.
### Referencias
- Metal Gear (1987)
