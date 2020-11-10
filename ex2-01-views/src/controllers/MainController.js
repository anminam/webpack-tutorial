import FormView from "../views/FormView";
import ResultView from "../views/ResultView";

import ResultModel from "../models/ResultModel";

export default class MainController {
  constructor() {
    const formViewEl = document.querySelector("form");
    const resultViewEl = document.querySelector("#search-result");

    this.formView = new FormView(formViewEl)
      .on("@submit", (e) => this.search(e.detail.input))
      .on("@reset", () => this.renderView());

    this.resultView = new ResultView(resultViewEl);
  }

  async search(query) {
    const list = await ResultModel.get();
    this.resultView.mount(list);
  }
  renderView() {
    // debugger;
  }
}
