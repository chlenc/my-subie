import { RootStore } from "./index";
import { SubStore } from "./SubStore";
import { database } from "../utils/firebase";
import { action, observable, autorun } from "mobx";

export interface IBasketItems {
  id: any;
  count: number;
}

export class BasketStore extends SubStore {
  constructor(rootStore: RootStore, initState: any) {
    super(rootStore);
  }

  @observable basketItems: Array<IBasketItems> =
    JSON.parse(localStorage.getItem("basket")!) || [];

  autoUpdate = autorun(() => {
    localStorage.setItem("basket", JSON.stringify(this.basketItems));
  });

  @action increaseItem = (id: string, count: number = 1) => {
    this.basketItems.filter((item) => item.id == id).length == 0
      ? this.basketItems.push({ id: id, count: count })
      : this.basketItems.map((item) => {
          if (item.id == id) item.count += count;
        });
  };
  @action decreaseItem = (id: string, count: number = 1) => {
    if (this.basketItems.filter((item) => item.id == id).length != 0) {
      this.basketItems.map((item) => {
        if (item.id == id) item.count -= count;
        if (item.count <= 0) item.count = 0;
      });
    }
  };
  @action deleteItem = (id: string) => {
    const index = this.basketItems.findIndex((item) => item.id === id);
    this.basketItems.splice(index, 1);
  };
}
