class polygon {
    constructor(x,y) {
        var options = {
            isStatic: false
        }
      this.body = Bodies.polygon(50,200,6,20,options)
      World.add(world, this.body);
      this.image = loadImage("polygon.png")
     // this.x= x
      //this.y =y
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill(255,0,0);
    //  // polyshape(pos.x, pos.y,25,6)
    //   let angle = TWO_PI / 6;
    // beginShape();
    // for (let a = 0; a < TWO_PI; a += angle) {
    //   let sx = pos.x + cos(a) * 25;
    //   let sy = pos.y + sin(a) * 25;
    //   vertex(sx, sy);
    // }
    // endShape(CLOSE);
     
     // image(this.image,pos.x, pos.y, this.width, this.height)
    }
    
    // polyshape(x, y, radius, npoints) {
    //   let angle = TWO_PI / npoints;
    //   beginShape();
    //   for (let a = 0; a < TWO_PI; a += angle) {
    //     let sx = x + cos(a) * radius;
    //     let sy = y + sin(a) * radius;
    //     vertex(sx, sy);
    //   }
    //   endShape(CLOSE);
    // }
  };


