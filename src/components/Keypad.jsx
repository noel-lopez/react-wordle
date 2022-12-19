import React, { useEffect, useState } from 'react'
import useKeypad from '../hooks/useKeypad'

export default function Keypad() {
  const [letters, setLetters] = useState(null)
  
  useEffect(() => {
    const {letters} = useKeypad()
    setLetters(letters)
  }, [])

  return (
    <div className='keypad'>
      {letters && letters.map((l) => {
        return (
          <div key={l.key}>{l.key.toUpperCase()}</div>
        )
      })}
    </div>
  )
}
