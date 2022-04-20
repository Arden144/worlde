<script lang="ts">
	import type { Guess, Letter } from "$lib/types";

	export let letter: Letter;
	export let guess: Guess;
</script>

<div
	class:filled="{letter.char !== ''}"
	class:solved="{guess.correct}"
	class="{guess.reveal ? letter.color : ''}"
>
	{letter.char}
</div>

<style lang="scss">
	div {
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 32px;
		font-weight: bold;
		text-transform: uppercase;

		border: 1px solid #666;

		&:not(:last-child) {
			margin-right: 4px;
		}
	}

	@for $i from 1 through 6 {
		div:nth-child(#{$i}) {
			--delay: #{($i - 1) * 100ms};
		}
	}

	.filled {
		animation: pulse 100ms ease-out;
	}

	@each $color in correct, present, absent {
		.#{$color} {
			animation: flip 500ms ease-out var(--delay) forwards;
			--color: var(--#{$color});
		}
	}

	.solved {
		animation: flip 400ms ease-out var(--delay) forwards,
			jump 1s ease-in-out calc(1s + var(--delay));
	}

	@keyframes flip {
		0% {
			transform: scaleY(1);
		}
		50% {
			transform: scaleY(0);
			border: 1px solid grey;
			background-color: transparent;
		}
		51% {
			transform: scaleY(0);
			border: none;
			background-color: var(--color);
		}
		100% {
			border: none;
			background-color: var(--color);
		}
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}

	@keyframes jump {
		0% {
			transform: translateY(0px);
		}
		15% {
			transform: translateY(-50px);
		}
		30% {
			transform: translateY(40px);
		}
		45% {
			transform: translateY(-30px);
		}
		60% {
			transform: translateY(20px);
		}
		75% {
			transform: translateY(-10px);
		}
		90% {
			transform: translateY(5deg);
		}
		100% {
			transform: translateY(0px);
		}
	}
</style>
