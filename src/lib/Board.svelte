<script lang="ts">
	import { game } from "$lib/game";
	import Row from "$lib/Row.svelte";
</script>

<section>
	{#each $game.guesses as guess}
		<Row guess="{guess}" />
	{/each}
</section>
