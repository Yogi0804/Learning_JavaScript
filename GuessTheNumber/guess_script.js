"use strict";

const GetNumber = function () {
  return Math.ceil(Math.random() * 20);
};
const DecreaseScore = (score) => {
  if (score != 0) {
    score--;
    document.querySelector(".score").textContent = `${score}`;
  }
  return score;
};
const IncreaseScore = (score, highest_score) => {
  score++;
  document.querySelector(".score").textContent = `${score}`;
  return score;
};

const GetHighScore = function (score, highest_score) {
  if (highest_score < score) {
    highest_score = score;
    document.querySelector(".highscore").textContent = `${highest_score}`;
  }
  return highest_score;
};

const number = GetNumber();
console.log(number);
let highest_score = 0;
let score = 20;

const Game = function () {
  let field = document
    .querySelector(".check")
    .addEventListener("click", function () {
      const guess = Number(document.querySelector(".guess").value);
      if (!guess) {
        document.querySelector(".message").textContent = "No Number!";
      } else if (guess < number) {
        document.querySelector(".message").textContent = "it's Higher";
        score = DecreaseScore(score);
      } else if (guess > number) {
        document.querySelector(".message").textContent = "it's Lower";
        score = DecreaseScore(score);
      } else {
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".message").textContent = "Correct";
        document.querySelector(".number").textContent = `${number}`;
        score = IncreaseScore(score);
        highest_score = GetHighScore(score, highest_score);
        sessionStorage.setItem("autosave", highest_score);
      }
    });

  document.querySelector(".again").addEventListener("click", function () {
    document.location.reload(true);
  });
};

Game();

let cache_highest_value = sessionStorage.getItem("autosave");
highest_score = GetHighScore(cache_highest_value, highest_score);
