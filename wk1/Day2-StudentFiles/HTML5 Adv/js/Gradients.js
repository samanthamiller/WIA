window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if(theCanvas && theCanvas.getContext){
	var ctx = theCanvas.getContext("2d");
	if(ctx){
		
	// Example 1	
		// 1. Create a linear gradient
		var linGrd = ctx.createLinearGradient(20,20,220,20);

		// 2. Add Color Stops
		linGrd.addColorStop(0, '#f00');
		linGrd.addColorStop(.5, '#00f');
		linGrd.addColorStop(1, '#0f0');

		// 3. Create a rectangle and fill it with our gradient
		ctx.fillStyle = linGrd;
		ctx.fillRect(20,20,200,280);	

	// Example 2
		// 1. Create a radial gradient 
		var radGrd = ctx.createRadialGradient(525, 150, 20, 525, 150, 100)

		// 2. Add color stops
		radGrd.addColorStop(0, '#f00');
		radGrd.addColorStop(.5, '#00f');
		radGrd.addColorStop(1, '#0f0');

		// 3. Create a circle and fill it with our gradient
		ctx.fillStyle = radGrd;
		ctx.beginPath();
		ctx.arc(525, 150, 100, 0, 2*Math.PI);
		ctx.fill();	
		}
	}
}