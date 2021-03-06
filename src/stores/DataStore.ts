import { RootStore } from "./index";
import { SubStore } from "./SubStore";
import { database } from "../../src/utils/firebase";
import { action, observable } from "mobx";

export interface IItem {
  title: string;
  model: string;
  gen: string;
  tags: string[];
  weight: number;
  price: number;
  oldPrice?: number;
  stock: boolean;
  description: string;
  attachments?: string[];
  key: string;
  id: string;
}

// const isIItem = (item: Object): item is IItem => 'id' in item && (typeof (item as any).id) === 'string'

export class DataStore extends SubStore {
  @observable goods: { [key: string]: IItem } = {};

  constructor(rootStore: RootStore, initState: any) {
    super(rootStore);
    this.syncGoods();
  }

  @action syncGoods = async () => {
    database
      .ref("goods")
      .once("value")
      .then((snapshot) => {
        try {
          const goods = snapshot.val();
          this.goods = goods;
        } catch (e) {
          console.error(e);
        }
      })
      .catch((e) => console.error(e));
  };
}
