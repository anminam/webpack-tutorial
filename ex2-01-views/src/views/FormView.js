import View from "../views/View";
import "./FormView.scss";
export default class FormView extends View {
  constructor(el) {
    super(el);

    this._inputEl = this.el.querySelector(".search-form__input");
    this._resetEl = this.el.querySelector(".search-form__reset");

    this.bindEvent();

    return this;
  }

  bindEvent() {
    this.el.addEventListener("submit", (e) => {
      e.preventDefault();

      this.emit("@submit", this._inputEl.value);
    });
    this._inputEl.addEventListener("keyup", (e) => this.onInputKeyup(e));
    this._resetEl.addEventListener("reset", (e) => this.onReset());
  }
  onInputKeyup(e) {
    const { keyCode } = e;
    this.emit("@keyup", this.getInputValue());
  }
  getInputValue() {
    return this._inputEl.value;
  }
  onReset() {}
}
