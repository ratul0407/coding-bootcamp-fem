"use strict";

const imagesEl = document.querySelectorAll(".img");
const buttonsEl = document.querySelectorAll("button");
const feedbacksEl = document.querySelectorAll(".feedback-container");
buttonsEl.forEach((el) =>
  el.addEventListener("click", function (e) {
    console.log("I was clicked");
    imagesEl.forEach((el) => {
      el.classList.toggle("active");
      el.classList.toggle("inactive");
    });
    feedbacksEl.forEach((el) => {
      el.classList.toggle("visible-review");
      el.classList.toggle("invisible");
      el.classList.toggle("visible");
      el.classList.toggle("hidden-review");
    });
  })
);
