"use strict";

//1. Elementos que necesitamos del HTML

const selectElement = document.querySelector(".js_select");
const btn = document.querySelector(".js_btn");
const textResult = document.querySelector(".js_result");
const balanceResult = document.querySelector(".js_balance");
const inputBet = document.querySelector(".js_bet");
const btnReset = document.querySelector(".js_resetbutton");

//2. Declarar funciones y eventos

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function winOrLose() {
  const numAleat = getRandomNumber(6);
  const numSelect = parseInt(selectElement.value);

  if (numAleat === numSelect) {
    textResult.innerHTML = "Has ganado el doble de lo apostado :)";
    resultBalance(true);
  } else {
    textResult.innerHTML = "Has perdido lo apostado :(";
    resultBalance(false);
  }
}

function resultBalance(win) {
  const bet = parseInt(inputBet.value);

  if (win) {
    balanceResult.innerHTML = parseInt(balanceResult.innerHTML) + bet * 2;
  } else {
    balanceResult.innerHTML = parseInt(balanceResult.innerHTML) - bet;
  }
}

function btnActive() {
  const reset = btnReset.innerHTML;

  if (balance <= 200) {
    reset.classList.add("hidden");
  } else {
    reset.classList.remove("hidden");
    textResult.classList.add("hidden");
  }
}

function handleClickBtn(event) {
  event.preventDefault();
  winOrLose();
  btnActive();
}

btn.addEventListener("click", handleClickBtn);
