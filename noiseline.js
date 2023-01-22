//draw the blocks visualisation to the screen
function Noiseline(energy){
    
    //vis name
    this.name = "noiseline";

    //draw
    this.draw = function() {
        push();
        translate(width/2, height/2);
        beginShape();
        noFill();
        stroke(0,255,0);
        strokeWeight(3);
        for (var i = 0; i < 100; i++)
        {
            var x = map(noise(i * noiseStep + prog),0, 1, -250, 250);
            var y = map(noise(i * noiseStep + prog + 1000),0, 1, -250, 250);
            vertex(x, y);

        }
        endShape();
        if (energy > 180)
        {
            prog += 0.05;
        }
        pop();
    }
}

