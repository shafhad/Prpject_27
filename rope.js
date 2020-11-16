class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY,}
        }
        this.rope=Constraint.create(option)
        World.add(world,this.rope)
        
    }
    display(){
        var Anchor1=this.rope.bodyA.position
        var Anchor2x=this.rope.bodyB.position.x+this.offsetX
        var Anchor2y=this.rope.bodyB.position.y+this.offsetY
        line(Anchor1.x,Anchor1.y, Anchor2x,Anchor2y) 
        
       /* if (this.rope.bodyA!=null)
        {
            var pointA = this.rope.bodyA.position;
            push()
            strokeWeight(4);
            stroke("white")
            line(pointA.x, pointA.y, this.rope.pointB.x, this.rope.pointB.y);
            pop()
            
        }*/
    }
    }

