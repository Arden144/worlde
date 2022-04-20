<script lang="ts">
	import { game } from "$lib/game";
	import { createEventDispatcher } from "svelte";

	export let key: string;

	const dispatch = createEventDispatcher();
	const onClick = () => dispatch("key", key);
</script>

<button class:disabled="{$game.used.has(key)}" on:click|preventDefault="{onClick}">{key}</button>

<style lang="scss">
	button {
		width: 44px;
		height: 60px;
		border: none;
		border-radius: 4px;
		flex-shrink: 1;

		color: #ffffff;
		background-color: #818384;
		font-weight: bold;
		text-transform: uppercase;

		&:not(:last-child) {
			margin-right: 6px;
		}
	}

	.disabled {
		background-color: #434343;
	}
</style>
