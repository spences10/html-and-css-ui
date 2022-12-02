<script>
	import '../global.css';
</script>

<main class="container">
	<slot />
</main>

<style>
	main {
		max-width: 80rem;
		margin-left: auto;
		margin-right: auto;
		padding-left: 1rem;
		padding-right: 1rem;
	}
	.container {
		width: 100%;
	}
	@media (min-width: 640px) {
		.container {
			max-width: 640px;
		}
	}
	@media (min-width: 768px) {
		.container {
			max-width: 768px;
		}
	}
	@media (min-width: 1024px) {
		.container {
			max-width: 1024px;
		}
	}
	@media (min-width: 1280px) {
		.container {
			max-width: 1280px;
		}
	}
	@media (min-width: 1536px) {
		.container {
			max-width: 1536px;
		}
	}
</style>
