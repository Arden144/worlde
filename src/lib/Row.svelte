<script lang="ts">
	import Box from "$lib/Box.svelte";
	import type { Guess } from "$lib/types";

	export let guess: Guess;
</script>

<div>
	{#each guess.letters as letter}
		<Box letter="{letter}" guess="{guess}" />
	{/each}
</div>

<style lang="scss">
	div {
		display: flex;
		&:not(:last-child) {
			margin-bottom: 4px;
		}
	}
</style>
