let Points = 0;
let playerName = "";
function startGame() {
    playerName = document.getElementById("nameInput").value.trim();
    if (!playerName) {
        alert("Enter a name!");
        return;
    }
    document.getElementById("playerName").innerText = playerName;
    document.getElementById("rules").style.display = "none";
    document.getElementById("game").style.display = "block";

function resetGame() {
    dalcoins = 0;
    clicks = 0;
    autoClicker = false;
    document.getElementById("game").style.display = "none";
    document.getElementById("rules").style.display = "block";
    document.getElementById("modMenu").style.display = "none";
    modMode = false;
    alert("Game reset!");
}

// Rename Player
function rename() {
    let newName = prompt("Enter new name:");
    if (newName) {
        playerName = newName;
        document.getElementById("playerName").innerText = playerName;
        if (playerName === "DALIUSBOYS") {
            modMode = true;
            document.getElementById("modMenu").style.display = "block";
        } else {
            modMode = false;
            document.getElementById("modMenu").style.display = "none";
        }
    }
}

// Toggle Dropdown Menu
function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
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
