//draw the Fireworks visualisation to the screen with beat detection
function Fireworks(){
    
    //vis name
    this.name = "fireworks";

    //draw
	this.draw = function() {
		
        var spectrum = fourier.analyze();

        if (beatDetect.detectBeat(spectrum))
        {
            fill(255,0,0);
            ellipse(width/2, height/2, 300, 300);
        }
        
        


        
		
	};


}