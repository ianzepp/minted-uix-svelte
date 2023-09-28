import { System } from '$lib/system';
import type { PageLoad } from './$types';
import _ from 'lodash';
import { SchemaName } from '$lib/system-meta';

export const load = (async ({ fetch, params }) => {
    // Get the server API
    let system = await System.startup();

    // Get the server API
    let schema = await system.meta.get(SchemaName.Schema);
    let record_list = await system.data.selectAny(SchemaName.Schema);

    // Done
    return { system, schema, record_list };
}) satisfies PageLoad;