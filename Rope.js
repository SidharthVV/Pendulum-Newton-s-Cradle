class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            angularStiffness:1,
            length:300
        }
        this.rope=Matter.Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.rope);
    
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        push();
        strokeWeight(3);
        stroke('white');
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}
