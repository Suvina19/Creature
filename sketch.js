let creature;
let button1;

function setup() {
  createCanvas(600, 400);

  let posX = random(width);
  let posY = random(height);

  // Create a new instance of the Creature class
  creature = new Creature(posX, posY, 50);

  // Create a "Party mode" button and set its position and click event
  button1 = createButton('Party mode');
  button1.position(450, 350);
  button1.mousePressed(changeColors);
}

function draw() {
  // Set the background color to the creature's background color
  background(creature.backgroundColor);

  // Call the move method of the creature to update its position
  creature.move();

  // Check for key presses to control creature movement
  // Move right if the RIGHT_ARROW key is pressed
  if (keyIsDown(RIGHT_ARROW)) {
    creature.moveRight();
  }

  // Move up if the UP_ARROW key is pressed
  if (keyIsDown(UP_ARROW)) {
    creature.moveUp();
  }

  // Move left if the LEFT_ARROW key is pressed
  if (keyIsDown(LEFT_ARROW)) {
    creature.moveLeft();
  }

  // Move down if the DOWN_ARROW key is pressed
  if (keyIsDown(DOWN_ARROW)) {
    creature.moveDown();
  }

  // Call the display method to draw the creature
  creature.display();
}

// Function to change colors when the "Party mode" button is clicked
function changeColors() {
  creature.changeColor();
  creature.changeBackgroundColor();
}

// class for the Creature
class Creature {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.eyeSize = 10;
    this.color = color(255, 255, 255);
    this.backgroundColor = color(220);
  }

  // To update the creature's position with random movements
  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
    this.x = constrain(this.x, 0, width - 5);
    this.y = constrain(this.y, 0, height - 5);
  }

  // to move the creature to the right
  moveRight() {
    this.x += 2;
  }

  // To move the creature upward
  moveUp() {
    this.y -= 2;
  }

  // to move the creature to the left
  moveLeft() {
    this.x -= 2;
  }

  // To move the creature downward
  moveDown() {
    this.y += 2;
  }

  // Method to set the creature's position to random coordinates
  randomMove() {
    this.x = random(width);
    this.y = random(height);
  }

  // Method to draw the creature
  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius);
    fill(0);
    ellipse(this.x - 10, this.y - 10, this.eyeSize);
    ellipse(this.x + 10, this.y - 10, this.eyeSize);
    arc(this.x, this.y + 5, 10, 10, 0, PI, CHORD);

    fill(this.color);
    triangle(this.x - 20, this.y - 20, this.x - 15, this.y - 30, this.x - 10, this.y - 20);
    triangle(this.x + 20, this.y - 20, this.x + 15, this.y - 30, this.x + 10, this.y - 20);
  }

  // Change the color of the creature
  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }

  // Change the background color behind the creature
  changeBackgroundColor() {
    this.backgroundColor = color(random(255), random(255), random(255));
  }
}
