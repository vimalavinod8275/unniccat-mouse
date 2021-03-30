var bgImg;
var cat;
var mouse;
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3=loadImage("images/cat4.png");
    mouseImg3=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,1000);
    //create tom and jerry sprites here
   cat=createSprite(800,830,20,20);
   cat.addAnimation("cat",catImg1);
   cat.scale=0.2;
   mouse=createSprite(100,800,20,20);
   mouse.addAnimation("mouse",mouseImg1);
   mouse.scale=0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    
    console.log(cat.x)
    
    
   if(cat.x - mouse.x < 139){
        cat.addAnimation("catStop",catImg3);
        cat.changeAnimation("catStop",catImg3);
        mouse.addAnimation("mouseStop",mouseImg3);
        mouse.changeAnimation("mouseStop",mouseImg3);
        cat.velocityX=0;
       }
   
    drawSprites();

}


function keyPressed(){
//For moving and changing animation write code here
if(keyCode===RIGHT_ARROW){
   mouse.addAnimation("mouseTeasing",mouseImg2);
   mouse.changeAnimation("mouseTeasing");
 
  
}

if(keyCode===LEFT_ARROW)
   cat.addAnimation("catWalking",catImg2);
   cat.changeAnimation("catWalking");
  cat.velocityX=-1;
  }
