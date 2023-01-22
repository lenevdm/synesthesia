//draw the blocks visualisation to the screen
function Fireworks(){
    
    //vis name
    this.name = "fireworks";

    //draw
    //draw the wave form to the screen
	this.draw = function() {
		push();
        fill(255,0,0);
		ellipse(width/2,height/2 ,55,55);
		pop();
	};


}