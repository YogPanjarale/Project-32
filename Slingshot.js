class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    join(body){
        this.sling.bodyA = body;
    }

    display(){  
       // image(this.sling1,200,20);
       // image(this.sling2,170,20);
        
        if(this.sling.bodyA){
            push()
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(250);
            strokeWeight(4)
            line(pointA.x, pointA.y,pointB.x, pointB.y)
           
           
           pop()
        }
    }
    
}