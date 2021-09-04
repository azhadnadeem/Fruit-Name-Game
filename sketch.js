var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave2.jpg");
  bg2 = loadImage("treasure.jpg")
  appleS=loadImage("Apple.jpg")
  bananaS=loadImage("banana.jpg")
  grapesS=loadImage("Grapes.jpg")
  mangoS=loadImage("Mango.jpg")
  oranges=loadImage("orange.jpg")
  pears=loadImage("pear.jpg")

}

function setup() {
  createCanvas(1300,600);
  system = new System()
  security = new Security()

  apple=createSprite(50,100)
  apple.addImage(appleS)
  apple.scale= 0.3

  banana=createSprite(950,100)
  banana.addImage(bananaS)
  banana.scale= 0.3

  grapes=createSprite(50,300)
  grapes.addImage(grapesS)
  grapes.scale= 0.3

  mango=createSprite(950,300)
  mango.addImage(mangoS)
  mango.scale= 0.3

  orange=createSprite(950,500)
  orange.addImage(oranges)
  orange.scale= 0.3

  pear=createSprite(50,500)
  pear.addImage(pears)
  pear.scale= 0.3

}

function draw() {
  background(bg);
  clues();
  security.display();

  fill("white");
  textSize(40)
  text("Fruits Name Game " , 480, 200);

  textSize(50);
  fill("white");
  text("Score: " + score, 550, 50);

  if(score === 6) {
    clear();
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);

    apple.hide()
    banana.hide()
    grapes.hide()
    mango.hide()
    orange.hide()
    pear.hide()
  }

  drawSprites()
}