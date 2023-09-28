<script lang="ts">
    // Library imports
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import { goto } from '$app/navigation';

    // Project imports
    import type _ from 'lodash';
    import type { Schema } from './system-meta';

    // Public interface
    export let schema: Schema;
    export let record_list: _.Dictionary<any>[];

    // Tab display
    let tabSet: number = 0;

    function selectedFn(event: CustomEvent) {
        goto(`/app/data/${ schema.name }/${ event.detail[0] }`)
    }
</script>

<div class="table-container">
    <table class="table table-hover">
        <thead>
            <tr>
                {#each schema.column_keys as column, i}
                <th>{column}</th>
                {/each}
            </tr>
        </thead>

        <tbody>
            {#each record_list as record, i}
            <tr id={record.data.id}>
                {#each schema.column_keys as column, i}
                {#if column === 'name'}
                <td><a href="/app/data/{schema.name}/{record.data.id}">{record.data[column]}</a></td>
                {:else}
                <td>{record.data[column]}</td>
                {/if}
                {/each}
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
        <pre class="pre">{ JSON.stringify(record_list, null, 2) }</pre>
		{/if}
	</svelte:fragment>
</TabGroup>
