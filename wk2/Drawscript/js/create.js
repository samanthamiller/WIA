window.onload = function() {
	console.log('test');
	//get canvas element
	var canvas = document.getElementById("canvas1");
	
	//Create our stage wrapped around our canvas
	var stage = new createjs.Stage(canvas);
	
	//create a graphic 
	var shape = new createjs.Shape();
	
	//Draw The Shape
	// Prefix is shape.graphics.

shape.graphics.f("rgba(0,0,0,254)").p("EBDCBIgYAKAKAKAKAAAKYAAAUAAAKAAAKIgeAyYgKAKgKAKgKAAYgKAAgUAAgKgKIhug8IAACCYAAAKAAAKgKAKYgKAKgKAKgUAAIgyAAYgKAAgUgKgKgKYgKgKAAgKAAgKIAAiCIhuA8YgKAKgKAAgUAAYgKAAgKgKgKgKIgUgyYgKgKAAgKAAgUYAAgKAKgKAKgKIBug8Ihug8YgKgKgKgKAAgKYAAgUAAgKAKgKIAUgyYAKgKAKgKAKAAYAUgKAKAKAKAAIBuA8IAAh4YAAgKAAgKAKgKYAKgKAUgKAKAAIAyAAYAUAAAKAKAKAKYAKAKAAAKAAAKIAAB4IBug8YAKAAAUgKAKAKYAKAAAKAKAKAKIAeAyYAAAKAAAKAAAUYAAAKgKAKgKAKIhuA8IBuA8").cp().ef();



	stage.addChild(shape);
	// Then we update the stage to draw it up
	stage.update();

}