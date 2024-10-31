<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import type { Feature, BlogPost } from '$lib/utils/types';
	import Experience from '$lib/components/organisms/Experience.svelte';
	import type WorkExperience from '$lib/data/work-experiences/model';
	import Skills from '$lib/components/molecules/Skills.svelte';

	export let data: {
		features: Feature[];
		posts: BlogPost[];
		yearsOfExperience: number;
		experienceEntries: WorkExperience[];
	};

	let { features, posts, yearsOfExperience, experienceEntries } = data;
</script>

<div class="container">
	<Hero />
	<About />
	{#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if}
	<Features {features} />
	<Experience {yearsOfExperience} entries={experienceEntries} />
</div>
