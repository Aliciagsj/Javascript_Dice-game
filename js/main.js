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
  const balance = parseInt(balanceResult.innerHTML);
  if (
    inputBet.value !== "" &&
    parseInt(inputBet.value) <= balance &&
    numSelect !== 0
  ) {
    const bet = parseInt(inputBet.value);

    if (numAleat === numSelect) {
      textResult.innerHTML = "Has ganado el doble de lo apostado :)";
      balanceResult.innerHTML = balance + bet * 2;
    } else {
      textResult.innerHTML = "Has perdido lo apostado :(";
      balanceResult.innerHTML = balance - bet;
    }

    comprobarFinJuego();
  } else {
    textResult.innerHTML = "Introduce datos correctos";
  }
}

function comprobarFinJuego() {
  const balance = parseInt(balanceResult.innerHTML);

  if (balance <= 0 || balance >= 200) {
    btnReset.classList.remove("hidden");
    btn.classList.add("hidden");

    if (balance >= 200) {
      textResult.innerHTML = `Has ganado`;
    } else {
      textResult.innerHTML = `Ha ganado la maquina`;
    }
  }
}

function reiniciarJuego(event) {
  event.preventDefault();

  textResult.innerHTML = `Vamos a jugar`;
  balanceResult.innerHTML = `50`;
  selectElement.value = "0";
  inputBet.value = "";
  btnReset.classList.add("hidden");
  btn.classList.remove("hidden");
}

function handleClickBtn(event) {
  event.preventDefault();
  winOrLose();
}

btn.addEventListener("click", handleClickBtn);
btnReset.addEventListener("click", reiniciarJuego);
