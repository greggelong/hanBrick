let stage;
let animal = [];

let bx1;
let bx2;
let bx3;
let bx4;
let cnv;
let wSound;
let playing = false;
let lasttouch = 0;

function preload() {
  animal[0] = loadImage("tiger.png");
  animal[1] = loadImage("frog.png");
  animal[2] = loadImage("bull.png");
  animal[3] = loadImage("monkey.png");
  stage = loadImage("stage.png");
}

// g1x: 0-100,
//     y:height-(animal[2].height/2),
//     img:animal[2]
// }
// g2 = {
//     x: width+animal[3].width,
//     y:height/4+(animal[2].height/2),
//     img:animal[3]
// }

// y1 = {
//     x: width+animal[0].width,
//     y:(animal[2].height/2),
//     img:animal[0]
// }

function setup() {
  cnv = createCanvas(736, 528); //(gridSize * cellSize + 10, gridSize * cellSize + 10);
  let cx = windowWidth / 2 - cnv.width / 2;
  let cy = windowHeight / 2 - cnv.width / 2;
  cnv.position(cx, cy);
  createP("Han Dynasty Brick Rubbing Come to Life!");

  //frameRate(5)
  imageMode(CENTER);

  bx1 = random(-500, -300);
  bx4 = random(-500, -300);
  bx2 = width + random(300, 500);
  bx3 = width + random(300, 500);
  animal[0].resize(300, 0);
  animal[1].resize(100, 0);
  animal[2].resize(300, 0);
  animal[3].resize(200, 0);
  stage.resize(736, 0);
}

function touchStarted() {
  // for Ios
  // calculate time since last touch
  const currenttime = millis();
  const timesincelasttouch = currenttime - lasttouch;

  print(playing);
  if (timesincelasttouch > 500) {
    if (!playing) {
      // wSound.play(); // hiss when you start
      //  wSound.loop(); // keep playing hair dryer
      playing = true;
    } else if (playing) {
      //   wSound.stop();
      //   playing = false;
    }
    // update
    lasttouch = currenttime;
  }
}

function mousePressed() {
  touchStarted();
}

function draw() {
  background(255);

  // update animal
  bx1 = bx1 + 1;
  if (bx1 > width + animal[1].width) bx1 = random(-500, -300);
  bx2 = bx2 - 1;
  if (bx2 < -animal[0].width) bx2 = width + random(300, 900);
  bx3 = bx3 - 1;
  if (bx3 < -animal[2].width) bx3 = width + random(300, 900);
  bx4 = bx4 + 1;
  if (bx4 > width + animal[3].width) bx4 = random(-300, -900);

  // show animal
  image(animal[3], bx4, animal[3].height / 1 - 10); //right going
  image(animal[0], bx2, animal[0].height / 2 + 50);
  image(animal[1], bx3, height / 3 + animal[1].height / 2 + 30);

  // right going animal
  image(animal[2], bx1, height - animal[2].height / 1);

  // show stage
  image(stage, width / 2, height / 2);
}
