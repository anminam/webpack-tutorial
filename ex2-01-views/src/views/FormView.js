import View from "./View";
import "./FormView.scss";
export default class FormView extends View {
  constructor(el) {
    super(el);
    this._inputEl = el.querySelector("[type=text]");
    this._resetEl = el.querySelector("[type=reset]");

    this.showResetButton(false);
    this.bindEvents();

    return this;
  }

  showResetButton(result = true) {
    this._resetEl.style.display = result ? "block" : "none";
  }

  bindEvents() {
    this.on("submit", (e) => {
      e.preventDefault();
    });

    this._inputEl.addEventListener("keyup", (e) => this.onKeyUp(e));
  }

  onKeyUp(e) {
    const KEYCODE_ENTER = 13;
    const inputValue = this._inputEl.value;
    const keyValue = e.keyCode;
    this.showResetButton(inputValue.length);

    if (!inputValue.length) this.emit("@reset");
    if (keyValue === KEYCODE_ENTER) return;
    this.emit("@submit", { input: inputValue });
  }
}
