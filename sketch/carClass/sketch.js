//Created a scene where four cars are passing by each other. 
//I added on to my previous sketchbook entry, and in this entry 
//I figured out how to do 2 more multiple instances of the Car class, 
//and putting the cars in an array.

let cars = [];

function setup() {
    createCanvas(400, 400);

    cars.push(new Car(width / 2 + 40, height + 100, 50, 0, -2, false)); // Car1, moving up
    cars.push(new Car(width / 2 - 40, -100, 50, 0, 2, true));       // Car2, moving down, rotated 180 degrees
    cars.push(new Car(0, height / 2 - 50, 50, 2, 0, false));  // Car3, moving right, not rotated
    cars.push(new Car(width, height / 2 + 50, 50, -2, 0, false));       // Car4, moving left, not rotated
}


function road() {

    //make the road
    fill("#555555");
    rect(width / 2 - 75, 0, 150, height);
    noStroke()

}

function bridge() {

    //make the bridge
    fill("#555555");
    rect(0, height / 2 - 75, width, 150);

    // //make the bridge barriers
    // strokeWeight(5)
    // stroke("black")
    // line(0, height/2 - 75, width, height/2 - 75)
    // line(0, height/2 + 75, width, height/2 + 75)

    //make the yello lines


    //   //make the shadows
    //   fill(0, 0, 0, 150)
    //   rect(0, height/2 + 75, width, 20)

}


function draw() {
    background("#013220");
    road();
    bridge();

    noStroke()
    fill("yellow");
    for (let i = 0; i < 10; i++) {
        rect(i * 50 + 10, height / 2 - 5, 25, 10);
    }

    fill("yellow");
    for (let i = 0; i < 10; i++) {
        rect(width / 2 - 5, i * 50 + 10, 10, 25);
    }

    for (let car of cars) {
        car.move();
        car.display();
    }
}

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
        }

        noStroke();
        fill(255, 255, 0, 220);
        triangle(3, 4, 15, -30, -9, -30);
        triangle(17, 4, 29, -30, 5, -30);

        fill("white");
        ellipse(5, 2, 7, 5);
        ellipse(15, 2, 7, 5);

        fill("#8B0000");
        rect(0, 0, 20, 30, 20, 20, 5, 5);

        fill("white");
        rect(4, 6, 12, 4, 5);
        rect(4, 20, 12, 2);

        noStroke();
        fill("black");
        rect(20, 17, 2, 8);
        rect(20, 6, 2, 8);
        rect(-2, 6, 2, 8);
        rect(-2, 17, 2, 8);

        pop();
    }
}