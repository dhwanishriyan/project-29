class SlingShot{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.2
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
      display(){
        if(this.sling.bodyA){
          var pointA=this.sling.bodyA.position;
          var pointB=this.sling.pointB;
          strokeWeight(2);
            line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
      } 
      fly(){
          this.sling.bodyA=null;
      } 
}
