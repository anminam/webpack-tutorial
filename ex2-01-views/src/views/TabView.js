import View from "./View";
import "./TabView.scss";
export default class TabView extends View {
  constructor(el) {
    super(el);

    this.mount();
    this.bindEvent();
  }

  bindEvent() {
    const list = this.el.querySelectorAll(".tabs li");
    list.forEach((item) => {
      item.addEventListener("click", () => this.onClickItem(item.id));
    });
  }

  onClickItem(id) {
    this.emit("@change", id);
  }

  mount() {
    this.el.innerHTML = `<ul class="tabs">
        <li id="recommend"><p class="title">추천 검색어</p></li>
        <li id="history"><p class="title">최근 검색어</p></li>
        </ul>
    `;
  }
}
