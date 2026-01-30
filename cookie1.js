let t = 25;
let gameOver = false;
let clickedCount = 0;
let timeoutId;
let cookieOut = document.getElementById("cookieOut");

window.addEventListener("DOMContentLoaded", () => {
  const timeText = document.querySelector("#time");
  const countText = document.querySelector("#count");
  countText.setAttribute('value', `Clicked : ${clickedCount}`)
  const gameOverText = document.querySelector("#gameover");

  const targets = document.querySelectorAll(".target");
  const wrongs = document.querySelectorAll(".wrong");

  // TIMER
  function countdown() {
    if (gameOver) return;

    timeText.setAttribute("value", `Time: ${t}`);
    t--;

    if (t < 0) {
      endGame("GAME OVER!!!!");
      if (gameOverText) gameOverText.setAttribute("value", "GAME OVER");
      return;
    }

    timeoutId = setTimeout(countdown, 1000);
  }

  countdown();

  // WRONG CLICKS
  cookieOut.addEventListener("click", () => {
    countText.setAttribute('value', `hii`);
  })

});

function endGame(message) {
  gameOver = true;
  clearTimeout(timeoutId);
  alert(message);
}