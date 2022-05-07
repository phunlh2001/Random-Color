const color = document.getElementById("color");
const btn = document.getElementById("btn");

const randomCls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
  let hexCls = "#";

  for (let i = 0; i < 6; i++) {
    hexCls += randomCls[getHex()];
  }

  color.innerText = hexCls;
  document.body.style.background = hexCls;
});

function getHex() {
  return Math.floor(Math.random() * randomCls.length);
}
