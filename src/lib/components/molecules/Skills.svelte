<script lang="ts">
	import AvatarWithBlobs from './AvatarWithBlobs.svelte';
	// Array of skills with positions and animations
	const skills = [
		{
			name: 'Sklearn',
			experience: '1 Years',
			imgSrc: './images/sklearn.png',
			top: '50%',
			left: '75%',
			animationClass: 'anim-float-card-up'
		},
		{
			name: 'MLFlow',
			experience: '1 Years',
			imgSrc: './images/mlflow.svg',
			top: '20%',
			left: '80%',
			animationClass: 'anim-float-card-up'
		},
		{
			name: 'Software Engineering',
			experience: '12 Years',
			imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
			top: '70%',
			left: '50%',
			animationClass: 'anim-float-card-up'
		},
		{
			name: 'RecSys',
			experience: '5 Years',
			imgSrc: './images/recommendations.svg',
			top: '30%',
			left: '45%',
			animationClass: 'anim-float-card-up'
		},
		{
			name: 'Python',
			experience: '5 Years',
			imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
			top: '80%',
			left: '70%',
			animationClass: 'anim-float-card-up'
		},
		{
			name: 'Spark',
			experience: '1 Years',
			imgSrc: './images/spark.webp',
			top: '20%',
			left: '30%',
			animationClass: 'anim-float-card-down'
		},
		{
			name: 'Machine Learning',
			experience: '5 Years',
			imgSrc: './images/brain.svg',
			top: '50%',
			left: '25%',
			animationClass: 'anim-float-card-up'
		},
		{
			name: 'ETL',
			experience: '5 Years',
			imgSrc: './images/data.png',
			top: '60%',
			left: '25%',
			animationClass: 'anim-float-card-down'
		},
		{
			name: 'TensorFlow',
			experience: '5 Year',
			imgSrc:
				'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
			top: '90%',
			left: '50%',
			animationClass: 'anim-float-card-up'
		},
		{
			name: 'NumPy',
			experience: '5 Years',
			imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
			top: '80%',
			left: '35%',
			animationClass: 'anim-float-card-down'
		},
		{
			name: 'Pandas',
			experience: '5 Years',
			imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
			top: '17%',
			left: '50%',
			animationClass: 'anim-float-card-up'
		},
		// Add more skills as needed
		{
			name: 'Pytorch',
			experience: '2 Years',
			imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
			top: '60%',
			left: '80%',
			animationClass: 'anim-float-card-down'
		},
		{
			name: 'Databricks',
			experience: '1 Year',
			imgSrc: './images/databricks.png',
			top: '35%',
			left: '20%',
			animationClass: 'anim-float-card-up'
		},
		{
			name: 'Deep Learning',
			experience: '5 Years',
			imgSrc: './images/arm.gif',
			top: '35%',
			left: '75%',
			animationClass: 'anim-float-card-down'
		},
		{
			name: 'Docker',
			experience: '2 Years',
			imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
			top: '25%',
			left: '65%',
			animationClass: 'anim-float-card-up'
		}
	];
</script>

<div class="container">
	<!-- Background Circles -->
	<!-- <div class="bg-circles">
		<div class="outer-circle">
			<div class="inner-circle" />
		</div>
	</div> -->

	<!-- Floating Elements -->
	<!-- Avatar -->
	<div class="floating-element anim-float-avatar" style="top: 50%; left: 50%;">
		<AvatarWithBlobs />
	</div>

	<!-- Skills Cards -->
	<!-- Define an array of skills -->
	{#each skills as skill}
		<div
			class="floating-element {skill.animationClass}"
			style="top: {skill.top}; left: {skill.left}; animation-delay: {Math.random() * 10}s;"
		>
			<div class="card-header">
				<img src={skill.imgSrc} alt="{skill.name} Logo" class="profile-avatar" />
				<div>
					<p class="profile-name">{skill.name}</p>
					<p class="profile-handle">{skill.experience}</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	/* Container Styles */
	.container {
		position: relative;
		width: 100%;
		padding-top: 80%; /* 16:9 Aspect Ratio */
		overflow: hidden;
	}

	/* Background Circles */
	.bg-circles {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.outer-circle {
		width: 24rem;
		height: 24rem;
		border: 2px solid var(--color--text);
		opacity: 0.1;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.inner-circle {
		width: 15rem;
		height: 15rem;
		border: 2px solid var(--color--text);
		border-radius: 50%;
	}

	/* Floating Elements */
	.floating-element {
		position: absolute;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	/* Card Styles */
	.card-header {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}
	.profile-avatar {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		margin-right: 0.5rem;
	}
	.profile-name {
		font-weight: bold;
		font-size: 1.125rem;
		margin: 0;
		opacity: 0.6;
	}
	.profile-handle {
		/* color: #6b7280; */
		font-size: 0.775rem;
		opacity: 0.75;
		font-family: Arial, Helvetica, sans-serif;
	}

	/* Animations */
	@keyframes float-up {
		0% {
			transform: translate(-50%, -50%) translateY(0);
		}
		50% {
			transform: translate(-50%, -50%) translateY(-20px);
		}
		100% {
			transform: translate(-50%, -50%) translateY(0);
		}
	}
	@keyframes float-down {
		0% {
			transform: translate(-50%, -50%) translateY(0);
		}
		50% {
			transform: translate(-50%, -50%) translateY(20px);
		}
		100% {
			transform: translate(-50%, -50%) translateY(0);
		}
	}

	/* Apply float-up animation */
	.anim-float-card-up {
		animation: float-up 12s ease-in-out infinite;
	}

	/* Apply float-down animation */
	.anim-float-card-down {
		animation: float-down 12s ease-in-out infinite;
	}

	/* Existing Animation Classes */
	.anim-float-avatar {
		animation: float-up 15s ease-in-out infinite;
	}
</style>
