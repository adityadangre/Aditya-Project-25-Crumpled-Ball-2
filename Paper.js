class Paper{
    constructor(x,y){
        var option={
            isStatic:false,
            restitution:0.7,
            friction:1.0,
            density:1.3
        }
    
    this.body=Bodies.rectangle(x,y,40,40,option);
    this.width=width;
    this.height=height;
    

    this.image = loadImage("picture/Paper.png");
    
    World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
		translate(pos.x, pos.y);
		imageMode(CENTER);
		image(this.image, 0,0,90,90);
		pop();
    }
}