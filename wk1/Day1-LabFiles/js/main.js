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
window.onload = function(){
	var theCanvas = document.getElementById('Canvas1');
		if(theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			if(ctx) {
				// Draw here
				ctx.fillStyle = 'rgb(70,130,180)';
				ctx.strokeStyle = 'black';
				ctx.lineWidth = 5;

				// ctx.beginPath();
				// ctx.moveTo(0,0);
				// ctx.lineTo(50,0);
				// ctx.stroke();

						ctx.beginPath();
						ctx.moveTo(25,175);
						ctx.lineTo(50,25);
						ctx.lineTo(125,50);
						ctx.lineTo(175,175);
						ctx.stroke();
		}
	} // End of Canvas1
}	// End of onload function

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

window.onload = function(){
	var theCanvas = document.getElementById('Canvas2');
		if(theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			if(ctx) {
				// Draw here
			}
		} // End of Canvas2
	} // End of onlod function


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

window.onload = function(){
	var theCanvas = document.getElementById('Canvas3');
		if(theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			if(ctx) {
				// Draw here
			}
		} // End of Canvas3
	} // End of onlod function
/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

window.onload = function(){
	var theCanvas = document.getElementById('Canvas4');
		if(theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			if(ctx) {
				// Draw here
			}
		} // End of Canvas4
	} // End of onlod function
/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

window.onload = function(){
	var theCanvas = document.getElementById('Canvas5');
		if(theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			if(ctx) {
				// Draw here
			}
		} // End of Canvas5
	} // End of onlod function
/*******************************************
PART 6

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

window.onload = function(){
	var theCanvas = document.getElementById('Canvas6');
		if(theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			if(ctx) {
				// Draw here
			}
		} // End of Canvas6
	} // End of onlod function
