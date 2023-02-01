//Particle generator
class Particle {
    constructor(){
      this.pos = p5.Vector.random2D().mult(250);
      this.vel = createVector(0, 0);
      this.acc = this.pos.copy().mult(random(0.0001, 0.00001));
  
      this.w = random(2, 5);
  
      this.color = 255;//[random(1, 255),random(1, 255),random(1, 255)];
    }
  
    //Make the particles move faster or slower depending on the amplitude of the track
    update(cond){
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      if (cond) {
        this.pos.add(this.vel);
        this.pos.add(this.vel);
        this.pos.add(this.vel);
      }
    }
    //Delete the particles from the array when they reach the edge of the screen.
    edges(){
      if (this.pos.x < -width / 2 || this.pos.x > width / 2 || this.pos.y < -height / 2 || this.pos.y > height / 2){
        return true;
      }
      else { 
        return false;
      }
    }
  
    show(){
      noStroke();
      fill(this.color);
      ellipse(this.pos.x, this.pos.y, this.w);
    }
  }