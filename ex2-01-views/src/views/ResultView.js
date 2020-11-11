import View from "../views/View";
import "./ResultView.scss";
import noImage from "../images/default-image.jpg";
export default class ResultView extends View {
  constructor(el) {
    super(el);
  }

  mount(list = []) {
    let html = "";

    const ulEl = document.createElement("ul");

    list.forEach((item) => {
      html += this.getItemToListItemElement(item);
    });
    ulEl.innerHTML = html;
    this.el.innerHTML = ulEl.outerHTML;

    this.show();
  }

  getItemToListItemElement(item) {
    return `<li data-id=${item.id}><h3>${item.name}</h3><img src=${item.image} onerror="this.src='${noImage}'" /></li>`;
  }
}
