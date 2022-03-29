"use strict";

//1. Elementos que necesitamos del HTML

const selectElement = document.querySelector(".js_select");
const btn = document.querySelector(".js_btn");
const textResult = document.querySelector(".js_result");

//2. Declarar funciones y eventos

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function winOrLose() {
  const numAleat = getRandomNumber(6);
  const numSelect = parseInt(selectElement.value);

  if (numAleat === numSelect) {
    textResult.innerHTML = "Has ganado el doble de lo apostado :)";
  } else {
    textResult.innerHTML = "Has perdido lo apostado :(";
  }
}

function resultBalance() {}

function handleClickBtn(event) {
  event.preventDefault();

  resultBalance();
  winOrLose();
}

btn.addEventListener("click", handleClickBtn);
console.log(numAleat);
