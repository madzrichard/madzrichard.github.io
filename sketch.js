var circle;
var fullWaves;
var waves;
var whiteMask;
var sun;
var madison;
var richard;

var logoArray = [];

var counter1 = -285;
var counter2 = 230;
var counterSunUp = 100;
var counterMadison = 150
var counterRichard = -150
var logoIndex = 0;

var showLogo = false;
var sunUp = false;
var nameAnimation = false;
var interactStart = false;



function setup() {
	createCanvas(400, 400);
	circle = loadImage("pngs/circle.png");
	waves = loadImage("pngs/waves4.png");
	fullWaves = loadImage("pngs/fullwaves.png");
	sun = loadImage("pngs/sun.png");
	madison = loadImage("pngs/name1.png");
	richard = loadImage("pngs/name2.png");
	whiteMask = loadImage("pngs/whitemask.png");
	logoArray.push(loadImage("pngs/bluelogo.png"));
	logoArray.push(loadImage("pngs/redlogo.png"));
	logoArray.push(loadImage("pngs/orangelogo.png"));
	
}



function draw() {
	background(255);

	image(circle, 0, counter1, 398, 398);
	if (counter1 <= 0) {
		counter1 = counter1 + 3;
	}
	
	if(showLogo == false){
	image(fullWaves, 0, counter2, 400, 400);
	}
	
	if (counter2 >= 55 && counter1 > -20) {
		counter2 = counter2 - 3;
	} 
	
	if(counter2 == 53){
		showLogo = true;
	}


	if(sunUp == true){
		image(sun,-1,counterSunUp,400,400);
		if(counterSunUp >= 0 ){
		counterSunUp = counterSunUp - 1;
		}
		if(counterSunUp == 0){
			nameAnimation = true;
		}
	}


	if (showLogo == true) {
		image(waves, -1, 0, 400, 400);
		image(whiteMask, -.7, 0, 400, 400);
		//fadeInWaveCounter == imageArray.length
		sunUp = true;
	}
	
	if(nameAnimation == true){
		image(madison,counterMadison,0,400,400);
		image(richard,counterRichard,0,400,400);
		if(counterMadison >= 0){
			counterMadison = counterMadison - 4;
		}
		if(counterRichard <= 0){
			counterRichard = counterRichard + 4;
		}

		
		if(counterMadison == -2){
			interactStart = true;
		}
		
		if(interactStart == true){
		 image(logoArray[logoIndex],0,0,400,400);
		}
	}

}

	

function mousePressed(){
	if(interactStart == true){
		logoIndex = logoIndex + 1
		if (logoIndex > logoArray.length - 1) {
		 logoIndex = 0
	  	}
	}
	
}
	

function keyPressed(){
	if(interactStart == true){
		showLogo = false;
		sunUp = false;
		nameAnimation = false;
		interactStart = false;
		
		counter1 = -285;
		counter2 = 230;
		counterSunUp = 100;
		counterMadison = 150
		counterRichard = -150
		logoIndex = 0;

	}
}
