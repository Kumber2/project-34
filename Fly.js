class Fly {
    constructor(bodyA, pointB) {
      var options = {
          isStatic: true
      }
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.bodyA, this.pointB);
      strokeWeight(0);
    }
  };
