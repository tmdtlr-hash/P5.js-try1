let fromColor, toColor;
let fromHair, toHair;

function getEyeScale() {
  let sineValue = sin(frameCount * 0.02); 
  let eyeScale = map(sineValue, -1, 1, 0.0, 1.0); 
  return eyeScale;
}

function setup() {
  createCanvas(600, 400);
  
  fromColor = color(235, 240, 255);
  toColor = color(255, 235, 240);   
  fromHair = color(0);
  toHair = color(140); // 색 전환
  
  saveGif('LeeSeungsik_4', 6);
}

function draw() {
  let amt = (sin(frameCount * 0.03) + 1) / 2;
  let bgColor = lerpColor(fromColor, toColor, amt);
  background(bgColor);
  let dy = sin(frameCount * 0.05) * 5;
   let transitionDuration = 300; 
  let rawProgress = constrain(frameCount / transitionDuration, 0, 1);
  let hairAmt = rawProgress * rawProgress * (3 - 2 * rawProgress);
  let hairColor = lerpColor(fromHair, toHair, hairAmt);
  let eyeScale = getEyeScale(); // 움직임 함수

  noStroke();
  fill(0);
  ellipse(200, 600 + dy, 800, 500); // 상체
  
  strokeWeight(0.1);
  fill(255, 229, 204); 
  ellipse(200, 383 + dy, 170, 70); 
  quad(120, 230 + dy, 280, 230 + dy, 280, 373 + dy, 120, 373 + dy);   // 목
  
  noStroke();
  fill(255, 229, 204);
  arc(200, 160 + dy, 250, 300, PI, PI*2); 
  arc(200, 160 + dy, 250, 400, 0, PI); 
  stroke(0);
  noFill();
  arc(200, 160 + dy, 250, 300, PI, PI*2); 
  arc(200, 160 + dy, 250, 400, 0, PI); // 얼굴형

  strokeWeight(3); 
  fill(0);
  point(140, 300 + dy);  // 미인점
  
  strokeWeight(0.05);
  fill(255, 229, 204);
  triangle(75, 160 + dy, 55, 165 + dy, 83, 230 + dy);
  triangle(325, 160 + dy, 355, 167 + dy, 317, 230 + dy);   // 귀
  
  noStroke();
  fill(255, 222, 199);
  quad(190, 190 + dy, 210, 190 + dy, 230, 240 + dy, 170, 240 + dy); 
  fill('#EDC0A9');
  triangle(200, 280 + dy, 240, 283 + dy, 160, 283 + dy);   // 코 & 입
  
  
  strokeWeight(3); 
  fill(255);
  arc(140, 180, 45 * eyeScale, 20 * eyeScale, 0, PI); 
  arc(260, 180, 45 * eyeScale, 20 * eyeScale, 0, PI); // 눈
  

  fill(0);
  arc(140, 180, 18 * eyeScale, 18 * eyeScale, 0, PI);
  arc(260, 180, 18 * eyeScale, 18 * eyeScale, 0, PI);  //눈동자
  
  strokeWeight(5);
  fill(2);
  quad(110, 160 + dy, 120, 150 + dy, 167, 155 + dy, 173, 165 + dy);
  quad(290, 160 + dy, 280, 150 + dy, 235, 155 + dy, 227, 165 + dy);   // 눈썹
  
  noStroke();
  fill(hairColor);
  triangle(75, 160 + dy, 75, (60 + dy), 120, (40 + dy));
  triangle(325, 160 + dy, 325, (60 + dy), 275, (40 + dy));
  arc(200, 60 + dy, 250, 110, PI, PI*2);
  quad(120, 40 + dy, 100, 70 + dy, 325, 130 + dy, 325, 60 + dy);
  stroke(hairColor);
  strokeWeight(30);
  line(90, 100 + dy, 140, 70 + dy); // 머리카락
  
  noFill();
  strokeWeight(1.5);
  stroke(0);
  ellipse(140, 180 + dy, 80, 80);
  ellipse(260, 180 + dy, 80, 80);
  line(101, 165 + dy, 75, 160); 
  line(299, 165 + dy, 325, 160);
  arc(200, 180 + dy, 40, 20, PI, PI*2);  // 안경
}

