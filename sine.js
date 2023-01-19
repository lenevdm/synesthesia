//Draws the sine wave structure visualisation
function Sine() {
	//vis name
	this.name = "sine";

	//draw the wave form to the screen
	this.draw = function() {
        rotateX(60);
        noFill();
        stroke(255);
  
        for (var i = 0; i < 30; i++){
            var r = map(sin(frameCount), -1, 1, 0, 255);
            var g = map(i, 0, 30, 0, 255);
            var b = map(cos(frameCount), -1, 1, 255, 0);
        
            stroke(r,g,b);
        
            rotate(5); //adjust this 5
        
            beginShape()
                for (var j = 0; j < 360; j+=60){ //adjust this 60
                    var rad = i * 8;
                    var x = rad * cos(j);
                    var y = rad * sin(j);
                    var z = sin(frameCount * 2 + i * 20) * 50; //adjust any of these values
                    vertex(x,y,z);
                }
            endShape(CLOSE)
        }   
    };
}