import { System } from '$lib/system';
import type { PageLoad } from './$types';
import _ from 'lodash';

export const load = (async ({ params }) => {
    console.warn('load() /app/data/[schema]/[record');

    // Get the server API
    let system = await System.startup();

    // Load record data
    let schema = await system.meta.get(params.schema);
    let record = await system.data.select404(params.schema, params.record);

    return { schema, record };
}) satisfies PageLoad;