window.onload = function() {
	// Set up stage and canvas 
	var stage = new createjs.Stage('canvas1');
	// Set up new shape
	var shape = new createjs.Shape();
	
	shape.graphics.beginStroke('blue');
	shape.graphics.setStrokeStyle(10, 'round', 'round');

	// Draw triangle using lineTo();
	shape.graphics.moveTo(50,50);
	shape.graphics.lineTo(250,250);
	shape.graphics.lineTo(50,250);
	shape.graphics.closePath();

	// Compact that code from together
	shape.graphics.beginStroke('red').setStrokeStyle(10, 'round', 'round').moveTo(50,50).lineTo(250,250).lineTo(50,250).closePath();

	// Compact AND shortcut 
	// Creates a much smaller file but is super hard to read
	shape.graphics.s('orange').ss(10,1,1).mt(50,50).lt(250,250).lt(50,250).cp();




	stage.addChild(shape);
	stage.update();

}