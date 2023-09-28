<script lang="ts">
	import RecordList from '$lib/record-list.svelte';

	/** @type {import('./$types').PageData} */
	export let data: _.Dictionary<any>;

	// Columns to render
	let column_keys = ['name', 'metadata'];
</script>

<h1>All Schemas</h1>

<div class="table-container">
    <table class="table table-hover">
        <thead>
            <tr>
                {#each column_keys as column, i}
                <th>{column}</th>
                {/each}
            </tr>
        </thead>

        <tbody>
            {#each data.record_list as record, i}
            <tr id={record.data.id}>
                {#each column_keys as column, i}
                {#if column === 'name'}
                <td><a href="/app/data/{record.data.name}">{record.data[column]}</a></td>
                {:else}
                <td>{record.data[column]}</td>
                {/if}
                {/each}
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<!-- Show the list of records
<RecordList schema={data.schema} record_list={data.record_list} /> -->