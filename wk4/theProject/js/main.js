window.onload = function(){
	$('#iciToggle').click(function(){
		$('.iciMenu').toggle();
	})

	$('#vernsToggle').click(function(){
		$('.vernsMenu').toggle();
	})

var canvas = document.getElementById('contactCanvas');
	var stage = new createjs.Stage(canvas);
	

	// Compact the code we can specify them all at once
	var sentence = new createjs.Text("Ice Cream Island ", 'normal 30px "Helvetica Neue"', '#7a5527');
	var sentence2 = new createjs.Text("Vern's Dog House", 'normal 30px "Helvetica Neue"', '#7a5527');
	var sentence3 = new createjs.Text("Open Daily: 11am - 9pm", 'normal 15px "Helvetica Neue"', '#7a5527');
	var sentence4 = new createjs.Text("Phone Orders: (585) 335-4797", 'normal 15px "Helvetica Neue"', '#7a5527');
	var sentence5 = new createjs.Text("Address: 130 Vilage Plaza, Dansville, New York", 'normal 15px "Helvetica Neue"', '#7a5527');

	sentence2.y = 30;
	sentence3.y = 70;
	sentence4.y = 100;
	sentence5.y = 130;



	// Add to stage
	stage.addChild(sentence);
	stage.addChild(sentence2);
	stage.addChild(sentence3);
	stage.addChild(sentence4);
	stage.addChild(sentence5);

	// Update stage
	stage.update();
		

}	