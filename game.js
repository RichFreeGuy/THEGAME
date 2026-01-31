function startGame() {
    playerName = document.getElementById("nameInput").value.trim();
    if (!playerName) {
        alert("Enter a name!");
        return;
    }
    document.getElementById("playerName").innerText = playerName;
    document.getElementById("rules").style.display = "none";
    document.getElementById("game").style.display = "block";


function draw() {
if (keyDown(up) {
  Jimbo.velocityY = -2;
}
if (keyDown(down) {
  Jimbo.velocityY = 2;
}
if (keyDown(left) {
  Jimbo.velocityX = -2;
}
if (keyDown(right) {
  Jimbo.velocityX = 2;
}
function buyUpgrade(type) {
    if (type === 1 && Points >= 5) {
        Points -= 5;
        alert("You bought Spead!");
        if (keyDown(up) {
          Jimbo.velocityY = -3;
        }
        if (keyDown(down) {
          Jimbo.velocityY = 3;
        }
        if (keyDown(left) {
          Jimbo.velocityX = -3;
        }
        if (keyDown(right) {
          Jimbo.velocityX = 3;
        }
    } else {
        alert("Not enough Points!");
    }
    updateUI();
}
}  
  
  
  

  animateSprite();  
}
