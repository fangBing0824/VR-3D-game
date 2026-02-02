window.addEventListener('DOMContentLoaded', function() {
    console.log("Game script starting...");
    
    let t = 25;
    let gameOver = false;
    let clickedCount = 0;
    let timeoutId;
    let brownButtonsClicked = 0;

    // Get display elements
    const timeDisplay = document.getElementById('time-display');
    const countDisplay = document.getElementById('count-display');
    const statusDisplay = document.getElementById('status-display');

    console.log("Elements found:", {
        timeDisplay: !!timeDisplay,
        countDisplay: !!countDisplay,
        statusDisplay: !!statusDisplay
    });

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
    const allButtons = document.querySelectorAll('.pixel-grid button');
    const brownButtons = [];
    
    allButtons.forEach((button) => {
        if (button.style.backgroundColor === 'brown') {
            brownButtons.push(button);
        }
    });

    const totalBrownButtons = brownButtons.length;
    console.log("Total brown target buttons:", totalBrownButtons);

    if (statusDisplay) {
        statusDisplay.textContent = `Find ${totalBrownButtons} brown cookies!`;
    }

    // 给每个棕色按钮添加点击事件
    brownButtons.forEach((button, index) => {
        button.addEventListener("click", function(e) {
            console.log("Brown button clicked:", index);
            if (gameOver) return;
            
            // 如果这个按钮还没被点击过（还是棕色）
            if (this.style.backgroundColor === 'brown') {
                // 变成白色
                this.style.backgroundColor = 'white';
                brownButtonsClicked++;
                clickedCount++;
                
                console.log(`Progress: ${brownButtonsClicked}/${totalBrownButtons}`);
                
                if (countDisplay) {
                    countDisplay.textContent = `Progress: ${brownButtonsClicked}/${totalBrownButtons}`;
                }
                
                // 检查是否全部点击完
                if (brownButtonsClicked === totalBrownButtons) {
                    endGame(`🎉 YOU WIN! Time left: ${t}s, Total clicks: ${clickedCount}`);
                }
            }
        });
    });

    // COOKIE OUT BUTTONS - Lose condition (红色按钮)
    const cookieOuts = document.querySelectorAll(".cookieOut");
    console.log("CookieOut buttons (red) found:", cookieOuts.length);
    
    cookieOuts.forEach((button, index) => {
        button.addEventListener("click", function(e) {
            console.log("CookieOut button clicked:", index);
            if (gameOver) return;
            clickedCount++;
            endGame("❌ You clicked outside the cookie! GAME OVER!");
        });
    });

    // Start the game
    console.log("Starting countdown...");
    countdown();
});