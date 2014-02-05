/*
     Name: Samantha Miller
     Date: February 4, 2014
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/
window.onload = function(){

/*******************************************
FILE SETUP

// Setup up 6 different Canvases in index.html one for each problem.
// Link the main.js file
// Setup the call to that canvas and get it's 2d context


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue. -
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

	var theCanvas = document.getElementById('Canvas1');
		if(theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			if(ctx) {
				// Draw here
				ctx.fillStyle = 'rgb(70,130,180)';
				ctx.strokeStyle = 'black';
				ctx.lineWidth = 5;
			
				ctx.strokeRect(0,0,50,100);
				ctx.fillRect(0,0,50,100);
		}
	} // End of Canvas1
/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/

//Draw Circle here

	var theCanvas = document.getElementById('Canvas2');
		if(theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			if(ctx) {
				// Draw here
				ctx.fillStyle = 'rgba(181,75,75,.5)';
				ctx.strokeStyle = 'black';
				ctx.lineWidth = '30';

				var degrees = 360;
				var radians = (Math.PI/180)*degrees;
				ctx.beginPath();
				ctx.arc(50, 50, 20, 0, radians);
				ctx.fill();
				ctx.stroke();
			}
		} // End of Canvas2
/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/

//Draw Star here

	var theCanvas = document.getElementById('Canvas3');
		if(theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			if(ctx) {
				// Draw here

				ctx.fillStyle = 'rgb(230,13,180)';
				ctx.strokeStyle= 'rgb(230,230,13)';
				ctx.lineWidth= 5;
				
				ctx.beginPath();
				ctx.moveTo(100, 100);
				ctx.lineTo(139,96);
	            ctx.lineTo(157,60);
	            ctx.lineTo(174,96);
	            ctx.lineTo(213,101);
	            ctx.lineTo(185,129);
	            ctx.lineTo(192,168);
	            ctx.lineTo(157,150);
	            ctx.lineTo(122,168);
	            ctx.lineTo(128,129);
	            ctx.closePath();
				ctx.stroke();
				ctx.fill();
			}
		} // End of Canvas3

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

	var theCanvas = document.getElementById('Canvas4');
		if(theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			if(ctx) {
				// Draw here
				ctx.fillStyle = 'rgb(76, 0, 153)';
				ctx.strokeStyle= 'rgb(32,32,32)';
				ctx.lineWidth= 5;

				
				ctx.beginPath();
				ctx.arc(350,150,100,0, 1*Math.PI, true);
				ctx.bezierCurveTo(250,150,275,100,300,150);
				ctx.bezierCurveTo(300,150,325,100,350,150);
				ctx.bezierCurveTo(350,150,375,100,400,150);
				ctx.bezierCurveTo(400,150,425,100,450,150);
				ctx.stroke();
				ctx.fill();
				
			}
		} // End of Canvas4

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

	var theCanvas = document.getElementById('Canvas5');
		if(theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			if(ctx) {
				var textString = "Fish Lips";
				ctx.font = "32pt corbel";
				ctx.fillStyle = 'rgb(230,42,13)';
				ctx.fillText(textString, 275, 150);

			}
		} // End of Canvas5

/*******************************************
PART 6

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

	var theCanvas = document.getElementById('Canvas6');
		if(theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			if(ctx) {

				// Circle Style
				ctx.fillStyle = 'rgb(204,204,0)';
				ctx.strokeStyle = 'black';
				ctx.lineWidth = '5';
				// Draw Circle 
				var degrees = 360;
				var radians = (Math.PI/180)*degrees;
				ctx.beginPath();
				ctx.arc(350, 150, 60, 0, radians);
				ctx.fill();
				ctx.stroke();

				// Small Circle Style
				ctx.fillStyle = 'black';
				// Draw Small Circle
				var degrees = 360;
				var radians = (Math.PI/180)*degrees;
				ctx.beginPath();
				ctx.arc(327, 145, 5, 0, radians);
				ctx.arc(367, 145, 5, 0, radians);
				ctx.fill();

				// Rectangle style
				ctx.fillStyle = 'black';
				ctx.lineWidth = 5;
				// Draw Rectangle 
				ctx.fillRect(320,130,15,5);
				ctx.fillRect(360,130,15,5);

				// Bezier style
				ctx.strokeStyle= 'rgb(32,32,32)';
				ctx.lineWidth= 5;
				// Draw Bezier
				ctx.beginPath();
				ctx.bezierCurveTo(400,150,350,250,300,150);
				ctx.stroke();
			}
		} // End of Canvas6
}	// End of onload function