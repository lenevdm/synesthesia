//draw the blocks visualisation to the screen
function Blocks(){
    
    //vis name
    this.name = "blocks";

    //draw
    //draw the wave form to the screen
	this.draw = function() {
		push();
		ellipse(width/2,height/2 ,55,55);
		pop();
	};


}

 