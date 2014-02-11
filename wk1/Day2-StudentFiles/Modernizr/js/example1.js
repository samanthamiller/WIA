// Test if canvas works in our browser
if(Modernizr.canvas){
	var theCanvas = document.getElementById('Canvas1');
	var ctx = theCanvas.getContext('2d');

	// Draw text on the screen
	ctx.font = '25px Georgia';
	ctx.fillText('Fish Lips', 20, 60);
}else{
	// No canvas support
	// Fallback content goes here 
}

console.log(Modernizr);

if(Modernizr.draganddrop){
	// Drag and drop works
	ctx.font = '25px Georgia';
	ctx.fillText('Fish Tacos', 20, 120);
}else{
	// No drag and drop support
	// Pollyfill will go here
}