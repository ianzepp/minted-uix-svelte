<script lang="ts">
	import RecordList from '$lib/record-list.svelte';
    import type _ from 'lodash';

	/** @type {import('./$types').PageData} */
	export let data: _.Dictionary<any>;
</script>

<!-- Show the list of records -->
<RecordList schema={data.schema} record_list={data.record_list} />