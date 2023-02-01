// Draw the waveform to the screen
function WavePattern() {
	// Visualiation name
	this.name = "wavepattern";
	
	// Draw the wave form to the screen
	this.draw = function() {
		push();

		//Beat detection
		fourier.analyze();
		amp = fourier.getEnergy(20, 200);
  
		//Drawbackground image
		image(backgroundImage, 0, 0, windowWidth, windowHeight);
	
		//Add transparent overlay that will change alpha with amplitude
		var alpha = map(amp, 0, 255, 10, 150);
		fill(0, alpha);
		noStroke();
		rect(0, 0, width, height);
		
		// Settings for the waveform
		noFill();
		stroke(43, 234, 239); //light teal
		strokeWeight(3);

		beginShape();
		// Calculate the waveform from the fft.
		var wave = fourier.waveform();
		for (var i = 0; i < wave.length; i++) {
			// For each element of the waveform map it to screen
			// coordinates and make a new vertex at the point.
			var x = map(i, 0, wave.length, 0, width);
			var y = map(wave[i], -1, 1, 0, height);

			vertex(x, y);
		}

		endShape();
		pop();
	};
}