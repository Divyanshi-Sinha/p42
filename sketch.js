var canvas, backgroundImage,bg;
var cake,cakeImg,song,partypopper,partypopperImg,balloons,balloonsImg
var game,welcome;
var inp;
var game, contestant, quiz;
var song ;
var b2


function preload(){
  backgroundImage = loadImage("assets/background.jpg");
  b2Img = loadImage("assets/b2.jpg");
  welcomeImg = loadImage("assets/title.jpg");
  cakeImg = loadImage("assets/cake.gif","cake");
  partypopperImg=loadImage("assets/partypopper.gif","popper");
  balloonsImg=loadImage("assets/balloons.png");
  balloons1Img=loadImage("assets/balloon.png");
  nextImg = loadImage("assets/Next.png")
  song =loadSound("assets/happy birthday song.mp3");
  gifimage = createImage("ballons.gif");
  //cakeImage = createImage("partypopper.gif")
}
function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  inp = createInput('      Enter Your Name');
  inp.position(680, 400);
  inp.size(150);
  welcome = createSprite(750,100)
  welcome.addImage(welcomeImg);
  welcome.scale=0.5; 
  next = createSprite(750,600)
  next.addImage(nextImg);
  next.scale=0.3;
  b2 = createSprite(750,400);
  b2.addImage(b2Img);
  b2.scale = 0.8;
  b2.visible = false
  cake = createSprite(750,600);
  cake.addImage(cakeImg);
  cake.scale = 0.7;
  cake.visible = false
  balloons = createSprite(120,300);
  balloons.addImage(balloonsImg);
  balloons.scale = 0.5;
  balloons.visible = false
  balloons1 = createSprite(1400,300);
  balloons1.addImage(balloons1Img);
  balloons1.scale = 0.5;
  balloons1.visible = false
  
}


function draw(){
  background(backgroundImage);
  var text = createDiv('click this link for a suprise - https://kapwi.ng/c/LPMu2NTUnO');
  text.position(900,100)
  text.hide();
  text.size(200, 100);
  drawSprites();
  if(mousePressedOver(next)){
     b2.visible =true
     cake.visible= true;
     balloons.visible = true;
     balloons1.visible = true;
     text.show();
     //inp1.show();
     inp.hide();
     next.visible=false
     Swwwal();     
     song.play()
    
    }
    
  
  
  
 
}
function Swwal(){
swal({
  title: `click this link for a suprise -> : https://kapwi.ng/c/LPMu2NTUnO`,
  imageUrl:"https://www.funimada.com/assets/images/cards/big/bday-416.gif", 
  imageSize: "100x100",
  confirmButtonText: "Ok"
   });
  }
  function Swwwal(){
    swal({
      title: `Happy Birthday`,
      imageUrl:"https://www.funimada.com/assets/images/cards/big/bday-416.gif", 
      imageSize: "100x100",
      confirmButtonText: "Thankyou"
       });
  }