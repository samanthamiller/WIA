window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if(theCanvas && theCanvas.getContext){
		var ctx = theCanvas.getContext("2d");
		if(ctx){

			// Removing shadow
			var origShadowColor = ctx.shadowColor;
			ctx.save();

			// Basic shadow set up
			ctx.shadowColor = '#000000'
			ctx.shadowOffsetX = 20;
			ctx.shadowOffsetY = 20;
			ctx.shadowBlur = 50;			

			// Draw a simple rectangle 
			ctx.fillStyle = 'rgba(0,0,255,1)'
			ctx.fillRect(20,20,200,100);

			// Change the shadow settings 
			ctx.shadowColor = 'rgba(0,100,100,.5)'
			ctx.shadowOffsetX = 5;
			ctx.shadowOffsetY = 5;
			ctx.shadowBlur = 5;

			var theString = 'Fish Lips';
			ctx.font = '2em Georgia';
			ctx.fillText(theString, 250, 75);	

			// Draw a red line with a purpleish shadow
			ctx.lineCap = 'round';
			ctx.lineWidth = 25;
			ctx.shadowColor = 'rgba(150,0,150,.5)';
			ctx.shadowBlur = 15;
			ctx.shadowOffsetX = 5;
			ctx.shadowOffsetY = 5;
			ctx.strokeStyle = 'red';

			ctx.beginPath();
			ctx.moveTo(50,200);
			ctx.lineTo(450, 200);
			ctx.stroke();

			ctx.restore();

		}
	}
}