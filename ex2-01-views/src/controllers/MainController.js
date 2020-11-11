import FormView from "../views/FormView";
import TabView from "../views//TabView";
import ResultView from "../views/ResultView";
import HistoryView from "../views/HistoryView";
import RecommendView from "../views/RecommendView";

import ResultModel from "../models/ResultModel";
import RequestHistory from "../models/ResultHistory";
import RequestRecommend from "../models/RequestRecommend";

export default class MainController {
  constructor() {
    const formViewEl = document.querySelector("form");
    const tabViewEl = document.querySelector(".tab-view");
    const resultViewEl = document.querySelector("#search-result");
    const resultRecommendEl = document.querySelector("#search-recommend");
    const resultHistoryEl = document.querySelector("#search-history");

    this.formView = new FormView(formViewEl)
      .on("@submit", (e) => this.search(e.detail.input))
      .on("@reset", () => this.renderView());

    this.resultView = new ResultView(resultViewEl);

    this.tabView = new TabView(tabViewEl).on("@change", (e) =>
      this.onChangeTab(e)
    );

    this.resultRecommendView = new RecommendView(resultRecommendEl).on(
      "@click",
      (e) => this.search(e.detail)
    );
    this.resultHistoryView = new HistoryView(resultHistoryEl);
    this.renderView();
  }

  async search(query) {
    this.formView.setValue(query);
    try {
      const list = await ResultModel.get();
      this.resultView.mount(list);
    } catch (error) {
      this.updateServerErrorMessage(error);
    }
    this.updateAfterSearch();
  }

  updateAfterSearch() {
    this.resultRecommendView.hide();
    this.resultHistoryView.hide();
  }

  updateServerErrorMessage(error) {
    debugger;
  }
  async renderView() {
    this.resultRecommendView.hide();
    this.resultHistoryView.hide();
    this.resultView.hide();
    if (this.selectedTabID === "recommend") {
      const data = await RequestRecommend.get();
      this.resultRecommendView.mount(data);
    } else {
      const data = await RequestHistory.get();
      this.resultHistoryView.mount(data);
    }
  }

  onChangeTab(event) {
    const id = event.detail;
    this.selectedTabID = id;
    this.renderView();
  }
}
