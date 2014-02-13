window.onload = function() {
	var stage = new createjs.Stage('canvas1');
	var rect1 = new createjs.Shape();
	rect1.graphics.beginFill('red').drawRect(0,0,100,100);
	rect1.regX = 50;
	rect1.regY = 50;
	rect1.x = 100;
	rect1.y = 100;

	stage.addChild(rect1);
	stage.update();		

	// The ticker is a centeralized 'tick' || 'heartbeat' that is broadcast out at a specific interval.
	// Listeners can hear the tick and create an event that will happen for each tick

}