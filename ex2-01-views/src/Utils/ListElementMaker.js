export default {
  make({ list = [], className = "" }) {
    const ul = document.createElement("ul");
    if (className) {
      ul.classList.add(className);
    }
    let html = "";
    list.forEach((i) => {
      html += `<li data-key=${i.keyword}>${i.keyword}</li>`;
    });
    ul.innerHTML = html;
    return ul.outerHTML;
  },
};
