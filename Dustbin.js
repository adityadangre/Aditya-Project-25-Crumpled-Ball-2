class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            friction:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image = loadImage("picture/Dustbin.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push();
		translate(pos.x, pos.y);
		imageMode(CENTER);
		image(this.image, 0,0,250,200);
		pop();
    }
}