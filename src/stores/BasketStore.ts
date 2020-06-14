import { RootStore } from "./index";
import { SubStore } from "./SubStore";
import { action, observable, autorun } from "mobx";

export interface IBasketItems {
  id: any;
  cost: number;
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

  @action increaseItem = (id: string, cost: number, count: number = 1) => {
    this.basketItems.push({ id: id, cost: cost });
  };

  @action deleteItem = (id: string) => {
    const index = this.basketItems.findIndex((item) => item.id === id);
    this.basketItems.splice(index, 1);
  };
}
