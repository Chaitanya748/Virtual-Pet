//Create variables here
var dog , happyDog , database , foods , foodstock , happyDogImage,dogImage;

function preload()
{
  //load images here
  happyDogImage = loadImage("happydog.png");
  dogImage = loadImage("Dog.png")
 

function setup() {
	createCanvas(500, 500);
  
  happyDog = addImage("happyDogImage");
  foodstock=database.ref('foods');
  foodstock.on("value",readStock);
}


function draw() {  

  drawSprites();
  //add styles here
  background(46,139,87);
  if(keyWentDown(UP_ARROW)) {
    writeStock(foods);
    dog.addImage(dogImage);
  }
}