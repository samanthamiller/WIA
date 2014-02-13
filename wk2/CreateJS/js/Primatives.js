window.onload = function() {
	// Set up stage and canvas
	var stage = new createjs.Stage('canvas1');
	// Create shape
	var shape = new createjs.Shape();
	// Set up stroke
	shape.graphics.beginStroke('blue');
	// Set up stroke style
	shape.graphics.setStrokeStyle(5,1,1);
	// drawPolyStar(x,y,radius,#ofSides, pointSize(0-1), angle)
	shape.graphics.drawPolyStar(75,75,50,10,.65,0);
	shape.graphics.drawCircle(75,75,50);

	// Draw a triangle
	shape.graphics.drawPolyStar(550,75,59,3,0,-90);

	var shape2 = new createjs.Shape();
	shape2.graphics.beginFill('red');
	shape2.graphics.drawPolyStar(250,250,50,3,0,-90);

	stage.addChild(shape);
	stage.addChild(shape2);

	//Add a listener to that specific shape
	// addEventListener or .on()
	shape2.addEventListener('click', function(event){
		console.log('I was clicked!');
	});


	stage.update();

}