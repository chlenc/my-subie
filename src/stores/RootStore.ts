import { DataStore } from "./index";
import { BasketStore } from "./BasketStore";
import { SelectorsStore } from "./SelectorsStore";
import HistoryStore from "./HistoryStore";

class RootStore {
  public dataStore: DataStore;
  public basketStore: BasketStore;
  public selectorsStore: SelectorsStore;
  public historyStore: HistoryStore;

  constructor(initState: any) {
    this.dataStore = new DataStore(
      this,
      initState && initState.dataStore ? initState.dataStore : null
    );
    this.basketStore = new BasketStore(
      this,
      initState && initState.dataStore ? initState.dataStore : null
    );
    this.selectorsStore = new SelectorsStore(
      this,
      initState && initState.dataStore ? initState.dataStore : null
    );
    this.historyStore = new HistoryStore(this)
  }

  public serialize = () => ({
    dataStore: {},
  });
}

export { RootStore };
