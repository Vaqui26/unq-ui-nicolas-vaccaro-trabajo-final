## Requerimientos para el Proyecto :

Tener instalado NodeJS en su computadora.En caso de que no lo tenga, debe ingresar a https://nodejs.org/en/download/prebuilt-installer y bajarse el instalador e instalarlo en su computadora.
Tambien es recomendable tener `git`, para facilitar la ejecucion del juego.  

## Descarga e Instalación:
Eliga la carpeta donde desea instalar el **proyecto** y abra una **terminal** en dicha carpeta. Sino desea utilizar una terminal, recomiendo utilizar gitBash. 
Una vez dentro de la terminal escriba el siguiente comando:


`git clone https://github.com/Vaqui26/unq-ui-nicolas-vaccaro-trabajo-final.git`

Una vez clonado el repo, ingrese a la carpeta desde la misma terminal con el siguiente comando:

`cd unq-ui-nicolas-vaccaro-trabajo-final`

Y vuelva ejecutar el **mismo** comando para que lo deje acomodado en la carpeta del proyecto.

Por ultimo, sin cerrar la terminal, debera bajarse los `paquetes` del proyecto. Con el siguiente simple comando :

`npm install` o tambien puede ser : `npm i`

## Levantar el Proyecto:

Si seguiste todas las instrucciones correctamente. Estando abierta la terminal, deberas ejecutar el siguiente comando :

`npm run dev`

En la terminal se le mostrara una URL, que ejecutando `Ctrl+click` sobre esta, le abrira una pestaña en su navegador con el proyecto.
La URL deberia ser : http://localhost:5173

# MemoGame

Mejor conocido como `juego de la memoria`. Donde el objetivo es juntar todos los **pares** de cartas/celdas del tablero que se encuentra aleatoriamente repartidos en el tablero.
Las cartas tendra tematica de **animales**. 

## Reglas

 -  Cada vez que se levante una carta, esta quedara boca arriba hasta que se seleccione otra carta.
 - En caso de que la segunda carta levantada coincida con la imagen de la primera, estas quedaran boca arriba.
 - Caso contrario, sino coinciden, ambas cartas quedaran boca abajo hasta que no encuentren su par.
 - El juego finaliza cuando todas las cartas estan boca arriba.

## Modos

 - Cuenta con la posibilida de jugar solo o contra otro jugador en el mismo tablero.
 - Cuenta con tres niveles : 
`Facil` (tablero de 4x4)
`Medio` (tablero de 6x6)
`Dificil` (tablero de 8x8)
 -Por predeterminado, el nivel seleccionado es `Facil`.

### Un Jugador

 - Al ser un solo jugador, el objetivo sigue siendo el mismo.
 - Se le permite elejir un nivel de dificultad.

### Dos Jugadores

 - Al ser dos jugadores, el objetivo final sigue siendo el mismo. Pero donde habra un ganador.
 - Tambien se permite un nivel de dificultad.
 - El ganador sera definido por puntos. Estos puntos se ganan por cada cantidad de pares acertados en el tablero.
 - Cada juego tendra un turno para seleccionar cartas. En caso de que el jugador acierte el par, este podra seguir seleccionando para sumar puntos.
 - En caso de ambos terminen con la misma puntuacion, el ganador sera aquel que haya tenido mas puntos antes del que el otro jugador lo empate. Ejemplo : 
 Si el jugador1 tenia 4 puntos, y el jugador2 tiene 3 puntos, este ultimo al levantar el ultimo par del tablero lo empata. El jugador1 sera el ganador. 
