import {RootStore} from "./index";
import {SubStore} from "./SubStore";
import {database} from "../utils/firebase";
import {action, observable} from "mobx";


export interface IItem {
    title: string
    model: string
    gen: string
    tags: string[]
    weight: number
    price: number
    oldPrice?: number
    stock: boolean
    description: string
    attachments?: string[]
    key?: string
}

export interface IBasketItems {
    id: string
    count: number
}

export class BasketStore extends SubStore {

    @observable goods: { [key: string]: IItem } = {};

    constructor(rootStore: RootStore, initState: any) {
        super(rootStore);
    }

    @observable basketItems: Array<IBasketItems> = [];
    @action increaseItem = (id: string, count: number = 1) => {}
    @action decreaseItem = (id: string, count: number = 1) => {}
}
