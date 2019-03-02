const hamburger = document.querySelector(".hamburger");
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal__close");
console.log(modal);
function openMenu(event) {
  modal.classList.add("show");
}
function closeMenu(event) {
  modal.classList.remove("show");
}
hamburger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
