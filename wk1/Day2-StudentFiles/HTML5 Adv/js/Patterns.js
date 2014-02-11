window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if(theCanvas && theCanvas.getContext){
	var ctx = theCanvas.getContext("2d");
		if(ctx){
			// // Create a pattern from an image 
			// var patImg = new Image();

			// // Wait for the image to load 
			// patImg.onload = function(){
			// 	// Now the image can be used as a pattern
			// 	ctx.fillStyle = ctx.createPattern(patImg, 'repeat');
			// 	//ctx.fillStyle = ctx.createPattern(patImg, 'repeat-x');
			// 	//ctx.fillStyle = ctx.createPattern(patImg, 'repeat-y');
			// 	//ctx.fillStyle = ctx.createPattern(patImg, 'no-repeat');
			// 	ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
			// }			
			// patImg.src = 'images/desert_desc_bug.gif';


			// Create a pattern from another canvas 
			// Set up our pattern canvas 
			var patCanvase = document.getElementById('patCan');
			var patCtx = patCanvase.getContext('2d');
			if(patCtx){
				// Draw a line across the canvas 
				patCtx.strokeStyle = 'red';
				patCtx.lineWidth = 1;

				patCtx.beginPath();
				patCtx.moveTo(0,0);
				patCtx.lineTo(25,25);
				patCtx.stroke();

				// Now we use that canvas as a pattern for the large canvas
				var strokePat = ctx.createPattern(patCanvase, 'repeat')
				ctx.strokeStyle = strokePat;

				ctx.lineWidth = 25;
				ctx.strokeRect(50,50,200,200);

			}
		}
	}
}