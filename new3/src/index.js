import "./index.css";
const sum = (a, b) => a + b;

const a = sum(1, 2);
const elSumed = document.querySelector(".sumed");
elSumed.innerText = a;
