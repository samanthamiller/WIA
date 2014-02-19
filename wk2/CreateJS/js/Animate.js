window.onload = function() {
	var canvas = document.getElementById('canvas');
	var stage = new createjs.Stage(canvas);

	var ship = new createjs.Bitmap('images/ship.png');

	// Center it 
	var centerX = canvas.width/2;
	var centerY = canvas.height/2;
	// Set our X and Y 
	ship.x = centerX;
	ship.y = centerY;
	// Set our regitration point				
	ship.regX = 50;
	ship.regY = 50;

	// Add child to stage
	stage.addChild(ship);

	// Set the frame rate
	createjs.Ticker.setFPS(30);

	// Add event listner
	createjs.Ticker.addEventListener('tick', tick);

	function tick(e){
		// ship.x = centerX + (Math.random()-.5) * 50;
		// ship.y = centerY + (Math.random()-.5) * 50;


		// Create wave motions using sin and cosin
		// ship.x = centerX + Math.sin(3);
		// Dividing number controles speed and the multiplication number controls distance away from center 
		// ship.x = centerX + Math.sin(createjs.Ticker.getTicks()/35)*300;
		// ship.y = centerY + Math.sin(createjs.Ticker.getTicks()/5)*100;

		ship.x = centerX + (Math.sin(createjs.Ticker.getTicks()/7)*100);
		ship.y = centerY + (Math.cos(createjs.Ticker.getTicks()/7)*100);



		// Update stage
		stage.update();	
	}
}