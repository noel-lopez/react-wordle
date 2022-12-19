import { useEffect, useState } from "react"
import Wordle from "./components/Wordle"

function App() {
  const [solution, setSolution] = useState(null)

  useEffect( () => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        // random int between 0 & 14
        const randomIndex = Math.floor(Math.random()*json.length)
        const randomSolution = json[randomIndex].word
        setSolution(randomSolution)
      })
  }, []) 

  return (
    <div className="App">
      <h1>WORDLE</h1>
      <h2>noel-lopez</h2>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App

/* 
datos que necesito trackear:
  -- solucion
    -- string de 5 letras
  -- intentos pasados
    -- un array de intentos pasados
    -- cada intento pasado es un array de objetos [{}, {}, {}, {}, {}]
    -- cada objeto representa una letra de la palabra de dicho intento {letter: 'a', color: 'yellow'}
  -- intento actual
    -- string 'luffy'
  -- letras del teclado
    -- array de objetos (letras) -> [{key: 'a', color: 'green'}, {}, {} ...]
  -- numero de turnos
    -- int 0 - 6
juego:
  -- input de palabras:
    -- el usuario escribe una letra y se llena un cuadro con esa letra
    -- cuando el usuario presiona "delete" elimina la letra anterior
    -- cuando el usuario presiona "enter" envía la palabra
      -- si no están todos los cuadros llenos con letras, no se envía la palabra
      -- si la palabra ya se ha usado en un intento anterior, no se envía la palabra
  -- verificando palabras enviadas:
    -- se verifica cada letra para ver si coincide con la solucion
    -- se le asigna un color a cada letra dependiendo de su relacion con la solucion
      -- coincidencia exacta (la letra esta en la posicion correcta) -> color verde
      -- coincidencia parcial (la letra esta en la solucion pero no es la posicion correcta) -> color amarillo
      -- no hay coincidencia (la letra no esta en la solucion) -> color gris
    -- se agrega el intento al array con los colores correctos
    -- el intento actual se mueve a la proxima fila
    -- las letras del teclado se actualizan (colores)
  -- final del juego:
    -- cuando el intento coincide con la solución
      -- pantalla final 'well done'
    -- cuando el usuario se queda sin intentos
      -- pantalla final 'unlucky'
*/