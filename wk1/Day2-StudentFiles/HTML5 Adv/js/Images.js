window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if(theCanvas && theCanvas.getContext){
	var ctx = theCanvas.getContext("2d");
		if(ctx){
		// Example 1	
			// 1. Create a variable to hold the image
			// var srcImg = document.getElementById('img1');

		// 2. Draw that image directly onto the canvas 
		// 	// Basic way to place image
		// 	// drawImage(image, x, y);
		// 	ctx.drawImage(srcImg,0,0);	

		// Example 2 - Scaled down image
			// // 1. Create a variable to hold the image
			// var srcImg = document.getElementById('img1');

			// 2. Draw that image directly onto the canvas 
			// //drawImage(image, x, y, width, height)
			// ctx.drawImage(srcImg, 50, 50, 350, 150);	

		// Example 3 - Slice the image
		// 	// 1. Create a variable to hold the image
		// 	var srcImg = document.getElementById('img1');

		// 	// 2. Draw that image directly onto the canvas 
		// 	// drawImage(image, sx, sy, sw, sh, dw, dy, dw, dh);
		// 	ctx.drawImage(srcImg, 350, 200, 125, 100, 50, 50, 250, 200);		

		// Example 4 - Draw a video onto the canvase
			// 1. Create a variable to hold our video
			// Grab each frame from the video and paint onto the canvas
			var srcVid = document.getElementById('vid1');
			// .play(); will start the video for us
			srcVid.play();

			// 2. Set an interval function
			setInterval(function(){
				var theCanvas = document.getElementById('Canvas1');
				var ctx = theCanvas.getContext('2d')
				var srcVid = document.getElementById('vid1');
				ctx.drawImage(srcVid, 0, 0);
			}, 15);
		}
	}
}