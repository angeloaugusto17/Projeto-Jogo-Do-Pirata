class Boat{
    constructor(x,y,width,height,boatPos,boatAnimation){
        this.animation = boatAnimation;
        this.speed = 0.05;
        this.width = width;
        this.height = height;
        this.boat_position = boatPos;
        this.body = Bodies.rectangle(x,y,width,height);
        this.isBroken = false;
        World.add(world,this.body);

    }

    remove(){
        //colocar animção afundando
        this.animation = brokenBoatAnimation;

        //colocar velocidade
        this.speed = 0.05;

        //colocar tamanho
        this.width = 300;
        this.height = 300;

        this.isBroken = true;

        setTimeout(() => {
            Matter.World.remove(world,boats[index].body);
            boats.splice(index,1);
        },1000);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        var index;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index],pos.x,pos.y,this.width,this.height);
        pop();        
    }

}