let fillColor;
let value = 100;
let x =300;
let y =150;

function setup() 
{
    createCanvas(600, 600);
  
}
function draw(){
background (155)
  rectMode(CENTER);
fillColor = color(random(0,255), random(0,255), random(0,255));
stroke(200)
ellipse(200,500,100,200)

}
function mouseDragged(){
x =mouseX-0;
y =mouseY-0;

}
    