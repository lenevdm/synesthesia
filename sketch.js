// Global variables 
// Controls and input 
var controls = null;

// Visualisations container
var vis = null;

// p5 sound object
var sound = null;

// p5 fast fourier transform
var fourier;

//Waveform backgroung graphic
var backgroundImage ;

// Particles visualisation
var img;

// Ridgeplot
var ridgeOutput ;
var ridgeStartX;
var ridgeStartY;
var ridgeEndY;
var ridgeSpectrumWidth;
var ridgeSpeed;

// Fireworks
// var sampleBuffer = []; 
var beatDetect;
var fireworks;

// Amplitude
var amplitude;
var amplitudes;
var noiseStep;
var prog;


function preload(){
	sound = loadSound('assets/fever.mp3');
	img = loadImage('assets/neonbg.jpeg');
	backgroundImage = loadImage("assets/sw.jpg");

}

function setup(){
	 createCanvas(windowWidth, windowHeight);
	 background(0);
	 
	 controls = new ControlsAndInput();

	 //instantiate the fft object
	 fourier = new p5.FFT();

	 // constrain the framerate
	 frameRate(60);

	 // do beat detection
	 beatDetect = new BeatDetect();

	 // fireworks
	//  fireworks = new Fireworks();
	 

	 //initialise variables
	 noiseStep = 0.01;
     prog = 0;
	 ridgeOutput = [];
	 ridgeStartX = width/5;
	 ridgeEndY = height/5;
	 ridgeStartY = height - ridgeEndY;
	 ridgeSpectrumWidth = (width/5)*3;
	 ridgeSpeed = 0.7;
	amplitude = new p5.Amplitude();
	amplitudes = [];
	for (var i = 0; i < 512; i++)
	{
		amplitudes.push(0);
	}
	 
	 //create a new visualisation container and add visualisations
	 vis = new Visualisations();
	 vis.add(new Spectrum());
	 vis.add(new WavePattern());
	 vis.add(new Needles());
	 vis.add(new Ridgeplot());
	//  vis.add(new Fireworks());
	 vis.add(new Amplitude());
	 vis.add(new ParticleWave());
	//  vis.add(new Sine());
	 vis.add(new Perlin());

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
