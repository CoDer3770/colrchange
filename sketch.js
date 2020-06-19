
var r = 0;
var g = 50;
var b = 255;
// var a = 90
// var o = 150;
// var c = 210;
var value = 25;
var val = 0
var circle ;




// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  


  createCanvas(1200,400);
  noStroke();
 
}


function draw(){
  background(r,g,b);
 
r = map(mouseX,0,1200,0,255)
g = map(mouseX,0,1200,0,255)
b = map(mouseX,0,1200,0,255)
 
// circle = circle(25,25,25);
//  circle.shapeColor = "r"
// circle.x = mouseX;
//  if(ellipse > 100 && ellipse < 150){
//   colorMode(RGB, a)
//  }

//  if(circle.x > 0 && circle.x > 100){
//   colorMode(RGB, o)
//  }
//  if(circle.x = 100 && circle.x < 200){
//   colorMode(RGB, c)
//   }
//   if(circle.x > 210 && circle.x < 355){
//     colorMode(RGB, b)
//     }

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 
  
  

  // Pass the values to the background() function you have learnt previously.


  // Create an ellipse that will move around with you mouse about the X axis.
  ellipse(mouseX, mouseY, 55, 55);
  // Remember to fill the canvas with white paint before creating the ellipse.
}