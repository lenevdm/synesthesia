//global for the controls and input 
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;
// variables for the particles visualisation
var img;

// variables for the ridgeplot
var ridgeOutput ;
var ridgeStartX;
var ridgeStartY;
var ridgeEndY;
var ridgeSpectrumWidth;
var ridgeSpeed;

// variables for the noiseline visualisation
var noiseStep;
var prog;

function preload(){
	sound = loadSound('assets/fever.mp3');
	img = loadImage('assets/neonbg.jpeg');

}

function setup(){
	 createCanvas(windowWidth, windowHeight);
	 background(0);
	 controls = new ControlsAndInput();

	 //instantiate the fft object
	 fourier = new p5.FFT();

	 //initialise variables
	 noiseStep = 0.01;
     prog = 0;
	 ridgeOutput = [];
	 ridgeStartX = width/5;
	 ridgeEndY = height/5;
	 ridgeStartY = height - ridgeEndY;
	 ridgeSpectrumWidth = (width/5)*3;
	 ridgeSpeed = 0.7;
 
	 //create a new visualisation container and add visualisations
	 vis = new Visualisations();
	 vis.add(new Spectrum());
	 vis.add(new WavePattern());
	 vis.add(new Needles());
	 vis.add(new Ridgeplot());
	 vis.add(new Blocks());
	 vis.add(new Noiseline());
	//  vis.add(new ParticleWave());
	//  vis.add(new Sine());
	//  vis.add(new Perlin());

}

function draw(){
	background(0);
	//draw the selected visualisation
	vis.selectedVisual.draw();
	//draw the controls on top.
	controls.draw();
}

function mouseClicked(){
	controls.mousePressed();
}

function keyPressed(){
	controls.keyPressed(keyCode);
}

//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selectedVisual.hasOwnProperty('onResize')){
		vis.selectedVisual.onResize();
	}
}
