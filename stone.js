class Stone {
    constructor(x, y, diameter) {
      var options = {
          'restitution':0.3,
          'friction':0,
          'density':1.2,
          isStatic:true
      }
      this.body = Bodies.circle(x, y, diameter/2, options);
      this.radius = diameter/2;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      fill(62,107,78);
      push ();
      translate (pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(6);
      stroke("White");
      ellipse(0, 0, this.radius,this.radius);
      pop ();
    }
  }