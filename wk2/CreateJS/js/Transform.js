window.onload = function() {
	var stage = new createjs.Stage('canvas1');
	var shape = new createjs.Shape();
	shape.graphics.beginFill('yellow');
	shape.graphics.drawRect(50,50,100,100);
	// Rotation
	// shape.rotation = 30;
	// Move the registration pints
	shape.regX = 100; // Origin point + width/2
	shape.regY = 100; // Origin point + height/2
	// shape.rotation = 30;
	// Change it's position by using x and y properties
	shape.x = 200;
	shape.y = 100;

	// Starting the rect at (0,0,100,100), then regX and regY = 50
	// draw rectangle center on the original origian and remove the regx and regY (-50,-50,100,100)

	// Scaling
	// .5 = 50% 2 = 200%
	shape.scaleX = 2;
	shape.scaleY = .5;

	// Alpha - transparancy of the object
	// When alpha is 0 the object is transparent but is still there and can be clicked.
	shape.alpha = 1;

	// Visable - Either a 1 or 0 1) Visable 0) Not Visable
	// When visable is 0 the object is never drawn and cannot be clicked
	shape.visable = 1;

	// Skewing
	shape.skewX = 200;
	shape.skewY = 150;


	stage.addChild(shape);
	stage.update();
	
	
	
}