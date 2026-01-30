let t = 25;
let gameOver = false;
let clickedCount = 0;
let timeoutId;
let cookieOut = document.getElementById("cookieOut");

window.addEventListener("DOMContentLoaded", () => {
  const timeText = document.querySelector("#time");
  const countText = document.querySelector("#count");
  countText = inneHTml
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

  // CORRECT CLICKS
  targets.forEach(button => {
    button.addEventListener("click", () => {
      if (gameOver) return;
      if (button.dataset.clicked) return;

      button.dataset.clicked = "true";
      button.style.backgroundColor = "white";

      clickedCount++;
      countText.setAttribute("value", `Clicked: ${clickedCount}`);

      if (clickedCount === targets.length) {
        endGame("🎉 YOU WIN!");
      }
    });
  });

  // WRONG CLICKS
  wrongs.forEach(button => {
    button.addEventListener("click", () => {
      if (!gameOver) {
        endGame("❌ WRONG BUTTON!");
      }
    });
  });
});

function endGame(message) {
  gameOver = true;
  clearTimeout(timeoutId);
  alert(message);
}