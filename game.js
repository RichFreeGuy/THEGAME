function draw() {
  background("blue");
  let currentFrame = 0;
  const totalFrames = 4; // Total number of frames
  const spriteElement = document.getElementById('sprite');
  
  function animateSprite() {
      currentFrame = (currentFrame + 1) % totalFrames;
      spriteElement.style.backgroundPosition = `-${currentFrame * 20}px 0`;
      requestAnimationFrame(animateSprite);
  }
  
  
  
  
  if (keyDown(up)) {
    sprite.velocityY = -2;
  }
  if (keyDown(down)) {
    sprite.velocityY = 2;
  }
  if (keyDown(left)) {
    sprite.velocityX = -2;
  }
  if (keyDown(right)) {
    sprite.velocityX = 2;
  }
  animateSprite();  
}
