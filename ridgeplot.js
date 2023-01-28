// Draw the ridgeplot visualisation to the screen
function Ridgeplot(){
    
    // Visualisation name
    this.name = "ridgeplot";

    // Draw the ridge plot to the screen
	this.draw = function() {
		push();
        strokeWeight(2);
        noFill();

        // Only add a wave line every tenth frame
        if (frameCount % 20 == 0){
            this. addWave();
            
        }
        // Iterate through the array and draw the liens
        for(var i = 0; i < ridgeOutput.length; i++){
            var o = ridgeOutput[i];
            // Assigne a random and changing stroke colour.
            stroke(random(0,255),random(0,255),random(0,255));
            beginShape();
            for(var j = 0; j < o.length; j++){
                o[j].y -= ridgeSpeed;
                vertex(o[j].x, o[j].y);
            }
            endShape();
            if (o[0].y < ridgeEndY){
                ridgeOutput.splice(i, 1);
            }
        }

		pop();
	};

    // Create an array of scaled x and y coordinates 
    // used to draw the ridge plot lines
    this.addWave = function() {
        var w = fourier.waveform();
        var output_wave = [];
        var smallScale = 3;
        var bigScale = 40;

        for (var i = 0; i < w.length; i++){
            // Check for smallScale or bigScale
            if(i % 20 == 0){
                var x = map(i, 0, 1024, ridgeStartX, ridgeStartX + ridgeSpectrumWidth);
                if(i < 1024*0.25 || i > 1024*0.75){
                    var y = map(w[i], -1, 1, -smallScale, smallScale);
                    output_wave.push({
                        x: x, 
                        y : ridgeStartY + y
                    })
                }
                else {
                    var y = map(w[i], -1,   1,-bigScale, bigScale);
                    output_wave.push({
                        x: x,
                        y: ridgeStartY + y
                    })
                }
            }
        }
        ridgeOutput.push(output_wave);

}
}