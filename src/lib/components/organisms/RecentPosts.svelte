<script lang="ts">
	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { BlogPost } from '$lib/utils/types';
	import Button from '$lib/components/atoms/Button.svelte';
	import { showPosts } from '$lib/data/meta';

	export let posts: BlogPost[];
</script>

{#if posts.length > 0 && showPosts}
	<ContentSection
		id="recent-posts"
		title="Recent posts"
		description="Explore my most recent posts for insightful and interesting content!"
		align="left"
	>
		<div slot="button">
			<Button href="/blog">View More</Button>
		</div>
		<div class="grid">
			{#each posts as post}
				<BlogPostCard
					slug={post.slug}
					title={post.title}
					excerpt={post.excerpt}
					tags={post.tags}
					readingTime={post.readingTime}
					showImage={false}
				/>
			{/each}
		</div>
	</ContentSection>
{/if}

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;

		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}
</style>
