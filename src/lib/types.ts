export enum Color {
	Correct = "correct",
	Present = "present",
	Absent = "absent",
	None = "",
}

export interface State {
	version: 4;
	row: number;
	complete: boolean;
	solution: string;
	guesses: Guess[];
	used: Set<string>;
}

export interface Guess {
	col: number;
	letters: Letter[];
	reveal: boolean;
	correct: boolean;
}

export interface Letter { char: string; color: Color }
