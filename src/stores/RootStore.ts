import { DataStore } from "./index";
// import { BasketStore } from "./index";
import { BasketStore } from "./BasketStore";

class RootStore {
  public dataStore: DataStore;
  public basketStore: BasketStore;

  constructor(initState: any) {
    this.dataStore = new DataStore(
      this,
      initState && initState.dataStore ? initState.dataStore : null
    );
    this.basketStore = new BasketStore(
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
