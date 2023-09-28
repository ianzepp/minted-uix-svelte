import type { LayoutLoad } from './$types';

export const load = (async ({ fetch, params }) => {
    return {
        schema_name: params.schema,
        record_name: params.record,
    };
}) satisfies LayoutLoad;