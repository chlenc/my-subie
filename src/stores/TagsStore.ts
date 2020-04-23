import { RootStore } from "./index";
import { SubStore } from "./SubStore";
// import { database } from "../utils/firebase";
import { action, observable } from "mobx";

export class TagsStore extends SubStore {
  constructor(rootStore: RootStore, initState: any) {
    super(rootStore);
  }

  @observable selectedTags: string[] = localStorage.getItem('selectedTags')!.split(',') || [];

  @action addTag = (tag: string) => {
    console.log("Added:", tag);
    if (this.selectedTags.indexOf(tag) == -1) {
      this.selectedTags = this.selectedTags.concat(tag);
      localStorage.setItem("selectedTags", this.selectedTags.toString());
      console.log(this.selectedTags.toString());
    }
  };
  @action deleteTag = (tag: string) => {
    const N = this.selectedTags.length;
    const newArr: string[] = [];
    for (let i = 0; i <= N - 1; i++) {
      if (this.selectedTags[i] !== tag) {
        newArr.push(this.selectedTags[i]);
      }
    }
    this.selectedTags = newArr;
    localStorage.setItem("selectedTags", this.selectedTags.toString());
  };
  @action deleteAllTags = () => {
    this.selectedTags = [];
    localStorage.removeItem('selectedTags')
  };
}
