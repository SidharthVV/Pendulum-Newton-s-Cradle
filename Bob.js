class Bob {
    constructor(x,y){
        var options = {
            'isStatic':false,
            'restitution' : 1,
            'fricton' : 1,
            'density' : 1.2
        }

        this.body = Bodies.circle(x,y,47,options);
        
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill('black');
        stroke('white');
        ellipse(0,0,47,47);
        pop();
    }
}