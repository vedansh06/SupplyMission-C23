class Redbox {

    constructor(x, y, width, height){
        var options = {
            'restitution': 0.8,
            'friction': 5.0,
            isStatic:true,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y); 
        rotate(angle);   
        rectMode(CENTER);
        
        pop();
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);     
    }
}