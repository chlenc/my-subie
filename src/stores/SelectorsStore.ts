import { RootStore } from "./index";
import { SubStore } from "./SubStore";
import { action, observable } from "mobx";

export class SelectorsStore extends SubStore {
  constructor(rootStore: RootStore, initState: any) {
    super(rootStore);
  }

  @observable selectedTags: string[] = [];
  @observable selectedModel: string = "";
  @observable selectedGen: string = "";

  @action addTag = (tag: string) => {
    // console.log("Added:", tag);
    if (this.selectedTags.indexOf(tag) == -1) {
      this.selectedTags = this.selectedTags.concat(tag);
      // console.log(this.selectedTags.toString());
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
  };
  @action deleteAllTags = () => {
    this.selectedTags = [];
  };
  @action selectModelAndGen = (model: string, gen: string) => {
    this.selectedModel = model;
    this.selectedGen = gen;
    return null
  };
  // @action selectAGen = (gen: string) => (this.selectedGen = gen);
}
