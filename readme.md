# Wordle App with React + Vite

## Getting started

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm run dev` to start the local server (this project Vite)

## Functionality overview

This application is a wordle game site that allows you to guess a different word every time you refresh the page.

**Understanding Wordle's gameplay:**

- You're given six attempts to guess a 5-letter word.
- Each attempt at guessing the word offers hints by the highlighted letter coloring.
- If a letter contains a green background, this indicates you guessed the proper letter in the correct spot.
- Anything with a yellow background indicates you've guessed the correct letter, but it's in the wrong spot.
- In contrast, letters with gray backgrounds are not in the word at all, which means you can skip them in your following guesses.
- You only have six turns to gather all your previous clues to figure out the correct word. Good luck!