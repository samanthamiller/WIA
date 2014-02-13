window.onload = function() {
	console.log('test');
	//get canvas element
	var canvas = document.getElementById("canvas1");
	
	//Create our stage wrapped around our canvas
	var stage = new createjs.Stage(canvas);
	
	//create a graphic 
	var shape = new createjs.Shape();
	
	//Draw The Shape


	stage.addChild(shape);
	// Then we update the stage to draw it up
	stage.update();

}