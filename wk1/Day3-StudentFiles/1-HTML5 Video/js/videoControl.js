var vid;
window.onload = function() {
	// Link the variable to the video tag
	vid=document.getElementById('vid');

}

// Function to control pause and play
function pauseToggle(){
	// Test if the video is paused or is playing 
	if(vid.paused){
		// If video is paused play the video
		vid.play();
	}else{
		// Pause the playing video
		vid.pause();
	}
}

function clicked() {
	vid.currentTime += 2;
}