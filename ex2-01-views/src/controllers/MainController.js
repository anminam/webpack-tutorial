import FormView from "../views/FormView";
import SearchModel from "../models/SearchModel";
import SearchView from "../views/ResultView";
export default class MainController {
  constructor() {
    this.formViewEl = document.querySelector(".form-view");
    this.searchViewEl = document.querySelector(".search-result");
    this.formView = new FormView(this.formViewEl).on("@keyup", (e) => {
      this.startSearch(e.detail);
    });

    this.searchView = new SearchView(this.searchViewEl);
  }

  async startSearch(keyword) {
    const result = await SearchModel.get();
    const { data } = result;
    this.searchView.mount(data);
  }
}
