"use strict";

const imagesEl = document.querySelectorAll(".img");
const iconsEl = document.querySelectorAll(".icon");
const feedbacksEl = document.querySelectorAll(".feedback-container");
iconsEl.forEach((el) =>
  el.addEventListener("click", function (e) {
    imagesEl.forEach((el) => {
      el.classList.toggle("active");
      el.classList.toggle("inactive");
    });
    feedbacksEl.forEach((el) => {
      el.classList.toggle("visible-review");
      el.classList.toggle("hidden-review");
    });
  })
);
