let betweenBirds = 70
let betweenClouds1 = 300
let betweenClouds2 = 600

function setup() {
  createCanvas(600, 600);
}

function bird(x, y, color1, color2) {
  push()
  fill(color1)
  // create bird
  // bird tail 
  triangle(x - 15, y + 35, x, y + 10, x + 15, y + 35)
  
  // bird body
  ellipse(x, y, 20, 50)
  
  // bird head
  circle(x, y - 20, 20)
  
  // bird left wing
  triangle(x - 10, y - 10, x - 10, y + 10, x - 40, y)
  
  // bird right wing
  triangle(x + 10, y - 10, x + 10, y + 10, x + 40, y)
  
  fill(color2)
  // bird beak
   triangle(x - 5, y - 30, x + 5, y - 30, x, y - 37)
  pop()
}


function cloud(x, y, color3) {
  push()
  noStroke()
  fill(color3)
  circle(x, y, 60)
  circle(x + 50, y + 10, 70)
  circle(x - 20, y + 30, 60)
  circle(x + 10, y + 60, 70)
  circle(x + 60, y + 60, 60)
  pop()
  
}

function draw() {
  

  if(mouseX > 300){
    background("#ADD8E6");
  } else {
    background("#00008B")
  }
  
  
   // make clouds
  
   for (i = 0; i < 3; i++) {
     for( j = 0; j < 20; j++) {
      let x =  150 + i * betweenClouds1
      let y = -11000 + j * betweenClouds2 
      let color3 = color("white")
      
      cloud(x, y + frameCount, color3)
     }
  } 
  for (i = 0; i < 3; i++) {
     for( j = 0; j < 20; j++) {
      let x =  i * betweenClouds1
      let y = -10700 + j * betweenClouds2 
      let color3 = color("white")
      
      cloud(x, y + frameCount, color3)
     }
  } 
  
  
  
  // make birds
  
  if(mouseY > 300) {
  for (i = 0; i < 4; i++) {
      let x = 300 + i * betweenBirds
      let y = 200 + i * betweenBirds
      let color1 = color("black")
      let color2 = color("orange")
      
      bird(x, y, color1, color2)
  }
  
  for (i = 0; i < 4; i++) {
      let x = 300 - i * betweenBirds
      let y = 200 + i * betweenBirds
      let color1 = color("black")
      let color2 = color("orange")
      
      bird(x, y, color1, color2)
  }
  } else {
      for (i = 0; i < 2; i++) {
      let x = 300 + i * betweenBirds
      let y = 200 + i * betweenBirds
      let color1 = color("black")
      let color2 = color("orange")
      
      bird(x, y, color1, color2)
  }
  
  for (i = 0; i < 2; i++) {
      let x = 300 - i * betweenBirds
      let y = 200 + i * betweenBirds
      let color1 = color("black")
      let color2 = color("orange")
      
      bird(x, y, color1, color2)
    
  }
  }
 

}