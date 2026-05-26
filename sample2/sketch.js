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
  strokeWeight(3); 
  fill(255);
  arc(140, 180, 45, 20, 0, PI); 
  arc(260, 180, 45, 20, 0, PI); 
  fill(0);
  arc(140, 180, 18, 18, 0, PI);
  arc(260, 180, 18, 18, 0, PI);
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
  ellipse(140, 180, 80, 80);
  ellipse(260, 180, 80, 80);
  line(101, 165, 75, 160); 
  line(299, 165, 325, 160);
  arc(200, 180, 40, 20, PI, PI*2); //안경
  
  
}