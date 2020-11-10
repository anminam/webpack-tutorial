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
    html += `<li>${i.keyword}</li>`;
  });

  elRoot.innerHTML = html;
};

init();
