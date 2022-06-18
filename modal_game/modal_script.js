"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnshowModal = document.querySelectorAll(".show-modal");

const OpenModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const CloseModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnshowModal.length; i++) {
  btnshowModal[i].addEventListener("click", function () {
    OpenModal();
  });
}

btnCloseModal.addEventListener("click", function () {
  CloseModal();
});

overlay.addEventListener("click", function () {
  CloseModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    // if (!modal.classList.contains("hidden")) {
    //   CloseModal();
    // }
    CloseModal();
  }
});
