//classe para criar a bola do canhão
class CannonBall {
  constructor(x, y) {
    //caracteristicas
    var options={
      isStatic:true
    }

    this.r = 30;
    this.body = Bodies.circle(x,y,this.r,options);
    this.image = loadImage("assets/cannonball.png");
    this.trajectory = [];
    World.add(world,this.body);

  }

  //funcionalidades

  //função de atirar
  shoot() {
    //define o angulo da bola o mesmo do canhão
    var newAngle = cannon.angle - 30;
    newAngle = newAngle * (3.14/180);


    //define velocidade da bola
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);

    //da gravidade para bola
    Matter.Body.setStatic(this.body,false);
    Matter.Body.setVelocity(this.body, 
    { x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});

  }

  //função de exibir a bola
  display() {

    var angle = this.body.angle;
    var pos = this.body.position;


    push();
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r,this.r);
    pop();

    if(this.body.velocity.X > 0 && pos.x > 10){
      var position = [pos.x,pos.y];
      this.trajectory.push(position);
    }

    for(var i = 0; i < this.trajectory.lenght; i++){
      image(this.image,this.trajectory[i][0],this.trajectory[i][1],5);
    }
  }
}
