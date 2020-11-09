import model from "./model";
const alert = (msg) => window.alert(msg);

console.log(model);

const elApp = document.querySelector("#app");
update();

async function update() {
  const mo = await model.get();
  let html = "";
  mo.forEach((element) => {
    html += `<li>${element.keyword}</li>`;
  });
  elApp.innerHTML = `<ul>${html}</ul>`;
}
