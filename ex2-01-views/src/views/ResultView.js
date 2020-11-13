import View from "./View";
import "./ResultView.scss";
import NoImage from "../images/default-image.jpg";
export default class ResultView extends View {
  constructor(el) {
    super(el);

    return this;
  }

  mount(list = []) {
    let html = "";
    list.forEach((i) => {
      html += `<li data-item-id="${i.id}"><div class="item"><p>${i.name}</p><img src="${i.image}" onerror="this.src='${NoImage}'" /></div></li>`;
    });

    const ulEl = document.createElement("ul");
    ulEl.innerHTML = html;
    this.el.innerHTML = ulEl.outerHTML;
    this.show();
  }
}
