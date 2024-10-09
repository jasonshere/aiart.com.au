<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
	import RssLink from '$lib/components/atoms/RssLink.svelte';

	export let showBackground = false;
</script>

<header class:has-background={showBackground}>
	<!-- <nav class="navbar is-spaced" id="ar-navbar">
		<div class="navbar-brand">
			<a aria-current="page" class="navbar-item" href="/"
				><figure class="image is-vertical-center">
					<div class="nav-logo gatsby-image-wrapper" style="position: relative; overflow: hidden;">
						<div aria-hidden="true" style="width: 100%; padding-bottom: 25%;" />
						<img
							aria-hidden="true"
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAABiElEQVQY0z2QPSwDYRjHr2Uy2Cw6iSgxoEQIBiG+IiwsZiYjgxAJg2CQMIjJ3KRJY2CgrapG0Za27m3v+33ver279+76IUaJSL2V8CRPfk/+T/5P/nko1TCparVK1cowiwtKXm8gnNMM21XT7iPJxswb5+J4uT2VYtzZnNQTCj41YbvUzAlyKw34rniC7gBAcAeCDw4KyZqzZizoZtPn13fVKlXGSF9bxcpQKs105wvYb5ff91kO3TEcumVYGIFy4YboPhoImyJUI7yghMn+6DcVSeeoUTOsFWJkTLu8R9J5dWx1c7x0gGQVq5r+CFE+DJGyAQB3nMnkzsh8ApG8KivqpiAinwSVLeqv6qmWOmyXX7FVihOyhAER6n1p2lyjc/g08YIuWfFjNZO116MxaTv2jA4Bg32ALe4kUniZcDeeRPv/B8kvXLpZPFdUYxgp2oWOS14tn+4Ffucgc+Uazd2MzIvBtjEh1D/NBzxTMNw7KUQXl9jrzgkh5JmUwgOz8uPiDHc77vwBO9gEIvwmOvMAAAAASUVORK5CYII="
							alt=""
							style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 0; transition-delay: 500ms;"
						/><picture
							><source
								type="image/webp"
								srcset="/static/dfe7b39cd77a9fe9b4d88fbdef909c6d/7d7d8/logo-bar.webp 112w"
								sizes="(max-width: 112px) 100vw, 112px"
							/><source
								srcset="/static/dfe7b39cd77a9fe9b4d88fbdef909c6d/44cfa/logo-bar.png 112w"
								sizes="(max-width: 112px) 100vw, 112px"
							/><img
								sizes="(max-width: 112px) 100vw, 112px"
								srcset="/static/dfe7b39cd77a9fe9b4d88fbdef909c6d/44cfa/logo-bar.png 112w"
								src="/static/dfe7b39cd77a9fe9b4d88fbdef909c6d/44cfa/logo-bar.png"
								alt=""
								loading="lazy"
								style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 500ms;"
							/></picture
						><noscript
							><picture
								><source
									type="image/webp"
									srcset="/static/dfe7b39cd77a9fe9b4d88fbdef909c6d/7d7d8/logo-bar.webp 112w"
									sizes="(max-width: 112px) 100vw, 112px"
								/><source
									srcset="/static/dfe7b39cd77a9fe9b4d88fbdef909c6d/44cfa/logo-bar.png 112w"
									sizes="(max-width: 112px) 100vw, 112px"
								/><img
									loading="lazy"
									sizes="(max-width: 112px) 100vw, 112px"
									srcset="/static/dfe7b39cd77a9fe9b4d88fbdef909c6d/44cfa/logo-bar.png 112w"
									src="/static/dfe7b39cd77a9fe9b4d88fbdef909c6d/44cfa/logo-bar.png"
									alt=""
									style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"
								/></picture
							></noscript
						>
					</div>
				</figure></a
			><a class="navbar-item is-hidden-desktop" href="https://github.com/jasonshere" target="_blank"
				><span class="icon"
					><svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 16 16"
						size="24"
						height="24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
						/></svg
					></span
				></a
			>
			<div
				role="button"
				class="navbar-burger burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="ar-navMenu"
				tabindex="0"
			>
				<span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
			</div>
		</div>
		<div id="ar-navMenu" class="navbar-menu">
			<div class="navbar-start">
				<a aria-current="page" class="navbar-item ar-navbar-item" href="/"
					><span class="icon"
						><svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							version="1"
							viewBox="0 0 48 48"
							enable-background="new 0 0 48 48"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
							><polygon fill="#E8EAF6" points="42,39 6,39 6,23 24,6 42,23" /><g fill="#C5CAE9"
								><polygon points="39,21 34,16 34,9 39,9" /><rect
									x="6"
									y="39"
									width="36"
									height="5"
								/></g
							><polygon fill="#B71C1C" points="24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9" /><rect
								x="18"
								y="28"
								fill="#D84315"
								width="12"
								height="16"
							/><rect x="21" y="17" fill="#01579B" width="6" height="6" /><path
								fill="#FF8A65"
								d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"
							/></svg
						></span
					><span>Home</span><span class="cd-cursor" /></a
				><a class="navbar-item ar-navbar-item" href="/about/"
					><span class="icon"
						><svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							version="1"
							viewBox="0 0 48 48"
							enable-background="new 0 0 48 48"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
							><path fill="#FF9800" d="M22,38c-4.8,0-5-7-5-7v-6h10v6C27,31,26.8,38,22,38z" /><g
								fill="#FFA726"><circle cx="31" cy="19" r="2" /><circle cx="13" cy="19" r="2" /></g
							><path
								fill="#FFB74D"
								d="M31,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C31,18.9,31,14.1,31,13z"
							/><path
								fill="#424242"
								d="M22,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H22z"
							/><g fill="#784719"
								><circle cx="26" cy="19" r="1" /><circle cx="18" cy="19" r="1" /></g
							><path
								fill="#009688"
								d="M27,31L27,31c0,0-1.8,2-5,2s-5-2-5-2S6,33,6,44h32C38,33,27,31,27,31z"
							/><g fill="#FF9800"
								><rect
									x="36.1"
									y="6.1"
									transform="matrix(.707 .707 -.707 .707 19.787 -25.77)"
									width="9.9"
									height="9.9"
								/><rect x="36" y="6" width="10" height="10" /></g
							><circle fill="#FFEB3B" cx="41" cy="11" r="3" /></svg
						></span
					><span>About</span><span class="cd-cursor" /></a
				><a class="navbar-item ar-navbar-item" href="/blog/"
					><span class="icon"
						><svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							version="1"
							viewBox="0 0 48 48"
							enable-background="new 0 0 48 48"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
							><path fill="#5C6BC0" d="M40,40c-6.9,0-16,4-16,4V22c0,0,9-4,18-4L40,40z" /><path
								fill="#7986CB"
								d="M8,40c6.9,0,16,4,16,4V22c0,0-9-4-18-4L8,40z"
							/><g fill="#FFB74D"
								><circle cx="24" cy="12" r="8" /><path
									d="M41,32h1c0.6,0,1-0.4,1-1v-4c0-0.6-0.4-1-1-1h-1c-1.7,0-3,1.3-3,3v0C38,30.7,39.3,32,41,32z"
								/><path
									d="M7,26H6c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h1c1.7,0,3-1.3,3-3v0C10,27.3,8.7,26,7,26z"
								/></g
							></svg
						></span
					><span>Blog</span><span class="cd-cursor" /></a
				><a class="navbar-item ar-navbar-item" href="/recommended/"
					><span class="icon"
						><svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							version="1"
							viewBox="0 0 48 48"
							enable-background="new 0 0 48 48"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill="#F44336"
								d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
							/></svg
						></span
					><span>Recommended</span><span class="cd-cursor" /></a
				><a class="navbar-item ar-navbar-item" href="/topics/"
					><span class="icon"
						><svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							version="1"
							viewBox="0 0 48 48"
							enable-background="new 0 0 48 48"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill="#3F51B5"
								d="M42,29H20.8c-0.5,0-1-0.2-1.4-0.6l-3.7-3.7c-0.4-0.4-0.4-1,0-1.4l3.7-3.7c0.4-0.4,0.9-0.6,1.4-0.6H42 c0.6,0,1,0.4,1,1v8C43,28.6,42.6,29,42,29z"
							/><rect x="9" y="6" fill="#CFD8DC" width="2" height="36" /><g fill="#90A4AE"
								><circle cx="10" cy="10" r="3" /><circle cx="10" cy="24" r="3" /><circle
									cx="10"
									cy="38"
									r="3"
								/></g
							><path
								fill="#448AFF"
								d="M34,43H20.8c-0.5,0-1-0.2-1.4-0.6l-3.7-3.7c-0.4-0.4-0.4-1,0-1.4l3.7-3.7c0.4-0.4,0.9-0.6,1.4-0.6H34 c0.6,0,1,0.4,1,1v8C35,42.6,34.6,43,34,43z"
							/><path
								fill="#00BCD4"
								d="M35,15H20.8c-0.5,0-1-0.2-1.4-0.6l-3.7-3.7c-0.4-0.4-0.4-1,0-1.4l3.7-3.7C19.8,5.2,20.3,5,20.8,5H35 c0.6,0,1,0.4,1,1v8C36,14.6,35.6,15,35,15z"
							/></svg
						></span
					><span>Topics</span><span class="cd-cursor" /></a
				><a class="navbar-item ar-navbar-item" href="/contact/"
					><span class="icon"
						><svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							version="1"
							viewBox="0 0 48 48"
							enable-background="new 0 0 48 48"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill="#FF7043"
								d="M38,44H12V4h26c2.2,0,4,1.8,4,4v32C42,42.2,40.2,44,38,44z"
							/><path fill="#BF360C" d="M10,4h2v40h-2c-2.2,0-4-1.8-4-4V8C6,5.8,7.8,4,10,4z" /><g
								fill="#AB300B"
								><circle cx="26" cy="20" r="4" /><path
									d="M33,30c0,0-1.9-4-7-4c-5.1,0-7,4-7,4v2h14V30z"
								/></g
							></svg
						></span
					><span>Contact</span><span class="cd-cursor" /></a
				>
			</div>
			<div class="navbar-end">
				<a
					class="navbar-item is-hidden-desktop-only"
					href="https://github.com/jasonshere"
					target="_blank"
					><span class="icon"
						><svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 16 16"
							size="24"
							height="24"
							width="24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							/></svg
						></span
					></a
				>
			</div>
		</div>
	</nav> -->
	<nav class="container">
		<a class="logo" href="/" aria-label="Site logo">
			<Logo />
		</a>
		<div class="links">
			<a href="/blog">Blog</a>
			<RssLink />
			<ThemeToggle />
		</div>
	</nav>
</header>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	header {
		position: relative;
		padding: 30px 0;

		@include for-phone-only {
			padding: 20px 0;
		}

		&.has-background {
			background: linear-gradient(
				60deg,
				var(--color--waves-start) 0%,
				var(--color--waves-end) 100%
			);
		}

		.container {
			display: flex;
			align-items: center;
			gap: 30px;

			@include for-phone-only {
				.links {
					a {
						display: none;
					}
				}
			}
		}

		.logo {
			height: 44px;
			flex: 1;
		}

		a {
			color: var(--color--text);
		}

		.links {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 30px;

			a {
				text-decoration: none;

				&:hover {
					color: var(--color--primary);
					filter: drop-shadow(0px 0px 3px var(--color--primary));
				}
			}
		}
	}
</style>
