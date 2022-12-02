<script>
	let categories = [
		{ name: `Reputation`, slug: `` },
		{ name: `New users`, slug: `` },
		{ name: `Voters`, slug: `` },
		{ name: `Editors`, slug: `` },
		{ name: `Moderators`, slug: `` },
	]
	export let current = ''
</script>

<ul>
	{#each categories as category}
		<li>
			<button
				class="category-button"
				class:selected={current === category.name}
				on:click={() => (current = category.name)}
			>
				{category.name}
			</button>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		list-style: none;
	}
	.category-button {
		height: 3rem;
		padding: 0.5rem 1rem;
		display: inline-flex;
		font-size: 1rem;
		flex-shrink: 0;
		cursor: pointer;
		user-select: none;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		border-color: transparent;
		background-color: white;
		border-radius: 0.35rem;
	}
	.category-button:hover {
		background-color: #f7fafc;
	}
	.category-button.selected:hover {
		background-color: #879dff;
	}
	button {
		display: block;
	}
	.selected {
		background-color: #879dff;
		color: white;
	}
</style>
