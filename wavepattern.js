// Draw the waveform to the screen
function WavePattern() {
	// Visualiation name
	this.name = "wavepattern";
	
	// Draw the wave form to the screen
	this.draw = function() {
		push();

		// Display the background image
		image(bg, 0, 0);
		
		// Settings for the waveform
		noFill();
		stroke(221,160,221);
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