<script lang="ts">
	const reset = () => {
		localStorage.removeItem("state");
		location.reload();
	};
</script>

<header>
	<div class="left">
		<button on:click|preventDefault="{reset}">Reset</button>
	</div>
	<h1>Worlde</h1>
	<div class="right"></div>
</header>

<style lang="scss">
	.left {
		position: absolute;
		left: 0;
		border-right: 1px solid grey;
	}
	.right {
		position: absolute;
		right: 0;
		border-left: 1px solid grey;
	}
	header {
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;

		border-bottom: 1px solid grey;
	}
	button {
		height: 48px;
		min-width: 96px;
		color: white;
		background-color: transparent;
		border: none;
	}
</style>
