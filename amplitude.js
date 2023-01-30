// Draw the Amplitude visualisation to the screen
function Amplitude(){
    
    //vis name
    this.name = "amplitude";

    //draw
	this.draw = function() {

		if (sound.isPlaying())
		{
			push();

			var a = amplitude.getLevel();
	
			// Add amplitudes to the array and remove one at the end
			amplitudes.push(a);
			amplitudes.shift();
	
			// Map the aplitude input to draw an ellipse
			var d = map(a, 0, 0.15, 50, 250)
			noStroke();
			fill(255, 105, 180);
			ellipse(width/2,height/2, d);
	
			// Draw the amplitude as a string of ellipses
			noStroke();
			fill(255, 0, 255)
			for (var i = 0; i < amplitudes.length; i++)
			{
				var h = map(amplitudes[i], 0, 0.15, 0, 100);
				ellipse(i * 2, height/2 + h,5);
			}
	
			// Green noise line
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
	
			prog += 0.05;
			pop();
		}
		
	};


}

 