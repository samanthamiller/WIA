window.onload = function() {
	// First we will create a stage

	// The stage contains all of the other display objects and containers we will be putting on our canvas
	// Either pass the ID of the canvas or a refrence to it.

	var canvas = document.getElementById('canvas1');

	// Create our stage, wich wraps the canvas
	// .createjs is a namespace. Helps avoid confusion from diffrent libraries
	var stage = new createjs.Stage('canvas1');

	// Create a blue circle
	var circleGraphic = new createjs.Graphics();

	// Draw a circle with a radius of 50, centered at (0,0) - relitive to the shapes position
	circleGraphic.beginFill('blue');
	circleGraphic.drawCircle(0,0, 50);
	
	// Create a new shape instance
	// Shapes are display objects that draw vector graphics onto our stage
	// Shape type contains the methods we use to define our vector shapes
	var circleShape = new createjs.Shape(circleGraphic);	


	circleShape.x = 50;
	circleShape.y = 50;

	// Add the shape to our stage's display list container 
	// use .addChild();
	stage.addChild(circleShape);

	// The canvas wont show until it is updated
	stage.update();	
}