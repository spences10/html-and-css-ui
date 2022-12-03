<script>
	import Categories from '$lib/components/categories.svelte'
	import PersonCard from '$lib/components/person-card.svelte'
	import SearchIcon from '$lib/icons/search-icon.svelte'

	/**
	 * @type {import('./$types').PageData}
	 */
	export let data
	let { people } = data
	let search = ''
	let current = ''
</script>

<p>Avatars from <a href="https://joeschmoe.io">joe schmoe</a></p>

<section>
	<div>
		<h2>Users</h2>
		<div class="input-section">
			<div class="search-section">
				<SearchIcon />
				<input
					bind:value={search}
					placeholder="Search users"
					type="text"
				/>
			</div>
			<Categories {current} />
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
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	}
	h2 {
		font-size: 1.5rem;
		line-height: 2rem;
		margin-bottom: 1.25rem;
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
</style>
