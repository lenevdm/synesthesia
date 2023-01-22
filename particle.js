function particle(x, y, colour, angle, speed){

    var x = x;
    var y =y;
    var colour = colour;
    var angle = angle;

    this.speed = speed;

    this.draw = function(){
        update();
        fill(colour);
        ellipse(x, y, 10, 10);
    }

    function update(){
        this.speed -= 0.1;
        //TODO update x and y
    }
}