class Box {
  constructor(x,y,width,height,color= "white") {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.color = color;
    this.visibility = 255;
    this.died=false
    World.add(world, this.body);
  }
  score(){
    var speed = this.body.speed;
    
    if(speed>4&& frameCount >60&&this.died){
    score+=1;
    
    }
    this.died = false
    if(this.visibility<255&&this.visibility>0){
      this.died = true
    }
    
  }
  display(){
    var pos =this.body.position;
    var speed = this.body.speed;
    var w= this.visibility
    if(speed>4&& frameCount >60){
      push()
      this.visibility-=5
      World.remove(world,this.body)
      pop()
    }
    rectMode(CENTER);
    switch (this.color) {
      case "white":
        fill(255,255,255,w)
        break;
      case "blue":
        fill(50,50,255,w)
        break;
      case "light blue":
        fill(150,150,255,w)
        break; 
      case "pink":
        fill(255,150,150,w)
        break; 
      default:
        break;
    }
    //fill(this.color);
    if(this.Visiblity>=0){
       strokeWeight(1);
    }
    else{
      strokeWeight(0)
    }
    rect(pos.x, pos.y, this.width, this.height);
  }
   
};
