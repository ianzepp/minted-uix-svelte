import _ from 'lodash';
import type { System } from "./system";
import type { RecordData, RecordFlat } from './system-data';

export enum SchemaName {
    Schema = 'system:schema',
    Column = 'system:column',
}

export interface Schema extends RecordFlat {}
export interface Column extends RecordFlat {}

export class Schema {
    // Basic properties
    readonly name: string;
    readonly metadata: boolean;

    // List of columns
    readonly columns: _.Dictionary<Column> = {};

    constructor(source: RecordData) {
        this.name = source.data.name;
        this.metadata = source.data.metadata;
    }

    get schema_name() {
        return this.name;
    }

    get column_keys() {
        return _.keys(this.columns);
    }
}

export class Column {
    // Basic properties
    readonly name: string;

    constructor(source: RecordData) {
        this.name = source.data.name;
    }

    get schema_name() {
        return _.head(this.name.split('#')) as string;
    }

    get column_name() {
        return _.last(this.name.split('#')) as string;
    }

}

export class SystemMeta {
    public readonly schemas: _.Dictionary<Schema> = {};

    constructor(private system: System) {}

    async startup() {
        // Process schemas
        for(let source of await this.system.data.selectAny(SchemaName.Schema)) {
            let schema = new Schema(source);
            
            // Assign
            this.schemas[schema.name] = schema;
        }

        // Process columns
        for(let source of await this.system.data.selectAny(SchemaName.Column)) {
            let column = new Column(source);

            // Assign
            let schema = this.schemas[column.schema_name];
            schema.columns[column.column_name] = column;
        }
    }

    async refresh() {

    }

    async cleanup() {

    }

    get(schema_name: string) {
        return this.schemas[schema_name];
    }
}
