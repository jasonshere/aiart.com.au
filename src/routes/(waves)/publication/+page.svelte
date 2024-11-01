<script lang="ts">
	import features from '$lib/data/features';

	import FeatureCard from '$lib/components/molecules/FeatureCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
</script>

<div class="container">
	<ContentSection
		title="All Publications"
		description="Dive into my collection of research contributions in the fields of machine learning, deep learning, recommendation systems, fairness, and Explainable AI. Each publication explores key advancements and insights aimed at pushing the boundaries of AI and ensuring transparency and equity in intelligent systems."
	>
		<div class="grid">
			{#each features as publication}
				<FeatureCard
					name={publication.name}
					description={publication.description}
					image={publication.image}
					tags={publication.tags}
					link={publication.link}
				/>
			{/each}
		</div>
	</ContentSection>
</div>

<style lang="scss">
	@import '$lib/scss/_mixins.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 20px;

		@include for-tablet-portrait-down {
			grid-template-columns: 1fr;
		}

		@include for-tablet-landscape-up {
			// Select every 6 elements, starting from position 1
			// And make it take up 6 columns
			> :global(:nth-child(6n + 1)) {
				grid-column: span 6;
			}
			// Select every 6 elements, starting from position 2
			// And make it take up 3 columns
			> :global(:nth-child(6n + 2)) {
				grid-column: span 3;
			}
			// Select every 6 elements, starting from position 3
			// And make it take up 3 columns
			> :global(:nth-child(6n + 3)) {
				grid-column: span 3;
			}
			// Select every 6 elements, starting from position 4, 5 and 6
			// And make it take up 2 columns
			> :global(:nth-child(6n + 4)),
			:global(:nth-child(6n + 5)),
			:global(:nth-child(6n + 6)) {
				grid-column: span 3;
			}
		}
	}
</style>
