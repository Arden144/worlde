<script lang="ts">
	import Board from "$lib/Board.svelte";
	import { game } from "$lib/game";
	import Header from "$lib/Header.svelte";
	import Keyboard from "$lib/Keyboard.svelte";

	const onKeypress = (ev: KeyboardEvent) => {
		if (
			ev.getModifierState("Alt") ||
			ev.getModifierState("AltGraph") ||
			ev.getModifierState("Control") ||
			ev.getModifierState("Meta")
		) {
			return;
		}
		if (ev.key === "Enter") {
			game.submitGuess();
		} else if (ev.key === "Backspace" || ev.key === "Delete") {
			game.removeLetter();
		} else if (/^[\w]$/.test(ev.key)) {
			game.addLetter(ev.key.toLowerCase());
		}
	};

	const onKey = (ev: CustomEvent<string>) => {
		game.addLetter(ev.detail);
	};
</script>

<svelte:window on:keydown="{onKeypress}" />

<Header />
<main>
	<Board />
	<Keyboard on:key="{onKey}" />
</main>

<style lang="scss">
	main {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		overflow: hidden;
	}
</style>
