window.onload = function() {
	// Set up the stage
	var stage = new createjs.Stage('canvas1');

	// Create a graphic 
	var shape = new createjs.Shape();

	// Create a stroke
	shape.graphics.beginStroke('purple');
	shape.graphics.setStrokeStyle(10, 0, 1);

	// Draw a simple rectangle
	shape.graphics.rect(50, 50, 300, 300);

	// Rounded rectangle
	// drawRoundRect(x,y,w,h,cornerRadius);
	// cornerRadius = how round the corners are 
	shape.graphics.beginStroke('blue');
	shape.graphics.drawRoundRect(75,75,250,250,50);

	// Make a complex rounded rectangle
	shape.graphics.beginStroke('pink');
	// drawRoundRectComplex(x,y,w,h,cornerRadius, topL, topR, bottomL, bottomR);
	shape.graphics.drawRoundRectComplex(100,100,200,200,50,0,50,0);
	shape.graphics.beginStroke('yellow');
	shape.graphics.drawRoundRectComplex(125,125,150,150,0,50,0,50);

	// Add to stage
	stage.addChild(shape);

	// Update stage
	stage.update();
	
}