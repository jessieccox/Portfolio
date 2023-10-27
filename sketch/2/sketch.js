//Create an ocean scene with 4 buttons. Add fish, bubbles, seaweed, and fishing hooks depending on the button the user presses


//decalre variables
let button1
let button2
let button3
let button4


function setup() {
    createCanvas(400, 400);
    background("#009dc4");


}

function draw() {
    //call function
    buttons()

}


function buttons() {

    //create buttons
    button2 = createButton('click to add seaweed');
    button2.size(100, 50)
    button2.position(100, 0);
    button2.mousePressed(seaweed);

    button1 = createButton('click to add fish');
    button1.size(100, 50)
    button1.position(0, 0);
    button1.mousePressed(fish);


    button3 = createButton('click to add bubbles');
    button3.size(100, 50)
    button3.position(200, 0);
    button3.mousePressed(bubbles);

    button4 = createButton('click to add fishing hooks');
    button4.size(100, 50)
    button4.position(300, 0);
    button4.mousePressed(fishingWire);

}

//draw fish
function fish() {

    push()
    let x = random(0, 400)
    let y = random(50, 350)
    fill("black")
    circle(x, y, 20)
    triangle(x + 10, y, x + 20, y - 10, x + 20, y + 10)
    console.log("fish")
    pop()


}

// draw seaweed
function seaweed() {
    push()
    let x = random(0, 400)
    let y = random(425, 475)
    noStroke()
    fill("green")

    beginShape();
    curveVertex(x, y);
    curveVertex(x + 5, y - 25);
    curveVertex(x - 5, y - 50);
    curveVertex(x + 5, y - 100);
    curveVertex(x - 5, y - 150);
    curveVertex(x + 5, y - 200);
    endShape();
    pop()

    console.log("seaweed")
}

//draw bubbles
function bubbles() {
    push()
    let x = random(0, 400)
    let y = random(0, 300)
    let d = random(5, 20)
    noStroke()
    fill("white")
    circle(x, y, d)
    pop()

    console.log("bubbles")

}
//draw fishing wire
function fishingWire() {
    push()
    let x = random(0, 400)
    let y = random(-75, 0)
    strokeWeight(1)
    stroke("black")
    line(x, y, x, y + 200)

    stroke("gray")
    strokeWeight(3)
    noFill();
    curve(x, y, x, y + 200, x - 10, y + 210, x - 20, y + 150)
    pop()

    console.log("fishing hook")

}