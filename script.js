const img4 = document.querySelector(".img4");
const img4shvilebi = document.querySelector(".img4shvilebi");
const li2 = document.querySelector(".li2");
const li3 = document.querySelector(".li3");
const li4 = document.querySelector(".li4");
const div5shvili2 = document.querySelector(".div5shvili2");
const p10 = document.querySelector(".p10");
// console.dir(img4);
let imgs = [
  `./sell img/Rectangle Copy 1.png`,
  `./sell img/Rectangle Copy 2.png`,
  `./sell img/Rectangle Copy 3.png`,
  `./sell img/Rectangle Copy 4.png`,
];
// img4.attributes[0].value = "./sell img/Rectangle Copy 3.png"

imgs.map((i, index) => {
  let childimg = document.createElement("img");
  childimg.setAttribute("src", i);
  childimg.style.width = "88px";
  img4shvilebi.appendChild(childimg);

  childimg.addEventListener("click", () => {
    img4.attributes[0].value = i;
    let y = [...img4shvilebi.children];

    y.forEach((i) => (i.style.opacity = "1"));
    let x = index;
    childimg.style.opacity = x === index && "0.5";
  });
});

li4.addEventListener("click", () => {
  li3.innerText = Number(li3.innerText) + 1;
});
li2.addEventListener("click", () => {
  if (li3.innerText < 1) {
    li3.innerText = li3.innerText;
  } else {
    li3.innerText = Number(li3.innerText) - 1;
  }
});
div5shvili2.addEventListener("click", () => {
  if (li3.innerText > 0) {
    p10.innerText = li3.innerText;
  }
});

img4.addEventListener("click",() =>{

})