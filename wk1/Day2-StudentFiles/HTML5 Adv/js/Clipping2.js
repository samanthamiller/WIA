window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if(theCanvas && theCanvas.getContext){
	var ctx = theCanvas.getContext("2d");
		if(ctx){
	  		var x = theCanvas.width/2;
	  		var y = theCanvas.height/2;
	  		var radius = 75;
	  		var offSet = 50;

	  		// save(); - Saves the current drawing state
	  		ctx.save();

	  		// Start drawing first clippig path
	  		ctx.beginPath();
	  		ctx.arc(x, y, radius, 0, 2*Math.PI, false);
	  		ctx.clip();

	  		// Draw a blue circle inside of this clipping region
	  		ctx.beginPath();
	  		// Basicly the same circle but 50px over and 50px up
	  		ctx.arc(x-offSet, y-offSet, radius, 0, 2*Math.PI, false);
	  		ctx.fillStyle = 'blue';
	  		ctx.fill();

	  		// Draw a yellow circle inside of this clipping region
	  		ctx.beginPath();
	  		// Basicly the same circle but 50px over and 50px up
	  		ctx.arc(x+offSet, y, radius, 0, 2*Math.PI, false);
	  		ctx.fillStyle = 'yellow';
	  		ctx.fill();
					
			// Draw a yellow circle inside of this clipping region
	  		ctx.beginPath();
	  		// Basicly the same circle but 50px over and 50px up
	  		ctx.arc(x, y+offSet, radius, 0, 2*Math.PI, false);
	  		ctx.fillStyle = 'green';
	  		ctx.fill();		

	  		// Restore so stroke wont get lost 
	  		ctx.restore();

	  		// Draw a stroke around  the circle
	  		ctx.beginPath();
	  		ctx.arc(x, y, radius, 0, 2*Math.PI, false);
	  		ctx.lineWidth = 10;
	  		ctx.strokeStyle = 'green';
	  		ctx.stroke();

		}
	}
}