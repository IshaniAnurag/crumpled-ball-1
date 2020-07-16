class balls{
    constructor(x,y){
        var ball_options={
            isStatic:false,
            restitution:0.5,
            friction:1,
            density:6.5
        }
        this.body=Bodies.circle(x,y,10,ball_options);
        this.radius=10;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}