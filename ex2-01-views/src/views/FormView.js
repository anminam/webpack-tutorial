import View from "./View";
export default class FormView extends View {
  constructor(el) {
    super(el);

    this._inputEl = el.querySelector("input");

    this._inputEl.addEventListener("keyup", (e) => {
      this.onKeyup();
    });
  }

  onKeyup() {
    const value = this._inputEl.value;
    this.emit("@keyup", value);
  }
}
