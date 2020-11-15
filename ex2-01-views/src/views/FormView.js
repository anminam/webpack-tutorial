import View from "./View";
import "./FormView.scss";
export default class FormView extends View {
  constructor(el) {
    super(el);

    this._inputEl = el.querySelector("input");

    this._inputEl.addEventListener("keyup", (e) => {
      this.onKeyup();
    });
    this.on("submit", (e) => {
      e.preventDefault();
    });
  }

  onKeyup() {
    const value = this._inputEl.value;
    this.emit("@keyup", value);
  }
}
