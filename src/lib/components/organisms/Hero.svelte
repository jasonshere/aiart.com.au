<script>
	import StarIcon from '$lib/icons/star.svelte';
	import ExperienceIcon from '$lib/icons/experience.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Sparkles from '../atoms/Sparkles.svelte';
</script>

<section id="hero">
	<h1 class="hello">Hi, I'm Jason</h1>
	<p class="intro">
		<span class="left">A PhD holder, Machine Learning Researcher & Scientist,</span>
		<span class="right">and I'm building smart solutions and sharing insights.</span>
	</p>
	<div class="ctas">
		<Sparkles>
			<Button href="/#publications">
				<StarIcon slot="icon" />
				Publications
			</Button>
		</Sparkles>
		<Button color="primary" href="/#experience">
			<ExperienceIcon slot="icon" />
			Experience
		</Button>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: relative;
		padding: 80px 0;

		@include for-phone-only {
			padding: 40px 0 50px;
		}

		.hello {
			text-align: center;
		}

		.intro {
			font-weight: 500;
			font-size: 1.4rem;
			width: 80%;
			line-height: 2.2rem;
			// width: min(100%, 440px);
			display: flex;
			flex-direction: column;

			.left {
				text-align: left;
				width: 90%;
			}
			.right {
				text-align: right;
			}

			@include for-phone-only {
				display: none;
			}
		}

		.ctas {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 10px;
			width: 100%;
		}
	}
</style>
