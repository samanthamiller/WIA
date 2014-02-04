window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if(theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if(ctx){
			ctx.lineWidth = 5;
			ctx.fillStyle = 'blue';
			ctx.strokeStyle = 'black';	

			// 1. Stroke a simple bezier curve
			ctx.beginPath();
			ctx.moveTo(50, 200);
			// .bezierCurveTo(cx, cy, cx2, cy2, endX, endY);
			ctx.bezierCurveTo(50,100,200,100,200,150);
			ctx.stroke();

			// 2. Stroke a quadratic curve 
			ctx.strokeStyle = 'purple';
			ctx.lineWidth = 5;
			ctx.beginPath();
			ctx.moveTo(400,200);
			// QuadraticCurveTo(cx, cy, endx, endy)
			ctx.quadraticCurveTo(130, 100, 600, 150);
			ctx.stroke();
		}
	}
}