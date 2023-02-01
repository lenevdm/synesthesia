var particles = []; 

function ParticleWave(){
    this.name = "particlewave";

    push();
    
    this.draw =function()
    {
      translate(width/2, height/2);
      
      // Beat detection
      fourier.analyze();
      amp = fourier.getEnergy(20, 200);
    
      // FFT waveform
      var wave = fourier.waveform();
      
      //Create the waveform circle
      stroke(255, 16, 240); //neon pink
      strokeWeight(2);
      noFill();
      for (var t = -1; t <= 1; t+= 2)
      {
        beginShape()
        for (var i = 0; i <= 180; i++)
        {
          var index = floor(map(i, 0, 180, 0, wave.length - 1));
          var r = map(wave[index], -1, 1, 150, 350);
          var x = r * Math.sin(radians(i)) * t;
          var y = r * Math.cos(radians(i));
          vertex(x, y);
        }
        endShape()
      }
      

      //Draw a particle every new frame
      var p = new Particle();
      particles.push(p);

      for (var j = particles.length - 1; j >= 0; j--)
      {
        if (!particles[j].edges())
        {
          particles[j].update(amp > 230);
          particles[j].show();
        }
        else
        {
          particles.splice(j, 1);
        }
      }  
    }
    pop();
    
    //Particle generator
    class Particle {
      constructor(){
        this.pos = p5.Vector.random2D().mult(250);
        this.vel = createVector(0, 0);
        this.acc = this.pos.copy().mult(random(0.0001, 0.00001));
    
        this.w = random(4, 10);
    
        this.color = [random(1, 200),0,random(1, 200)];
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