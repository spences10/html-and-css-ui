<script>
	export let person
	let { img: src, name, location, tags, roles } = person
</script>

<figure>
	<figcaption>
		<div>
			<img {src} alt={name} />
		</div>
		<div class="details-wrapper">
			<h2>{name}</h2>
			<p>{location}</p>
			<div class="tags-wrapper">
				{#each tags as tag}
					<span>{tag}</span>
				{/each}
			</div>
		</div>
	</figcaption>
</figure>

<style>
	img {
		height: 7rem;
		width: 7rem;
		border-radius: 9999px;
		margin: 1rem;
		border: solid #fafa 1px;
	}
	figure {
		border: solid #fafa 1px;
		border-radius: 0.5rem;
	}
	figure:hover {
		border: solid #d5d7e0 1px;
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
			0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}
	figcaption {
		display: flex;
		justify-content: start;
		margin-bottom: 2rem;
		user-select: none;
	}
	.details-wrapper {
		margin-top: 2.5rem;
	}
	.details-wrapper h2 {
		margin-bottom: 0.1rem;
	}
	.details-wrapper p {
		margin-bottom: 1rem;
	}
	.tags-wrapper {
		display: flex;
		flex-wrap: wrap;
	}
	span {
		font-size: 0.7rem;
		background-color: #fafa;
		border-radius: 0.5rem;
		padding: 0.2rem 0.5rem;
		margin-right: 0.5rem;
		margin-bottom: 0.5rem;
	}
</style>
