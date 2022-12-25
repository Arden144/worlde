import { state } from "$lib/storage";
import { Color } from "$lib/types";
import { words } from "$lib/words";
import { produce } from "immer";

export const game = {
  ...state,

  addLetter(char: string) {
    this.update(
      produce(($game) => {
        const { row, guesses, solution, complete } = $game;

        if (complete) {
          return;
        }

        const guess = guesses[row];
        if (guess === undefined) {
          return;
        }

        const { letters, col } = guess;

        const letter = letters[col];
        if (letter === undefined) {
          return;
        }

        if (char === solution[col]) {
          letter.color = Color.Correct;
        } else if (solution.includes(char)) {
          letter.color = Color.Present;
        }

        letter.char = char;
        guess.col++;
      }),
    );
  },

  removeLetter() {
    this.update(
      produce(($game) => {
        const { row, guesses, complete } = $game;

        if (complete) {
          return;
        }

        const guess = guesses[row];
        if (guess === undefined) {
          return;
        }

        const { letters, col } = guess;

        const letter = letters[col - 1];
        if (letter === undefined) {
          return;
        }

        letter.color = Color.Absent;
        letter.char = "";
        guess.col--;
      }),
    );
  },

  submitGuess() {
    this.update(
      produce(($game) => {
        const { row, guesses, used, solution, complete } = $game;

        if (complete) {
          return;
        }

        const guess = guesses[row];
        if (guess === undefined) {
          return;
        }

        const word = guess.letters.map((letter) => letter.char).join("");
        if (!words.has(word)) {
          return;
        }

        if (word === solution) {
          guess.correct = true;
          $game.complete = true;
        }

        guess.letters.forEach(({ char }) => used.add(char));
        guess.reveal = true;
        $game.row++;
      }),
    );
  },
};
