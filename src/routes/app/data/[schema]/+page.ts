import { getContext } from 'svelte';
import { System } from '$lib/system';
import type { PageLoad } from './$types';
import _ from 'lodash';

export const load = (async ({ fetch, params }) => {
    console.warn('load() /app/data/[schema]');

    // Get the server API
    let system = await System.startup();

    // Load record data
    let schema = await system.meta.get(params.schema);
    let record_list = await system.data.selectAny(params.schema);

    // Done
    return { schema, record_list };
}) satisfies PageLoad;