class Ground{
    constructor(x,y,width,height){
        var options = {
    isStatic: true
    
        }
    this.body=Matter.Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    
    World.add(world,this.body)
    
    }
    display(){
    this.width=width;
    this.height=height;
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,width,height)
    }
    }