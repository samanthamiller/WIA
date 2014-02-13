window.onload = function() {
	// Set up stage
	var stage = new createjs.Stage('canvas1');
	// Set up shape
	var shape = new createjs.Shape();
	// Set up stroke
	shape.graphics.beginStroke('orange');
	// Set up stroke styles
	shape.graphics.setStrokeStyle(10, 0, 1);
	// drawCircle(x,y,radius)
	shape.graphics.drawCircle(100,100,50);
	// drawEllipse(x,y,width,height);
	shape.graphics.drawEllipse(75, 200, 150, 50);
	// arc(x,y,radius,startingAngle,endAngle, anticlockewise-1 || clockwise-0)
	shape.graphics.beginStroke('red');
	shape.graphics.arc(100,100,75,0,90*(Math.PI/180), 1);

	stage.addChild(shape);
	stage.update();

}