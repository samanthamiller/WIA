window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if(theCanvas && theCanvas.getContext){
	var ctx = theCanvas.getContext("2d");
		if(ctx){
			// Variable to hold our rotation
			var rotation = 0;
			// Variable to hold our image
			var srcImg = document.getElementById('img1');
			// Transelate to the center of canvas
			ctx.translate(theCanvas.width/2, theCanvas.height/2)
			// setInterval(function, timer in millisectonds)
			/*
			setInterval(function(){
				// Rotate 
				rotation += 8;

				// Clear our canvas
				ctx.clearRect(-75,-75, 150,150);

				ctx.rotate(rotation/180*Math.PI);
				ctx.drawImage(srcImg, -75, -75, 150, 150);

			}, 50);
*/
			var width = 10;
			var height = 20;
			ctx.fillStyle = 'green';
			setInterval(function(){
				ctx.fillRect(0,0, width, height);
				width+=20;
				height+=20;
			}, 500)

		}
	}
}