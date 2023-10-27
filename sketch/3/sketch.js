//Create a coloring canvas, where you can select buttons to choose the color that the mouse can draw 

//declare variables
let isDrawing = false
let lastX
let lastY
let currentColor

//setup Canvas, stroke, background, and call the buttons function
function setup() {
    createCanvas(400, 400);
    stroke(0)
    strokeWeight(5)
    colorButtons()
    background("white")
}

//buttons function
function colorButtons() {
    //declare colors in an array
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'black']
    //create the buttons
    for (let i = 0; i < colors.length; i++) {
        let button = createButton('')
        button.position(i * 50, height)
        button.size(50, 50)
        button.style('background-color', colors[i])
        button.mousePressed(() => {
            currentColor = colors[i]
            stroke(currentColor)
        })
    }
}

function draw() {

}

//draw beginning of line when mouse is pressed
function mousePressed() {
    isDrawing = true
    lastX = mouseX
    lastY = mouseY
}

//draw end of line when mouse is released
function mouseReleased() {
    isDrawing = false
}

//draw the line as the mouse is dragged
function mouseDragged() {
    if (isDrawing) {
        line(lastX, lastY, mouseX, mouseY)
        lastX = mouseX
        lastY = mouseY
    }
}

