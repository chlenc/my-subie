import { RootStore } from "./index";
import { SubStore } from "./SubStore";

export class DataStore extends SubStore {

  constructor(rootStore: RootStore, initState: any) {
    super(rootStore);

    if (initState) {
    }

  }
}
