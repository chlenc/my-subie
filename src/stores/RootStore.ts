import {DataStore, HistoryStore} from "./index";

class RootStore {
    public dataStore: DataStore;
    public historyStore: HistoryStore;

    constructor(initState: any) {
        this.dataStore = new DataStore(
            this,
            initState && initState.dataStore ? initState.dataStore : null
        );
        this.historyStore = new HistoryStore(this)
    }

    public serialize = () => ({
        dataStore: {}
    });
}

export {RootStore};
