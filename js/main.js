const snbBtn = document.querySelector("#snb .btn-menu");
const subMenu = document.querySelector("#snb .sub-menu");

snbBtn.addEventListener("click", function () {
  if (subMenu.classList.contains("hide")) {
    subMenu.classList.remove("hide");
    return;
  }
  subMenu.classList.add("hide");
});

const cursor = document.getElementById("circle");
let posX = 0;
let posY = 0;

document.addEventListener("DOMContentLoaded", () => {
  document.body.onmousemove = function (e) {
    posX = e.clientX + "px";
    posY = e.clientY + "px";

    cursor.style.left = posX;
    cursor.style.top = posY;
  };
});
