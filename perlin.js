//Draws the Perlin visualisation using the noise function
var start = 0; 

function Perlin() {
	// Visualisation name
	this.name = "perlin";

	// Draw 
	this.draw = function() {
        push();
        noStroke();
        translate(width / 2, height / 2);
        
        var space = 2; //This can be changed to have fewer or more lines. 

        for (var i = 0; i < 360; i += space ){
            var xoff = map(cos(i), -1, 1, 0, 3); 
            var yoff = map(sin(i), -1, 1, 0, 3);

            var n = noise(xoff + start, yoff + start);

            var h = map(n, 0, 1, -150, 150);

            // Set the colours
            var r = map(sin(i), -1, 1, 0, 255);
            var g = map(h, -150, 150, 0, 255);
            var b = map(n, 0, 1, 255, 0);
            
            rotate(space);

            fill(r,g,b);
            rect(150, 0, h, 1);
        }

        // Use the amplitude to affect how fast the animation moves
        var a = amplitude.getLevel();
        var d = map(a, 0, 0.15, 0, 1)
        start += 0.01 * d; 
        pop();
    };
        
}