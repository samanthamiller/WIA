window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if(theCanvas && theCanvas.getContext){
	var ctx = theCanvas.getContext("2d");
		if(ctx){
			
			ctx.fillStyle = 'yellow';
			ctx.fillRect(0,0,100,50);
			ctx.save();
			// Scaling
			ctx.scale(2, 2);
			ctx.fillStyle = 'orange';
			ctx.fillRect(125,0,100,50);
			
			// Change the scale 
			ctx.scale(.5, .5);
			ctx.fillStyle = 'red';
			ctx.fillRect(600, 0, 100, 50)				
							
		}
	}
}