import _ from 'lodash';
import { SystemData } from './system-data';
import { SystemMeta } from './system-meta';

// Define the server interface
export class System {
    // Singleton instance
    private static instance: System | undefined;

    public static async startup() {
        if (System.instance === undefined) {
            System.instance = new System();

            await System.instance.data.startup();
            await System.instance.meta.startup();
        }

        return System.instance;
    }

    // Subsystems
    public data = new SystemData(this);
    public meta = new SystemMeta(this);

    //
    // Helpers
    //

}