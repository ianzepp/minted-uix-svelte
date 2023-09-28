<script lang="ts">
	import RecordView from '$lib/record-view.svelte';
    import type _ from 'lodash';

	/** @type {import('./$types').PageData} */
	export let data: _.Dictionary<any>;
</script>

<!-- Show the record view -->
<RecordView schema={data.schema} record={data.record} />