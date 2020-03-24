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
    description: string
    attachments?: string[]
    key?: string
}

export class DataStore extends SubStore {

    @observable goods: { [key: string]: IItem } = {};

    constructor(rootStore: RootStore, initState: any) {
        super(rootStore);
        this.syncGoods()
    }

    @action syncGoods = async () => {
        database.ref('goods').once('value').then((snapshot) => {
            const goods = snapshot.val();
            this.goods = goods
        });
    }

    addItem = async (item: IItem) => new Promise(async (resolve) => {
        database.ref('goods/').push(item, (error) => resolve(error))
        await this.syncGoods()
    });
    updateItem = async (id: string, item: IItem) => new Promise(async (resolve) => {
        database.ref(`goods/${id}`).update(item, (error) => resolve(error))
        await this.syncGoods()
    });

    removeItem = async (id: string) => new Promise(async (resolve) => {
        database.ref(`goods/${id}`).remove((error) => resolve(error))
        await this.syncGoods()
    });
}


