//Draws the Perlin noise visualisation
var start = 0; 

function Perlin() {
	//vis name
	this.name = "perlin";

	//draw the wave form to the screen
	this.draw = function() {
        noStroke();

        translate(width / 2, height / 2); 

        var space = 1; //This can be changed to have fewer or more lines. 

        for (var i = 0; i < 360; i += space ){
            //these offsets could be values from the music
            var xoff = map(cos(i), -1, 1, 0, 3); 
            var yoff = map(sin(i), -1, 1, 0, 3);

            var n = noise(xoff + start, yoff + start);

            var h = map(n, 0, 1, -150, 150);

            //colours
            var r = map(sin(i), -1, 1, 0, 255);
            var g = map(h, -150, 150, 0, 255);
            var b = map(n, 0, 1, 255, 0);
            
            rotate(space);

            fill(r,g,b);
            rect(200, 0, h, 1);
        }

        start += 0.01; //this value can be changed to affect how fast the wobble moves.
    };
        
        
    
}