import { DataStore } from "./index";
import { BasketStore } from "./BasketStore";
import { TagsStore } from "./TagsStore";

class RootStore {
  public dataStore: DataStore;
  public basketStore: BasketStore;
  public tagsStore: TagsStore;

  constructor(initState: any) {
    this.dataStore = new DataStore(
      this,
      initState && initState.dataStore ? initState.dataStore : null
    );
    this.basketStore = new BasketStore(
      this,
      initState && initState.dataStore ? initState.dataStore : null
    );
    this.tagsStore = new TagsStore(
      this,
      initState && initState.dataStore ? initState.dataStore : null
    );
  }

  public serialize = () => ({
    dataStore: {
    }
  });
}

export { RootStore };
