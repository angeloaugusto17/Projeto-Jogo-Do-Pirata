//classe para criar objeto canhão
class Cannon {
  constructor(x, y, width, height, angle) {
    //caracteristicas
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("assets/canon.png");
    this.cannon_base = loadImage("assets/cannonBase.png");
  }
  
  //funcionalidades
  display() {
    
    //se pressionar tecla da direita o canhão desce
    if (keyIsDown(RIGHT_ARROW) && this.angle < 70  ) {
      this.angle += 1;
    }

    //se pressionar tecla da esquerda o canhão
    if (keyIsDown(LEFT_ARROW) && this.angle > -30 ) {
      this.angle -= 1;
    }

    //exibe o canhão
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon_image,0,0, this.width, this.height);
    pop();

    //exibe a base do canhão
    image(this.cannon_base, 70, 20, 200, 200);
    noFill();
  }
}
