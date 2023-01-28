// Draw a coloured spectrum of rectangles on the screen
function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		// Apply the fourier analysis to the spectrum variable.
		var spectrum = fourier.analyze();
		noStroke();
	
		fill(0,0,255)
		for (var i = 0; i< spectrum.length; i++){
			
			// Map colours based on the spectrum
			var g = map(spectrum[i], 0, 255, 255, 0);
			fill(spectrum[i], 0, g);
			
			// Draw rectagles on the screen based on the frequency bins
			var x = map(i, 0, spectrum.length, 0, width)+ (width/spectrum.length)*i + 3*i;
			var h = -height + map(spectrum[i], 0, 255, height, 0);
			rect(x, height, (width / spectrum.length)*1.5, h*1.5);
		}
		
		pop();
	};
}
