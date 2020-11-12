export default class View {
  constructor(el) {
    if (!el) {
      throw el;
    }

    this.el = el;
    return this;
  }

  show() {
    this.el.style.display = "block";
  }
  hide() {
    this.el.style.display = "none";
  }
  on(event, callback) {
    this.el.addEventListener(event, callback);
    return this;
  }

  emit(event, data) {
    const eventObj = new CustomEvent(event, { detail: data });
    this.el.dispatchEvent(eventObj);

    return this;
  }
}
