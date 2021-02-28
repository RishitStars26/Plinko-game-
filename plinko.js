class Plinko{
    constructor(x,y){
        var options = {
            isStatic:true,
            density:1
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10,10);
        fill("pink")
    }
}