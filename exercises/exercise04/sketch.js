var particles = [];
var count_w = 0;
var count_h = 0;
var button = false;
// P5 calls this function once when the page is refreshed
function setup() {
  resizeCanvas(600, 600);

  // Create 200 particles and store them in a list
  for (var i = 0; i < 200; i++) {
    var p = new Particle(width/2, height/2);
    particles.push(p);
  }
}

// P5 calls this function at 'frameRate' frames per second

function draw() {
  background(0, 0, 0);
  if (mouseIsPressed){
    button= true;
  }

  // Loop sthrough each particle, and calls its draw function
  console.log(button)
  if (button){
  for (var i = 0; i < particles.length; i++) {
    particles[i].drawTheParticle();
/*    */
  }
}
  else {
    textSize(32);
    fill(102);
    text("PRESS ME", 1,1,width,height);

  }
}


// Class definition for a Particle that can update its position based on a
// random velocity, and draw itself with a random color.
function Particle(x, y) {
  this.x = x;
  this.y = y;
  //this.count_w = count_w;
  //this.count_h = count_h;
  this.velX = random(-2, 2);
  this.velY = random(-2, 2);


  this.r = random(0,255);
  this.g = random(0,255);
  this.b = random(0,255);

  // The function updates the position, and draws the ellipse using p5
  this.drawTheParticle = function() {
    //Apply gravity (which is the rate of change of the Y velocity)


    // Apply velocity to the position
    this.x += this.velX;
    this.y += this.velY;

    // If we have moved off the screen, reverse the veloctity
    if (this.x > width || this.x < 0) {
      this.velX *= -1;
      this.velY *= -1;
      this.count_w =+1 ;
    }
    if (this.y > height || this.y < 0) {
      this.velX *= -1;
      this.velY *= -1;
      this.count_h =+1 ;
    }
    if (int(dist(this.x,this.y,width/2,height/2))<1 && this.count_w !=0) {
      this.velX = 0;
      this.velY = 0;
    }
    if (int(dist(this.x,this.y,width/2,height/2))<1 && this.count_h !=0) {
      this.velX = 0;
      this.velY = 0;
    }
    /*
    if (this.x == width/2 && this.count_w != 0){
          this.velX = 0;
          this.velY = 0;
        }
    if (this.y == height/2 && this.count_h != 0){
          this.velX = 0;
          this.velY = 0;
        }
    */
    // if bounced once and returned to middle, stop

    // Set the inside color of the circle
    fill( 255, 255, 255);
    // Set the border color of the circle
    stroke(0, 40, 63);
    // Set the width of the border
    strokeWeight(1);
    // Finally, draw the circle on the canvas
    ellipse(this.x, this.y, 10, 10);
  }
}
