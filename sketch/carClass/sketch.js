//Create a scene where two cars are passing by each other. I added on to my previous sketchbook entry, and in this entry I figured out how to do multiple instances of the Car class, flip the car to drive in the opposite direction using a parameter, and also adding a color parameter.

//declare variables
let cars = []

function setup() {
  createCanvas(500, 500);

//   car1 = new Car(width / 2 + 35, height, 50, 1, 2, false, false, false, "#8B0000");
//   car2 = new Car(width / 2 - 35, 0, 50, 1, 2, true, false, false, "#4169e1");
//   car3 = new Car(0, height / 2 - 35, 50, 1, 2, false, true, false, "#964B00");
//   car4 = new Car(0, height / 2 + 35, 50, 1, 2, false, false, true, "#ffc91f");
// }


  cars.push(new Car(width / 2 + 50, height, 50, 0, -2, false, "#8B0000")); // Car1, moving up
  cars.push(new Car(width / 2 - 150, 0, 50, 0, 2, true, "#4169e1"));       // Car2, moving down, rotated 180 degrees
  cars.push(new Car(width / 2 + 150, height, 50, 2, 0, false, "#964B00"));  // Car3, moving right, not rotated
  cars.push(new Car(width / 2 - 50, 0, 50, -2, 0, false, "#ffc91f"));       // Car4, moving left, not rotated
}

function road() {
  
  //make the road
  fill("#555555");
  rect(width / 2 - 75, 0, 150, height);
    noStroke()
  fill("yellow");
  for (let i = 0; i < 10; i++) {
    rect(width / 2 - 5, i * 50 + 10, 10, 25);
  }
  
}

function bridge() {
  
  //make the bridge
  fill("#555555");
   rect(0, height/2 - 75, width, 150);
  
  //make the bridge barriers
  strokeWeight(5)
  stroke("black")
  line(0, height/2 - 75, width, height/2 - 75)
  line(0, height/2 + 75, width, height/2 + 75)
  
  //make the yello lines
  noStroke()
  fill("yellow");
  for (let i = 0; i < 10; i++) {
    rect(i * 50 + 10, height / 2 - 5, 25, 10);
  }
  
  //make the shadows
  fill(0, 0, 0, 150)
  rect(0, height/2 + 75, width, 20)
  
}

function draw() {
  //background color
  background("#013220");
  
  road();
    //call the Class to Move and display the cars
//   car1.moveUp();
//   //car1.flippedUp();
//   car1.display();
  

//   car2.moveDown();
//   //car2.flippedDown();
//   car2.display();
  
  
  bridge();
  
  //call the Class to Move and display the cars
//   car3.moveLeft();
//   //car3.flippedLeft();
//   car3.display();

//   car4.moveRight();
//   //car4.flippedRight();
//   car4.display();
  
  
  for (let car of cars) {
    car.move();
    car.display();
  }

  

}

//Car class
class Car {
 constructor(x, y, radius, xSpeed, ySpeed, isFlipped, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.isFlipped = isFlipped;
     this.color = color
  }
  
   move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 - this.radius) {
      this.x = width + this.radius;
    } else if (this.x > width + this.radius) {
      this.x = 0 - this.radius;
    }

    if (this.y < 0 - this.radius) {
      this.y = height + this.radius;
    } else if (this.y > height + this.radius) {
      this.y = 0 - this.radius;
    }
  }

//   moveUp() {
//     this.y -= this.ySpeed;

//     if (this.y < 0 - this.radius) {
//       this.y = height + this.radius;
//     }
//   }

//   moveDown() {
//     this.y += this.ySpeed;

//     if (this.y > height + this.radius) {
//       this.y = 0 - this.radius;
//     }
//   }
  
//   moveRight() {
//     this.x += this.xSpeed;

//     if (this.x > width + this.radius) {
//       this.x = 0 - this.radius;
//     }
//   }
  
//   moveLeft() {
//     this.x -= this.xSpeed;

//     if (this.x < 0 - this.radius) {
//       this.x = width + this.radius;
//     }
//   }
  
//   flippedUp() {
//      translate(this.x, this.y);
//   }
  
//   flippedDown() {
//     translate(this.x, this.y);
//     rotate(PI);
//   }
  
//     flippedRight() {
//     translate(this.x, this.y);
//     rotate(HALF_PI);
//   }
  
//     flippedLeft() {
//     translate(this.x, this.y);
//     rotate(PI);
//   }

  display() {
    push();
    translate(this.x, this.y);
  if (this.isFlipped) {
      rotate(PI);
    } else {
      if (this.xSpeed > 0) {
        rotate(HALF_PI); // 90 degrees (facing right)
      } else if (this.xSpeed < 0) {
        rotate(PI + HALF_PI); // 270 degrees (facing left)
      }
      

    
//      if (this.isLeft) {
//       translate(this.x, this.y);
//       rotate(HALF_PI);
//     } else {
//       translate(this.x, this.y);
//     }
    
//     if (this.isRight) {
//       translate(this.x, this.y);
//       rotate(HALF_PI);
//     } else {
//       translate(this.x, this.y);
//     }
    // //flip the car if instance is true
    // if (this.isFlipped == 1) {
    //   translate(this.x, this.y);
    // } else if (this.isFlipped == 2){
    //   translate(this.x, this.y);
    //   rotate(PI);
    //  } 
    // else if (this.isFlipped == 3) {
    //   translate(this.x, this.y);
    //   rotate(PI)
    // } else if (this.isFlipped == 4)
    //   translate(this.x, this.y);
    //   rotate(PI)
    
    //lights
    noStroke();
    fill(255, 255, 0, 220);
    triangle(3, 4, 15, -30, -9, -30);
    triangle(17, 4, 29, -30, 5, -30);
    
    //headlights
    fill("white");
    ellipse(5, 2, 7, 5);
    ellipse(15, 2, 7, 5);
    
    
    //car body
    fill(this.color);
    rect(0, 0, 20, 30, 20, 20, 5, 5);
    
    
    //windows
    fill("white");
    rect(4, 6, 12, 4, 5);
    rect(4, 20, 12, 2);
    
    
    //tires
    noStroke();
    fill("black");
    rect(20, 17, 2, 8);
    rect(20, 6, 2, 8);
    rect(-2, 6, 2, 8);
    rect(-2, 17, 2, 8);

    pop();
  }
  }
}

