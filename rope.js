class Rope {
    constructor(bodyA, bodyB, pointA, pointB) {
    
    this.pointA = pointA;
    this.pointB = pointB;
        
    var options = {
    
    bodyA: bodyA,
    bodyB: bodyB,
    lenght: 10,
    stiffness: 0.04
    }   
    
    this.rope = Constraint.create(options);
    World.add(world,this.chain)
     }
    
    display() {
    
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    
    line(pointA.x, pointA.y, pointB.x, pointB.y);
     }
    }