import {RootStore} from "./index";
import {SubStore} from "./SubStore";
import {database} from "../utils/firebase";


interface IItem {
    title: string
    model: string
    gen: string
    tags: string[]
    weight: number
    price: number
    oldPrice?: number
    description: string
    attachments?: string[]
}

export class DataStore extends SubStore {

    constructor(rootStore: RootStore, initState: any) {
        super(rootStore);
    }

    addItem = async (item: IItem) => new Promise((resolve) =>
        database.ref('goods/').push(item, (error) => resolve(error))
    );
}


