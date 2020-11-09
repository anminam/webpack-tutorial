const sum = (a, b) => a + b;
const elSumed = document.querySelector(".sumed");
const a = sum(1, 2);
console.log(a);
// 더하기
elSumed.innerHTML = a;
