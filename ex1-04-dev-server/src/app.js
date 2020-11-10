import model from "./models/model";
const elRoot = document.querySelector("#root");

elRoot.innerHTML = "asdfk";

const init = () => {
  update();
};

const update = async () => {
  const list = await model.get();

  let html = "";
  list.forEach((i) => {
    html += `<div>${i.keyword}</div>`;
  });

  elRoot.innerHTML = html;
};

init();
