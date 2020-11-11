import View from "./View";
import listMaker from "../Utils/ListElementMaker";
export default class RecommendView extends View {
  constructor(el) {
    super(el);

    return this;
  }

  mount(list = []) {
    const ulEl = listMaker.make({ list, className: "recommend-list" });
    this.el.innerHTML = ulEl;

    this.show();
    this.bindItemClickEvent();
  }

  bindItemClickEvent() {
    this.el.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", (e) => this.onClickItem(e));
    });
  }

  onClickItem(e) {
    this.emit("@click", e.currentTarget.dataset.key);
  }
}
