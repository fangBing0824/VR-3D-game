window.addEventListener('DOMContentLoaded', function() {
    console.log("Game script starting...");
    
    let t = 20;
    let gameOver = false;
    let clickedCount = 0;
    let timeoutId;
    let brownButtonsClicked = 0;

    
    let timeDisplay = document.getElementById('time-display');
    let countDisplay = document.getElementById('count-display');
    let statusDisplay = document.getElementById('status-display');

    // Timer function
    function countdown() {
        if (gameOver) return;

        if (timeDisplay) {
            timeDisplay.textContent = `Time: ${t}`;
        }
        t--;

        if (t < 0) {
            endGame("TIME'S UP! GAME OVER!");
            return;
        }

        timeoutId = setTimeout(countdown, 1000);
    }

    // End game function
    function endGame(message) {
        gameOver = true;
        clearTimeout(timeoutId);
        if (statusDisplay) {
            statusDisplay.textContent = message;
            statusDisplay.style.color = message.includes("WIN") ? "green" : "red";
            statusDisplay.style.fontWeight = "bold";
        }
        alert(message);
    }

    //target buttons
    let allButtons = document.querySelectorAll('.pixel-grid button');
    let brownButtons = [];
    
    allButtons.forEach((button) => {
        if (button.style.backgroundColor === 'rgb(184, 116, 34)') {
            brownButtons.push(button);
        }
    });

    let totalBrownButtons = brownButtons.length;
    // console.log("Total brown target buttons:", totalBrownButtons);

    if (statusDisplay) {
        statusDisplay.textContent = `Find ${totalBrownButtons} brown cookies!`;
    }

    
    brownButtons.forEach((button, index) => {
        button.addEventListener("click", function(e) {
            //console.log("Brown button clicked:", index);
            if (gameOver) return;
            
            
            if (this.style.backgroundColor === 'rgb(184, 116, 34)') {
                
                this.style.backgroundColor = 'white';
                brownButtonsClicked++;
                clickedCount++;
                
                console.log(`Progress: ${brownButtonsClicked}/${totalBrownButtons}`);
                
                if (countDisplay) {
                    countDisplay.textContent = `Progress: ${brownButtonsClicked}/${totalBrownButtons}`;
                }
                
                
                if (brownButtonsClicked === totalBrownButtons) {
                    endGame(`🎉 YOU WIN! Time left: ${t}s, Total clicks: ${clickedCount}`);
                    
                }
            }
        });
    });

    // COOKIE OUT BUTTONS 
    let cookieOuts = document.querySelectorAll(".cookieOut");
    //console.log("CookieOut buttons (red) found:", cookieOuts.length);
    
    cookieOuts.forEach((button, index) => {
        button.addEventListener("click", function(e) {
            console.log("CookieOut button clicked:", index);
            if (gameOver) return;
            clickedCount++;
            endGame("❌ You Break The Shape! GAME OVER! You Die!");
        });
    });

    // Start the game
    // console.log("Starting countdown...");
    countdown();
});