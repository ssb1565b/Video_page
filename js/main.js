const snbBtn = document.querySelector("#snb .btn-menu");
const subMenu = document.querySelector("#snb .sub-menu");

snbBtn.addEventListener("click", function () {
  if (subMenu.classList.contains("hide")) {
    subMenu.classList.remove("hide");
    return;
  }
  subMenu.classList.add("hide");
});
