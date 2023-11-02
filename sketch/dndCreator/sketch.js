//declare variables
let grammar, lines, json;
let myFont


function preload() {
  //load json file
  json = loadJSON('characterCreator.json');
  
  //load font
  myFont = loadFont('assets/DragonHunter.otf')
 
}

function setup() {
  createCanvas(600, 600);
  
  //text format
  textSize(40);
  textAlign(CENTER);
  textFont(myFont)
  
  // translate json grammar file into rita
  grammar = RiTa.grammar(json); 
  
  //array for lines
  lines = [" ", " ", " ","Your", "Adventure", "Awaits . . .", " ", " ", "Click to Generate",  " ", " ", " "];
}

function draw() {
  //background color
  background("#E0C9A6");
  
  //display decorative lines
  stroke("white")
  line(58, 60, 528, 60)
  line(528, 60, 528, 540)
  line(58, 60, 528, 60)
  line(528, 60, 528, 540)
  line(58, 60, 58, 540)
  line(58, 540, 528, 540)
  
  
  //call functions to display dice
  stroke("#E0C9A6")
  dice1()
  dice2()

  // display lines
  text(lines[0], width / 2, 120);
  text(lines[1], width / 2, 155);
  text(lines[2], width / 2, 190);
  text(lines[3], width / 2, 225);
  text(lines[4], width / 2, 260);
  text(lines[5], width / 2, 295);
  text(lines[6], width / 2, 330);
  text(lines[7], width / 2, 365);
  text(lines[8], width / 2, 400);
  text(lines[9], width / 2, 435);
  text(lines[10], width / 2, 470);
  text(lines[11], width / 2, 505);
 

  
}

function mouseReleased() {
 //change text size
  textSize(16);
  
   // run grammar to randomly determine poem
  let result = grammar.expand();
  
  // divide result into an array, breaking into lines at '%' character
  let characterCreator = result.split("%");  
  
  // set lines array equal to poem line splits
  for (let i = 0; i < lines.length; i++) {
    lines[i] = characterCreator[i];
  } 
}

//function for drawing upper left dice
function dice1() {
  
  let x = 30
  let y = 40
     
  //mid triangle
  triangle(x, y, x + 28, y + 45, x + 56, y)
  //left triangle
  triangle(x, y, x + 28, y + 45, x - 15, y + 42)
  //right triangle
  triangle(x + 71, y + 42, x + 28, y + 45, x + 56, y)
  //right bottom tri
  triangle(x + 71, y + 42, x + 28, y + 45, x + 28, y + 65)
  //left bottom tri
  triangle(x - 15, y + 42, x + 28, y + 45, x + 28, y + 65)
  //upper triangle
  triangle(x, y, x + 28, y - 30, x + 56, y)
  //upper left triangle
  triangle(x, y, x + 28, y - 30, x - 15, y - 3)
  //upper right triangle
  triangle(x + 71, y - 3, x + 28, y - 30, x + 56, y)
  //middle right triangle
  triangle(x + 71, y + 42, x + 71, y - 3, x + 56, y)
  //middle left triangle
  triangle(x, y, x - 15, y + 42, x - 15, y - 3)
  
}

//function for drawing lower right dice
function dice2() {
  
  let x = 500
  let y = 520
     
  //mid triangle
  triangle(x, y, x + 28, y + 45, x + 56, y)
  //left triangle
  triangle(x, y, x + 28, y + 45, x - 15, y + 42)
  //right triangle
  triangle(x + 71, y + 42, x + 28, y + 45, x + 56, y)
  //right bottom tri
  triangle(x + 71, y + 42, x + 28, y + 45, x + 28, y + 65)
  //left bottom tri
  triangle(x - 15, y + 42, x + 28, y + 45, x + 28, y + 65)
  //upper triangle
  triangle(x, y, x + 28, y - 30, x + 56, y)
  //upper left triangle
  triangle(x, y, x + 28, y - 30, x - 15, y - 3)
  //upper right triangle
  triangle(x + 71, y - 3, x + 28, y - 30, x + 56, y)
  //middle right triangle
  triangle(x + 71, y + 42, x + 71, y - 3, x + 56, y)
  //middle left triangle
  triangle(x, y, x - 15, y + 42, x - 15, y - 3)
  
}


