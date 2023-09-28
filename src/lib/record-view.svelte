<script lang="ts">
	// Library imports
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import { goto } from '$app/navigation';

	// Project imports
    import type { Schema } from './system-meta';

    // Exports
    export let schema: Schema;
    export let record: _.Dictionary<any>;

    // Footer tabs
    let tabSet: number = 0;

    // function selectedFn(event: CustomEvent) {
    //     goto(`/app/data/${ schema_name }/${ event.detail[0] }`)
    // }
</script>

<div class="table-container">
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Data</th>
            </tr>
        </thead>

        <tbody>
            {#each schema.column_keys as column, i}
            <tr>
                <td>{column}</td>
                <td>{record.data[column]}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<TabGroup>
    <Tab bind:group={tabSet} name="tab1" value={0}>Feed</Tab>
    <Tab bind:group={tabSet} name="tab1" value={1}>JSON</Tab>

	<svelte:fragment slot="panel">
		{#if tabSet === 0}
        <div>No feed data</div>
        {:else if tabSet === 1}
        <pre class="pre">{ JSON.stringify(record, null, 2) }</pre>
		{/if}
	</svelte:fragment>
</TabGroup>
