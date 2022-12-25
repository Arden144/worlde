import { browser } from "$app/environment";
import { Color, type State } from "$lib/types";
import { words } from "$lib/words";
import { writable, type Writable } from "svelte/store";

function hasProperty<T, K extends PropertyKey>(
  obj: T,
  prop: K,
): obj is T & Record<K, unknown> {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

function validSaveState(
  obj: unknown,
): obj is Omit<State, "used"> & { used: string[] } {
  return (
    typeof obj === "object" &&
    obj !== null &&
    hasProperty(obj, "version") &&
    obj.version === 4
  );
}

const defaultState = (): State => ({
  version: 4,
  row: 0,
  complete: false,
  solution: [...words][Math.floor(Math.random() * words.size)] ?? "error",
  guesses: Array.from({ length: 6 }, () => ({
    col: 0,
    letters: Array.from({ length: 5 }, () => ({
      char: "",
      color: Color.Absent,
    })),
    reveal: false,
    correct: false,
  })),
  used: new Set(),
});

export const state: Writable<State> = writable(defaultState());

if (browser) {
  const savedState: unknown = JSON.parse(localStorage.getItem("state") ?? "{}");

  if (validSaveState(savedState)) {
    state.set({ ...savedState, used: new Set(savedState.used) });
  }

  state.subscribe(($game) => {
    localStorage.setItem(
      "state",
      JSON.stringify({ ...$game, used: [...$game.used] }),
    );
  });
}
