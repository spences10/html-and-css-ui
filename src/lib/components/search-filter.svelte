<script>
	import PersonCard from './person-card.svelte'

	/**
	 * @type {any[]}
	 */
	export let people = []
	let search = ''
	/**
	 * @type {any[]}
	 */
	let filteredSearch

	$: filteredSearch = people.filter((person) => {
		return (
			search === '' ||
			person.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
			person.tags.find(
				(/** @type {string} */ tag) => tag === search.toLowerCase()
			)
		)
	})
</script>

<label class="label">
	Search:
	<input
		type="text"
		bind:value={search}
		placeholder="Search users"
	/>
</label>

{#each filteredSearch as person}
	<PersonCard {person} />
{/each}

<style>
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
</style>