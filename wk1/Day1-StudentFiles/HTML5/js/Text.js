window.onload = function(){
	var theCanvas = document.getElementById('Canvas1');
	if(theCanvas && theCanvas.getContext){
	var ctx = theCanvas.getContext("2d");
	if (ctx){

		// .fillText(textString, x, y, maxWidth)
		var theString = "Fish Lips";
		// Draw the string using default settings
		ctx.fillText(theString, 20, 20);
		ctx.font = "25pt Georgia";
		ctx.fillText(theString, 20, 60);
		ctx.fillStyle = 'orange';
		ctx.fillText(theString, 20, 100);
		ctx.font = "32pt Verdana";
		ctx.fillStyle = 'yellow';
		ctx.strokeStyle = 'rgba(0,255,0, 1)';
		ctx.fillText(theString, 20, 160);
		ctx.stroke(theString, 20, 160);
		}
	}
}