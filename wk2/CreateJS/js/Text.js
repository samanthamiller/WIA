window.onload = function() {
	var canvas = document.getElementById('canvas1');
	var stage = new createjs.Stage(canvas);
	
	// Create a variable to hold our text
	var sentence = new createjs.Text();

	// Use the text property of the text
	sentence.text = 'Fish lips!';

	// Font properties - most normal css
	sentence.font = 'bold 30px "Helvetica Neue"';

	// Pick a color
	sentence.color = 'blue';

	// Text is a display object, it inherits ALL of the properties of display objects
	sentence.x = 150;
	sentence.y = 50;
	// sentence.rotation = 30;

	// Text also has special properties 
	// .textAlign - 'left', 'right', 'center'
	sentence.textAlign = 'center';	

	// Wrap our text
	sentence.lineWidth = 50;

	// Change the space inbetween each of the lines
	sentence.lineHeight = 50;

	// Stroke the outside of the text 
	sentence.outline = true;

	// Compact the code we can specify them all at once
	var sentence2 = new createjs.Text('Fish Hips!', 'bold 30px "Helvetica Neue"', 'yellow');

	// Add to stage
	stage.addChild(sentence);
	stage.addChild(sentence2);
	// Update stage
	stage.update();
}