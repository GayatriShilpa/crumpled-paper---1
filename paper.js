class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
       this.body=Bodies.circle(x,y,radius,options);
       this.x=x;
       this.y=y;
      this.radius=20;
       World.add(world,this.body);
   }   
   
   
   display(){
      
       push ();
       translate();
       ellipseMode(RADIUS);
       fill("green");
       ellipse(this.body.position.x,this.body.position.y,20,20);
       pop ();
   }
   }