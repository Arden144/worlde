<script lang="ts">
	import Key from "$lib/Key.svelte";

	const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
</script>

<section>
	{#each rows as row}
		<div>
			{#each row as key}
				<Key on:key key="{key}" />
			{/each}
		</div>
	{/each}
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	div {
		display: flex;
		&:not(:last-child) {
			margin-bottom: 6px;
		}
	}
</style>
