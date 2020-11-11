import View from "./View";
export default class HistoryView extends View {
  constructor(el) {
    super(el);

    return this;
  }

  mount(list = []) {
    let html = "";
    list.forEach((item) => {
      html += `<li><div>${item.keyword}</div><div>${item.date}</div><li>`;
    });
    const ulEl = document.createElement("ul");
    ulEl.innerHTML = html;
    this.el.innerHTML = ulEl.outerHTML;
    this.show();
  }
}
