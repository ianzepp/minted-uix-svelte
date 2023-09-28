<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	/** @type {import('./$types').PageData} */
	export let data: _.Dictionary<any>;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Minted UIX</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	
	<!-- Page Route Content -->
	<div class="container mx-auto p-8 space-y-8">
		<!-- Show a breadcrumb for navigation -->
		<ol class="breadcrumb">
			<li class="crumb"><a class="anchor" href="/">home</a></li>
			<li class="crumb-separator" aria-hidden>&rsaquo;</li>
			<li class="crumb"><a class="anchor" href="/app/data">data</a></li>

			{#if data.schema_name}
			<li class="crumb-separator" aria-hidden>&rsaquo;</li>
			<li class="crumb"><a class="anchor" href="/app/data/{data.schema_name}">{data.schema_name}</a></li>
			{/if}

			{#if data.record_name}
			<li class="crumb-separator" aria-hidden>&rsaquo;</li>
			<li class="crumb"><a class="anchor" href="/app/data/{data.schema_name}/{data.record_name}">{data.record_name}</a></li>
			{/if}
		</ol>

		<!-- Display the page data -->
		<slot />
	</div>
</AppShell>
