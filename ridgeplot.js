//draw the blocks visualisation to the screen
function Ridgeplot(){
    
    //vis name
    this.name = "ridgeplot";

    //draw
    //draw the ridge plot to the screen
	this.draw = function() {
		push();
        // rect(ridgeStartX, ridgeEndY, ridgeSpectrumWidth, height-ridgeEndY*2);
        // fill(255);
        stroke(255);
        strokeWeight(2);

        if (frameCount % 30 == 0){
            this. addWave();
        }
        for(var i = 0; i < ridgeOutput.length; i++){
            var o = ridgeOutput[i];
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

    this.addWave = function() {
        ridgeOutput.push([
                    {x: ridgeStartX, y: ridgeStartY}, 
                    {x: ridgeStartX+ridgeSpectrumWidth, y: ridgeStartY}
                ])

}


}