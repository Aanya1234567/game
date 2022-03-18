var girl,room,vase,cooker,apple,painting,key,button,selfie,cage,bird,sofa;
var cushion,teddy,necklace,watch
var appleimg,roomimg,cookerimg,girlimg,vaseimg,paintingimg,keyimg,buttonimg;
var birdimg,cageimg,sofaimg,selfieimg,cushionimg,teddyimg,necklaceimg,watchimg;
var bgsound,yeah;
var score=0;
var fc;
var c
function preload(){
girlimg=loadImage("girl.png");
roomimg=loadImage("room.jpg");
appleimg=loadImage("apple.png");
vaseimg=loadImage("vase.png");
paintingimg=loadImage("painting.png");
cookerimg=loadImage("cooker.png");
keyimg=loadImage("key.png");
buttonimg=loadImage("button.png");
cageimg=loadImage("cage.png");
selfieimg=loadImage("selfie.png");
necklaceimg=loadImage("necklace.png");
birdimg=loadImage("bird.png");
sofaimg=loadImage("sofa.png");
teddyimg=loadImage("teddy.png");
cushionimg=loadImage("cushion.png");
watchimg=loadImage("watch.png");
bgsound=loadSound("bgsound.mp3");
yeah=loadSound("yeah.ogg");




}
function setup(){
createCanvas(windowWidth,windowHeight)
girl=createSprite(1767,675,100,100)
girl.addImage(girlimg)
girl.scale=0.5

vase=createSprite(1222,585,100,100)
vase.addImage(vaseimg)
vase.scale=0.7

apple=createSprite(847,773,100,100)
apple.addImage(appleimg)
apple.scale=0.2

painting=createSprite(111,351,100,100)
painting.addImage(paintingimg)
painting.scale=0.3

key=createSprite(492,541,100,100)
key.addImage(keyimg)
key.scale=0.1

cooker=createSprite(477,530,100,100)
cooker.addImage(cookerimg)
cooker.scale=0.3

button=createSprite(36,871,100,100)
button.addImage(buttonimg)
button.scale=0.3

cage=createSprite(1642,126,871,100,100)
cage.addImage(cageimg)
cage.scale=0.3;

watch=createSprite(1351,690,100,100)
watch.addImage(watchimg)
watch.scale=0.1

sofa=createSprite(1351,690,100,100)
sofa.addImage(sofaimg)
sofa.scale=0.6

bird=createSprite(1647,127,100,100)
bird.addImage(birdimg)
bird.scale=0.1

necklace=createSprite(790,178,100,100)
necklace.addImage(necklaceimg)
necklace.scale=0.2

selfie=createSprite(801,288,100,100)
selfie.addImage(selfieimg)
selfie.scale=0.4

teddy=createSprite(1636,688,100,100)
teddy.addImage(teddyimg)
teddy.scale=0.09


cushion=createSprite(1655,699,100,100)
cushion.addImage(cushionimg)
cushion.scale=0.3


}

function draw(){
background(roomimg);
 

if(mousePressedOver(apple)){
apple.x-=50
}
if(mousePressedOver(girl)){
girl.x-=50
    }
if(mousePressedOver(cooker)){
cooker.x-=50
}

if(mousePressedOver(painting)){
painting.x-=50
}

if(mousePressedOver(vase)){
vase.x-=50
}
 if(mousePressedOver(bird)){
bird.x-=50
}
if(mousePressedOver(cage)){
cage.x-=50
 }
 if(mousePressedOver(sofa)){
sofa.x-=50
}
if(mousePressedOver(selfie)){
  selfie.y+=50
   }
if(mousePressedOver(cushion)){
   cushion.x+=50
}

if(mousePressedOver(teddy)){
  teddy.x+=50
}

if(mousePressedOver(teddy)){
  fc=frameCount+1
  teddy.destroy()
  c=1
  if(c===1){
    c=0
  score+=30
  }
  yeah.play()
  if(frameCount===fc){
    yeah.stop()
      }
 }

 if(mousePressedOver(necklace)){
  fc=frameCount+1
necklace.destroy()
  score+=30
  yeah.play()
  if(frameCount===fc){
    yeah.stop()
      }
  
}
  if(mousePressedOver(key)){
    fc=frameCount+1
  key.destroy()
  score+=30
  yeah.play()
  if(frameCount===fc){
    yeah.stop()
      }



 
  }

  if(mousePressedOver(watch)){
    fc=frameCount+1
   watch.destroy()
    score+=30
    yeah.play()
    if(frameCount===fc){
    yeah.stop()
      }  
  }
  

  

drawSprites()
textSize(30)
fill("black")
text("NOTE-Click in the middle of object for better experience")
text("score:"+score,100,100)
}

