<script>
	import { categoryStore } from '$lib/store'

	let categories = [
		{ name: `Reputation`, slug: `` },
		{ name: `New users`, slug: `` },
		{ name: `Voters`, slug: `` },
		{ name: `Editors`, slug: `` },
		{ name: `Moderators`, slug: `` },
	]
	export let current = ''
	const updateCategory = (/** @type {string} */ name) => {
		current = name
		$categoryStore = name
	}
</script>

<ul>
	{#each categories as { name }}
		<li>
			{#if current === '' && name === 'New users'}
				<button
					class="category-button"
					class:active={true}
					on:click={() => updateCategory(name)}
				>
					{name}
				</button>
			{:else}
				<button
					class="category-button"
					class:active={current === name}
					on:click={() => updateCategory(name)}
				>
					{name}
				</button>
			{/if}
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
	.category-button.active:hover {
		background-color: #879dff;
	}
	button {
		display: block;
	}
	.active {
		background-color: #879dff;
		color: white;
	}
</style>
