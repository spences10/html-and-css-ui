<script>
	export let person
	let { img: src, name, location, tags, roles } = person
</script>

<figure>
	<figcaption>
		<div>
			<img {src} alt={name} />
		</div>
		<div>
			<h2>{name}</h2>
			<p>{location}</p>
			{#each tags as tag}
				<span>{tag}</span>
			{/each}
		</div>
	</figcaption>
</figure>

<style>
	figure {
		border: solid #fafa 1px;
		border-radius: 0.5rem;
	}
	figure:hover {
		border: solid #d5d7e0 1px;
		box-shadow: 0 0 0.5rem 0.1rem #d5d7e0;
	}
	img {
		height: 6rem;
		width: 6rem;
		border-radius: 9999px;
	}
</style>
