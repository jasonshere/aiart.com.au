<script lang="ts">
	import type { Feature } from '$lib/utils/types';
	import FeatureCard from '$lib/components/molecules/FeatureCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';

	export let features: Feature[];
</script>

<ContentSection
	id="publications"
	title="Publications"
	description="Dive into my collection of research contributions in the fields of machine learning, deep learning, recommendation systems, fairness, and Explainable AI. Each publication explores key advancements and insights aimed at pushing the boundaries of AI and ensuring transparency and equity in intelligent systems."
>
	<div class="features-container">
		<div class="three-group-grid">
			{#each features as feature}
				<FeatureCard
					name={feature.name}
					description={feature.description}
					image={feature.image}
					tags={feature.tags}
					link={feature.link}
				/>
			{/each}
		</div>
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.features-container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}

	.three-group-grid {
		width: 100%;
		display: grid;
		// grid-template-columns: 3fr 1fr;
		grid-gap: 20px;

		@media (max-width: 1085px) {
			grid-template-columns: 1fr 1fr;
		}

		@include for-phone-only {
			grid-template-columns: 1fr;
		}

		// Select every 3 elements, starting from position 2
		// And make it take up 2 rows
		@media (min-width: 1086px) {
			> :global(:nth-child(3n + 2)) {
				grid-row: span 2;
			}
		}

		// Select every 3 elements, starting from position 1
		// And make it take up 2 columns
		> :global(:nth-child(3n + 1)) {
			@media (max-width: 1085px) {
				grid-column: span 2;
			}

			@include for-tablet-portrait-down {
				grid-template-columns: 1fr;
				grid-column: unset;
			}
		}
	}
</style>
