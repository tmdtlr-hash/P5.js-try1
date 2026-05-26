/*********************************************
1. mouse:
	- 마우스 버튼 클릭 후 이동시 눈동자가 마우스 포인터를 따라다님
	- 마우스 포인터를 놓으면 원위치로 돌아감
2. keyboard:
	- 키보드의 8번 키를 누르면 안경이 위로 움직임
    - 키보드의 4번 키를 누르면 안경이 왼쪽으로 움직임
    - 키보드의 6번 키를 누르면 안경이 오른쪽으로 움직임
    - 키보드의 2번 키를 누르면 안경이 아래로 움직임
    - 키보드의 5번 키를 누르면 안경이 원위치로
***********************************************/	
let glassesX = 200;
let glassesY = 180;

let eyesetX = 0;
let eyesetY = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(235);
  
  noStroke();
  fill(0);
  ellipse(200, 600, 800, 500); //상체
  
  strokeWeight(0.1);
  fill(255, 229, 204); 
  ellipse(200, 383, 170, 70); 
  quad(120, 230, 280, 230, 280, 373, 120, 373); //목
  noStroke();
  fill(255, 229, 204);
  arc(200, 160, 250, 300, PI, PI*2); 
  arc(200, 160, 250, 400, 0, PI); 
  stroke(0);
  noFill();
  arc(200, 160, 250, 300, PI, PI*2); 
  arc(200, 160, 250, 400, 0, PI); //얼굴형

  strokeWeight(3); //점
  fill(0);
  point(140, 300);
  strokeWeight(0.05);
  fill(255, 229, 204);
  triangle(75, 160, 55, 165, 83, 230);
  triangle(325, 160, 355, 167, 317, 230); //귀
  noStroke();
  fill(255, 222, 199);
  quad(190, 190, 210, 190, 230, 240, 170, 240); //코
  fill('#EDC0A9');
  triangle(200, 280, 240, 283, 160, 283); //입
  
  
  if (mouseIsPressed) {
    eyesetX = map(mouseX, 0, width, -10, 10);
    eyesetY = map(mouseY, 0, height, -4, 0);
  } else {
    // 마우스를 떼면 중앙(0, 0)에 위치
    eyesetX = 0;
    eyesetY = 0;
  }

  let lefteyeX = constrain(140 + eyesetX, 132, 148);
  let lefteyeY = constrain(180 + eyesetY, 178, 188);
  
  let righteyeX = constrain(260 + eyesetX, 252, 268);
  let righteyeY = constrain(180 + eyesetY, 178, 188);
  
  strokeWeight(3); 
  fill(255);
  arc(140, 180, 45, 20, 0, PI); 
  arc(260, 180, 45, 20, 0, PI); 
  fill(0);
  arc(lefteyeX, lefteyeY, 18, 18, 0, PI);
  arc(righteyeX, righteyeY, 18, 18, 0, PI);
  strokeWeight(5);
  fill(2);
  quad(110, 160, 120, 150, 167, 155, 173, 165);
  quad(290, 160, 280, 150, 235, 155, 227, 165); //눈
  
  fill(0);
  triangle(75, 160, 75, 60, 120, 40);
  triangle(325, 160, 325, 60, 275, 40);
  arc(200, 60, 250, 110, PI, PI*2);
  quad(120,40,100,70,325,130,325,60);
  stroke(0);
  strokeWeight(30);
  line(90,100,140,70) //머리카락
  
  noFill();
  strokeWeight(1.5);
  stroke(0);
  ellipse(glassesX-60, glassesY, 80, 80);
  ellipse(glassesX+60, glassesY, 80, 80);
  line(glassesX-99, glassesY-15, 75, 160); 
  line(glassesX+99, glassesY-15, 325, 160);
  arc(glassesX, glassesY, 40, 20, PI, PI*2); //안경
    
  
}

function keyPressed() {
  if (key === '8') {
    glassesY -= 10; // 8번 누르면 위로
  } else if (key === '2') {
    glassesY += 10; // 2번 누르면 아래로
  } else if (key === '5') {
    glassesX = 200;
    glassesY = 180;// 5번 누르면 초기화
  } else if (key === '4') {
    glassesX -= 10; // 4번 누르면 왼쪽으로
  } else if (key === '6') {
    glassesX += 10; // 6 누르면 오른쪽으로
  }
 if (key === 's') {
    saveGif('mySketch', 8);
  }
}