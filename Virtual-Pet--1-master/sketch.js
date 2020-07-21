var dog, happyDog, database, foodS, foodStock;
var fedTime,lastFed,foodObj;
function preload()
{
  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  dogsprite=createSprite(300,250);
  dogsprite.addImage(dog);

  dogsprite.scale=0.2; 
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
background(46,139,87)

fill(255,255,254);
textSize(15)
if(lastFed>=12){
  text("Last Feed :"+lastFed%12+"PM",350,30);

}else if(lastFed==0){
text("Last Feed : 12 AM",350,30);

}else {
  text("Last Feed :"+lastFed+"AM",350,30);
}
  drawSprites();
  //stroke(10)
  fill("blue")

}
function readStock(data){
  foodS=data.val();
}
function writeStock(y){
  if(y<=0){
    y=0;
  }else{
    y=y-1;
  }
  database.ref('/').update({
      Food:y
  });
  
}
function feedDog(){
  dogsprite.addImage(happyDog);
  foodObj.updateFoodstock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
 
}
function addFoods(){
  foodS++
  database.ref('/').update({
    food:foodS
  })
}
