import _ from 'lodash';
import type { System } from "./system";

export interface RecordFlat extends _.Dictionary<any> {}

export interface RecordData {
    data: RecordFlat;
    meta: RecordFlat;
}

export interface FilterData {
    where?: _.Dictionary<any>;
    order?: _.Dictionary<any>;
    limit?: number;
}

export class SystemData {
    constructor(private system: System) {}

    async startup() {

    }

    async refresh() {
        
    }

    async cleanup() {

    }

    async fetch(input: RequestInfo | URL, init?: RequestInit | undefined) {
        return fetch(`${import.meta.env.VITE_API_SERVER}/api/data/${ input }`, init || {
            // Defaults?
        }).then(res => res.json()).then(envelope => envelope.result);
    }

    async selectAny(schema_name: string, filter: FilterData = {}): Promise<RecordData[]> {
        return this.fetch(`${schema_name}`);
    }

    async select404(schema_name: string, record_name: string): Promise<RecordData> {
        return this.fetch(`${schema_name}/${record_name}`);
    }

    //
    // Helpers
    //

    toFlat(list: RecordData[]) {
        return _.map(list, r => _.assign({}, r.data, r.meta));
    }
}
