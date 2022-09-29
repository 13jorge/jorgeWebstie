'use strict'
let rightMove;
let leftMove;
let mic;
let micLevel;
let sword1;
let sword2;
let sword3;
let sword4;
let sword5;
let sword6;

function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
  mic = new p5.AudioIn()
  mic.start();
  
    sword1 = new SWORD(20,30,-80, .5);
  sword2 = new SWORD(150,150,-50, .8);
  sword3 = new SWORD(250,350,35, .8);
  sword4 = new SWORD(350,100,30, .6);
  sword5 = new SWORD(80,300,30, .2);
  sword6 = new SWORD(375,300,30, .4);

}

function draw() {
  // console.log("mouse x is: " + mouseX);
  // console.log("mouse y is: " + mouseY);
  // console.log("mic level: " + mic.getLevel());


  rightMove = map(mic.getLevel(.9), 0, .05, 227, 250);
  leftMove = map(mic.getLevel(.9), 0, .05, 83, 120);
  micLevel = mic.getLevel()
  background(0);
  
sword1.display1();
sword2.display2();
sword3.display1();
sword4.display2();
sword5.display2();
sword6.display2();
  
  sword1.move();
  sword2.move();
  sword3.move();
  sword4.move();
  sword5.move();
  sword6.move();

  // drawsword(50,30,0);
  // drawsword(150,30,0);
  // drawsword(250,30,0);
  // drawsword(350,30,0);
  // drawwing(120, 240, 30); // bottom right wing
  // drawwing(280, 240, -30); //bottom left wing
  drawwing(140, 100, leftMove); // top left wing
  drawwing(260, 100, rightMove); // top right wing
  drawhood();
  drawface();
  drawmask();
  drawgrill();
  draweyes(160 - micLevel * height * 5);
}

function drawhood() {
  //draw hood
  fill('#D41B0B');
  beginShape();
  vertex(width * .5, height * 1);
  vertex(width * .4, height * .9);
  vertex(160, 320);
  vertex(120, 280);
  vertex(120, 240);
  vertex(80, 200);
  vertex(80, 160);
  curveVertex(100, 120);
  curveVertex(120, 80);
  curveVertex(160, 50);
  curveVertex(200, 40);
  curveVertex(240, 50);
  curveVertex(280, 80);
  curveVertex(300, 120);
  vertex(320, 160);
  vertex(320, 200);
  vertex(280, 240);
  vertex(280, 280);
  vertex(240, 320);
  vertex(240, 360);
  endShape(CLOSE);
}

function drawface() {
  //draw face 
  fill(0);
  beginShape();
  vertex(200, 320);
  vertex(160, 280);
  vertex(160, 240);
  vertex(140, 200);
  vertex(120, 160);
  curveVertex(140, 120);
  curveVertex(160, 100);
  curveVertex(200, 80);
  curveVertex(240, 100);
  curveVertex(260, 120);
  curveVertex(280, 160);  
  curveVertex(260, 200);
  curveVertex(240, 240);
  vertex(240, 280);
  endShape(CLOSE);
}

function drawmask() {
  //draw mask
  fill('#ACBFBB');
  beginShape();
  vertex(200, 280);
  vertex(160, 240);
  vertex(118, 160);
  vertex(160, 200);
  vertex(240, 200);
  vertex(282, 160);
  vertex(240, 240);
  vertex(200, 280);
  endShape();
}

function draweyes(rotation) {

  //draw eyes
  if (mouseIsPressed) {
    fill('#D41B0B');
    //left
    ellipse(170, rotation, 30, 60);
    //right
    ellipse(230, rotation, 30, 60);
  } else {
    fill(0);
    //left
    ellipse(170, rotation, 30, 60);
    //right
    ellipse(230, rotation, 30, 60);
  }
}

function drawgrill() {
  if (mouseX < width * .41 || mouseX > width * .56 || mouseY < height * .51 || mouseY > height * .62) {
    //draw grill
    fill('black');
    rect(175, 210, 10, 35);
    rect(195, 210, 10, 35);
    rect(215, 210, 10, 35);
  } else {
    fill('red');
    rect(175, 210, 10, 35);
    rect(195, 210, 10, 35);
    rect(215, 210, 10, 35);
  }
}

function drawwing(xPos, yPos, rotation) {
  push();
  translate(xPos, yPos);
  rotate(rotation);
  fill('#D41B0B');
  beginShape();
  vertex(120 - 120, 380 - 240);
  curveVertex(100 - 120, 340 - 240);
  curveVertex(100 - 120, 320 - 240);
  curveVertex(80 - 120, 280 - 240);
  curveVertex(120 - 120, 240 - 240);
  curveVertex(160 - 120, 280 - 240);
  curveVertex(140 - 120, 320 - 240);
  vertex(140 - 120, 340 - 240);
  endShape(CLOSE);
  pop();
}

// function drawsword(xPos, yPos, rotation) {
//   push();
//   translate(xPos, yPos);
//   rotate(rotation);
//   fill('#D41B0B');
//   beginShape();
//   vertex(120 - 120, 380 - 120);
//   curveVertex(100 - 120, 340 - 120);
//   curveVertex(100 - 120, 320 - 120);
//   curveVertex(80 - 120, 280 - 120);
//   curveVertex(110 - 120, 240 - 120);
//   curveVertex(80 - 120, 200 - 120);
//   curveVertex(100 - 120, 160 - 120);
//   curveVertex(100 - 120, 140 - 120);
//   curveVertex(120 - 120, 100 - 120);
//   curveVertex(140 - 120, 140 - 120);
//   curveVertex(140 - 120, 160 - 120);
//   curveVertex(160 - 120, 200 - 120);
//   curveVertex(130 - 120, 240 - 120);
//   curveVertex(160 - 120, 280 - 120);
//   curveVertex(140 - 120, 320 - 120);
//   vertex(140 - 120, 340 - 120);
//   endShape(CLOSE);
//   pop();
// }