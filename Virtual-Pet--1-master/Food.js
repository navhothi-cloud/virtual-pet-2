class BaseClass{
    constructor(x, y) {
        var foodStock,lastFed
        this.body = Bodies.rectangle(x, y);
        this.width = width;
        this.height = height;
        this.image = loadImage("Milk.png");
        World.add(world, this.body);
      }
      getFoodStock(){
       
      }
      updateFoodStock(){
        
      }
      deductfood(){

      }
      display(){
        push();
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}