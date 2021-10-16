//this took me so long omg I hope you like it

var skinColors = ['#FAE7D0', '#DFC183', '#AA724B', '#573719'];
//light, light-medium, dark-medium, dark skin tones
var hairStyles = ["short", "medium", "long"];
var hairColors = ['#000000', '#554838', '#A7856A', '#E5CbA8', '#830404'];
//black, dark brown, light brown, blonde, red hair colors
var eyeStyles = ['normal', 'flat', 'wide', 'wink'];
var mouthStyles = ['smile', 'flat', 'frown', 'surprised'];
var shirtStyles = ['#FF6663', '#FEB144', '#FDFD97', '#9EE09E', '#9EC1CF', '#CC99C9'];

var skinCount = 0;
var hairStyleCount = 0;
var hairColorCount = 0;
var eyeCount = 0;
var mouthCount = 0;
var shirtCount = 0;

function setup() {
  createCanvas(800, 650);
  rectMode(CENTER);
  textAlign(CENTER);


  //button to change skin
  buttonSkin = createButton('Change Skin Tone');
  buttonSkin.position(80, 510);
  buttonSkin.size(160, 30);
  buttonSkin.style('font-size', '15px');
  buttonSkin.style('background-color', '#FF6663');
  buttonSkin.mousePressed(changeSkin);

  //button to change hair style
  buttonHairStyle = createButton('Change Hair Style');
  buttonHairStyle.position(320, 510);
  buttonHairStyle.size(160, 30);
  buttonHairStyle.style('font-size', '15px');
  buttonHairStyle.style('background-color', '#FEB144');
  buttonHairStyle.mousePressed(changeHairStyle);

  //button to change hair color
  buttonHairColor = createButton('Change Hair Color');
  buttonHairColor.position(570, 510);
  buttonHairColor.size(160, 30);
  buttonHairColor.style('font-size', '15px');
  buttonHairColor.style('background-color', '#FDFD97');
  buttonHairColor.mousePressed(changeHairColor);

  //button to change eye style
  buttonEye = createButton('Change Eye Style');
  buttonEye.position(80, 560);
  buttonEye.size(160, 30);
  buttonEye.style('font-size', '15px');
  buttonEye.style('background-color', '#9EE09E');
  buttonEye.mousePressed(changeEyes);

  //button to change mouth style
  buttonMouth = createButton('Change Mouth Style');
  buttonMouth.position(320, 560);
  buttonMouth.size(160, 30);
  buttonMouth.style('font-size', '15px');
  buttonMouth.style('background-color', '#9EC1CF');
  buttonMouth.mousePressed(changeMouth);

  //button to change shirt style
  buttonShirt = createButton('Change Shirt Color');
  buttonShirt.position(570, 560);
  buttonShirt.size(160, 30);
  buttonShirt.style('font-size', '15px');
  buttonShirt.style('background-color', '#CC99C9');
  buttonShirt.mousePressed(changeShirt);

  player = new Character(skinColors[skinCount], hairStyles[hairStyleCount], hairColors[hairColorCount],
    eyeStyles[eyeCount], mouthStyles[mouthCount], shirtStyles[shirtCount]);
}

function draw() {
  background('#FEC8D8');

  //option box
  fill('#FFF7E4');
  rect(width / 2, 525, 750, 200);
  noFill();
  stroke(0);
  strokeWeight(1);
  rect(width / 2, 525, 725, 175);
  fill(0);
  textSize(30);
  text('Character Creator!', width / 2, 480);
  line(250, 490, 550, 490);

  player.display();
}

class Character {
  constructor(skin, hairStyle, hairColor, eyes, mouth, shirt) {
    this.skin = skin;
    this.hairStyle = hairStyle;
    this.hairColor = hairColor;
    this.eyes = eyes;
    this.mouth = mouth;
    this.shirt = shirt;
  }

