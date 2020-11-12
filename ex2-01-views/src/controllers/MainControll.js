import FormView from "../views/FormView";
import SearchModel from "../models/SearchModel";
export default class MainControll {
  constructor() {
    this.formViewEl = document.querySelector(".search-form");
    this.formView = new FormView(this.formViewEl)
      .on("@submit", () => {
        debugger;
      })
      .on("@keyup", (e) => {
        this.startSearch(e.detail);
      });
  }

  startSearch(keyword) {
    if (!keyword) return;
    const data = SearchModel.get();
  }
}
