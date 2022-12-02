<script>
	import PersonCard from '$lib/components/person-card.svelte';
	import Search from '$lib/icons/search.svelte';

	/**
	 * @type {import('./$types').PageData}
	 */
	export let data;
	let { people } = data;
	let categories = [
		{ name: `Reputation`, slug: `` },
		{ name: `New users`, slug: `` },
		{ name: `Voters`, slug: `` },
		{ name: `Editors`, slug: `` },
		{ name: `Moderators`, slug: `` }
	];
	let current = '';
</script>

<p>Avatars from <a href="https://joeschmoe.io">joe schmoe</a></p>

<section>
	<div>
		<h2>Users</h2>
		<div class="input-section">
			<div class="search-section">
				<Search />
				<input placeholder="Search users" type="text" />
			</div>
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
		</div>
	</div>
	<div class="people-grid">
		{#each people as person}
			<PersonCard {person} />
		{/each}
	</div>
</section>

<style>
	section {
		background: white;
		padding: 4rem;
		border-radius: 0.5rem;
	}
	h2 {
		font-size: 1.5rem;
		line-height: 2rem;
		margin-bottom: 1.25rem;
	}
	ul {
		display: flex;
		list-style: none;
	}
	input {
		height: 3rem;
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: 1rem;
		line-height: 1.25rem;
		line-height: 2;
		line-height: 1.5rem;
		border-width: 1px;
		border-radius: 0.5rem;
		padding-left: 2.25rem;
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
	.input-section {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1.25rem;
	}
	.search-section {
		position: relative;
		display: flex;
		align-items: center;
	}
	.people-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2.5rem;
	}
	@media (min-width: 768px) {
		.people-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 1024px) {
		.people-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	button {
		display: block;
	}

	.selected {
		background-color: #879dff;
		color: white;
	}
</style>
