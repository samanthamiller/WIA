window.onload = function() {
	// First we need to set up our canvas and stage 
	var stage = new createjs.Stage('canvas1');

	// Lets draw a rectangle 
	// Create a new shape first
	var rect1 = new createjs.Shape();

	// Fill color
	rect1.graphics.beginFill('purple');
	// Weird fills
	rect1.graphics.beginFill(createjs.Graphics.getRGB(162, 216, 225));
	rect1.graphics.beginFill('rgb(162, 216, 225)');

	// Linear gradient
	rect1.graphics.beginLinearGradientFill(['yellow','purple', 'red'], [0,.5,1], 50,50,50,150);

	// Radial gradient
	rect1.graphics.beginRadialGradientFill(['purple','pink','blue'], [0,.5,1], 100,100, 0, 100, 100, 100);

	// Draw out the rectangle 
	rect1.graphics.rect(50,50,100,100);

	// Add it to the stage
	stage.addChild(rect1);

	// Update the stage
	stage.update();
			
}