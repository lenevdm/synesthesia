var particles = []; 



function ParticleWave(){
    this.name = "particlewave";

    
    angleMode(DEGREES)
    

    this.draw =function(){
      stroke(255);
      ellipse(width / 2, height / 2, 3,);

      push();
      translate(width/2, height/2);
      pop();

      //Beat detection
      fourier.analyze();
      amp = fourier.getEnergy(20, 200);

      //Draw and rotate background image with beats
      push();
      if (amp > 230){
        rotate(random(-0.5, 0.5));
      }
      image(img, 0, 0, width, height);
      pop();
      
      //Add transparent overlay that will change alpha with amplitude
      var alpha = map(amp, 0, 255, 180, 150);
      fill(0, alpha);
      noStroke();
      rect(0, 0, width, height);
    
      //capture the FFT waveform data
      var wave = fourier.waveform();
      
      //Create the waveform circle
      push();
      stroke(255);
      noFill();
      for (var t = -1; t <= 1; t+= 2){
        beginShape()
        for (var i = 0; i <= 180; i++){
          var index = floor(map(i, 0, 180, 0, wave.length - 1));
          var r = map(wave[index], -1, 1, 150, 350);
          var x = r *sin(i) * t;
          var y = r * cos(i);
          vertex(x, y);
        }
        endShape()
      }
      pop();
      
      //Draw a particle every new frame
      var p = new Particle();
      particles.push(p);

      for (var j = particles.length - 1; j >= 0; j--){
        if (!particles[j].edges()){
          particles[j].update(amp > 230);
          particles[j].show();
        }
        else{
          particles.splice(j, 1);
        }
  }
      
    } //draw

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
    
}