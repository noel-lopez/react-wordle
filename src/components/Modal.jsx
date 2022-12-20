import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className='modal'>
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className='solution'>{solution}</p>
          <p>You found the solution in {turn} {turn === 1 ? 'guess' : 'guesses'}</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>You lost :(</h1>
          <p className='solution'>{solution}</p>
          <p>Better luck next time!</p>
          {/* TODO: button to try again that generates another random solution */}
          {/* TODO: button to close modal and see the game */}
        </div>
      )}
    </div>
  )
}