  display() {
    noStroke();

    //hair behind head
    if (this.hairStyle == hairStyles[1]) {
      fill(this.hairColor);
      ellipse(width / 2, 190, 260, 320);
    } else if (this.hairStyle == hairStyles[2]) {
      fill(this.hairColor);
      arc(width / 2, 400, 350, 750, PI, 0, OPEN);
    }

    //shirt
    fill(this.shirt);
    noStroke();
    rect(400, 350, 200, 125);

    //face
    fill(this.skin);
    noStroke();
    ellipse(width / 2, 200, 200, 250);

    //hair in front of head
    if (this.hairStyle == hairStyles[0]) {
      fill(this.hairColor);
      push();
      translate(0, 40);
      ellipse(width / 2 - 80, 105, 25, 60);
      arc(width / 2 - 50, 80, 45, 100, 0, PI, OPEN);
      arc(width / 2, 75, 75, 100, 0, PI, OPEN);
      arc(width / 2 + 50, 80, 45, 100, 0, PI, OPEN);
      ellipse(width / 2 + 80, 105, 25, 60);
      ellipse(width / 2, 70, 170, 80);
      pop();
    } else if (this.hairStyle == hairStyles[1]) {
      fill(this.hairColor);
      ellipse(width / 2 - 80, 105, 25, 60);
      arc(width / 2 - 50, 80, 45, 100, 0, PI, OPEN);
      arc(width / 2, 75, 75, 100, 0, PI, OPEN);
      arc(width / 2 + 50, 80, 45, 100, 0, PI, OPEN);
      ellipse(width / 2 + 80, 105, 25, 60);
    } else if (this.hairStyle == hairStyles[2]) {
      fill(this.hairColor);
      push();
      translate(0, 20);
      ellipse(width / 2 - 80, 105, 25, 60);
      arc(width / 2 - 50, 80, 45, 100, 0, PI, OPEN);
      arc(width / 2, 75, 75, 100, 0, PI, OPEN);
      arc(width / 2 + 50, 80, 45, 100, 0, PI, OPEN);
      ellipse(width / 2 + 80, 105, 25, 60);
      ellipse(width / 2, 70, 170, 70);
      pop();
    }

    //eyes
    if (this.eyes == eyeStyles[0]) {
      fill(0);
      ellipse(350, 180, 15, 15);
      ellipse(440, 180, 15, 15);
    } else if (this.eyes == eyeStyles[1]) {
      fill(0);
      ellipse(350, 180, 15, 15);
      stroke(0);
      strokeWeight(3);
      noFill();
      arc(440, 180, 20, 10, 0, PI, OPEN);
    } else if (this.eyes == eyeStyles[2]) {
      noFill();
      stroke(0);
      strokeWeight(3);
      arc(350, 185, 30, 10, 0, PI, OPEN);
      arc(440, 185, 30, 10, 0, PI, OPEN);
    } else {
      stroke(0);
      strokeWeight(5);
      line(340, 180, 360, 180);
      line(430, 180, 450, 180);
    }
    //nose
    stroke(0);
    strokeWeight(3);
    line(390, 210, 390, 230);
    line(390, 230, 400, 230);

    //mouth
    if (this.mouth == mouthStyles[0]) {
      stroke(0);
      strokeWeight(3);
      noFill();
      arc(397, 270, 60, 30, 0, PI, OPEN);
    } else if (this.mouth == mouthStyles[1]) {
      stroke(0);
      strokeWeight(3);
      line(355, 270, 440, 270);
    } else if (this.mouth == mouthStyles[2]) {
      stroke(0);
      strokeWeight(3);
      line(365, 270, 430, 270);
      line(360, 275, 365, 270);
      line(435, 275, 430, 270);
    } else {
      fill(0);
      stroke(0);
      strokeWeight(3);
      ellipse(395, 280, 45, 35);
    }

  }
}


function changeSkin() {
  if (skinCount == 3) {
    skinCount = -1;
  }
  skinCount += 1;
  player.skin = skinColors[skinCount];
}

function changeHairStyle() {
  if (hairStyleCount == 2) {
    hairStyleCount = -1;
  }
  hairStyleCount += 1;
  player.hairStyle = hairStyles[hairStyleCount];
}

function changeHairColor() {
  if (hairColorCount == 4) {
    hairColorCount = -1;
  }
  hairColorCount += 1;
  player.hairColor = hairColors[hairColorCount];
}

function changeEyes() {
  if (eyeCount == 3) {
    eyeCount = -1;
  }
  eyeCount += 1;
  player.eyes = eyeStyles[eyeCount];
}

function changeMouth() {
  if (mouthCount == 3) {
    mouthCount = -1;
  }
  mouthCount += 1;
  player.mouth = mouthStyles[mouthCount];
}

function changeShirt() {
  if (shirtCount == 5) {
    shirtCount = -1;
  }
  shirtCount += 1;
  player.shirt = shirtStyles[shirtCount];
}
