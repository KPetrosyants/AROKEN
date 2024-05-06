const btn = document.querySelector(".button");
const popup = document.querySelector(".popup");
const body = document.body;

function popupOpen() {
  popup.classList.add("popup-active");
  body.classList.add("hiden");
}

function popupClose() {
  popup.classList.remove("popup-active");
  body.classList.remove("hiden");
}

btn.addEventListener("click", popupOpen);

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup") || e.target.classList.contains("popup__btn-clouse")) {
    popupClose();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && popup.classList.contains("popup-active")) {
    popupClose();
  }
});
