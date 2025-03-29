"use strict";
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

slider.addEventListener("input", () => {
  sliderValue.textContent = `${slider.value}%`;
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".form__select");
  const selected = document.querySelector(".form__select-main");
  const options = document.querySelectorAll(".form__select-option");
  const hiddenInput = document.querySelector("#selected-system");

  if (!hiddenInput) {
    console.error("Скрытый инпут #selected-system не найден!");
    return;
  }

  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      setTimeout(() => {
        options.forEach((opt) => opt.classList.remove("active"));
        selected.firstChild.textContent = option.textContent;
        hiddenInput.value = option.getAttribute("data-value");
        option.classList.add("active");
        dropdown.classList.remove("open");
      }, 0);
    });
  });
});

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const formObject = Object.fromEntries(formData.entries());

  console.log("Форма отправлена:", formObject);

  this.reset();

  const selectMain = document.querySelector(".form__select-main");
  if (selectMain) {
    selectMain.textContent = "Выберите тип системы";
  }

  const slider = document.getElementById("slider");
  if (slider) {
    slider.value = 50;
    document.getElementById("slider-value").textContent = "50%";
  }
});

const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});
