import React, { useEffect, useState } from 'react'
import useKeypad from '../hooks/useKeypad'

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null)
  
  useEffect(() => {
    const {letters} = useKeypad()
    setLetters(letters)
  }, [])

  return (
    <div className='keypad'>
      {letters && letters.map((l) => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={color}>{l.key.toUpperCase()}</div>
        )
      })}
    </div>
  )
}
