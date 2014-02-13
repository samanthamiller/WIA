window.onload = function() {
	var stage = new createjs.Stage('canvas1');
	var rect1 = new createjs.Shape();
	rect1.graphics.beginFill('red').drawRect(0,0,100,100);
	rect1.regX = 50;
	rect1.regY = 50;
	rect1.x = 100;
	rect1.y = 100;

	stage.addChild(rect1);
		

	// The ticker is a centeralized 'tick' || 'heartbeat' that is broadcast out at a specific interval.
	// Listeners can hear the tick and create an event that will happen for each tick
	// Set the interval by setting the frame rate
	createjs.Ticker.setFPS(100); // FPS(frames/second) defaults to 20
	// Add and eventListener that will hear the tick
	createjs.Ticker.addEventListener('tick', tick);

	function tick(){
		// This function will be called 30 FPS
		// console.log('I am ticking');
		rect1.rotation +=8;
		// rect1.alpha -= .05;
		// rect1.x ++;
		// rect1.y ++;
		// rect1.skewX += 20;
		// rect1.scaleX += .1;
		stage.update();	
	}
}