window.onload = function() {
	// Set up canvase and stage
	var canvase = document.getElementById('canvas1');
	var stage = new createjs.Stage(canvase);

	// Create a shape 
	var shape = new createjs.Shape();

	// Basic stroke color
	shape.graphics.beginStroke('purple');

	// Set up stroke styles
	// Can take 1-4 parameters 
	// setStrokeStyle(thicknes, caps, joints, miter);
	// Caps 0-butt 1-round 2-square
	// Joins 0-miter 1-round 2-bevel
	shape.graphics.setStrokeStyle(10, 'round', 1);

	// Draw a shape
	// Start with moveTo();
	shape.graphics.moveTo(25, 25);

	// Straight line using lineTo();
	// shape.graphics.lineTo(250, 25);
	// quadraticCurveTo(cpx, cpy, x, y);
	// shape.graphics.quadraticCurveTo(50, 175, 250, 250);

	// arcTo(x1, y1, x2, y2, radius);
	// shape.graphics.arcTo(100, 50, 100, 500, 60);

	// bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
	shape.graphics.bezierCurveTo(100, 50, 100, 200, 250, 250);

	shape.graphics.lineTo(50, 250);
	// Closed path use the .closePath();
	shape.graphics.closePath();

	// Add to stage
	stage.addChild(shape);

	// Update our stage
	stage.update();
}