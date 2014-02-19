window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				
ctx.fillStyle="rgb(255,255,255)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(59,52,266,109);
ctx.strokeRect(59,52,266,109);
ctx.fill();
ctx.stroke();



ctx.fillStyle="rgb(248,0,255)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(188,113,287,124);
ctx.strokeRect(188,113,287,124);
ctx.fill();
ctx.stroke();




						
		}
	}
}