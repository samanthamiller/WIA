window.onload = function(){
	// Test to see if it initilized properly - if not we can't play music in the browser
	if(!createjs.Sound.initializeDefaultPlugins()){
		// Return will stop the function where it's at
		return;
	}


	// SoundJS built in ability to preload audio
	// Regestering the audio with SoundJS
	// Will only preload the audio that is supported by the browser

	createjs.Sound.registerSound({id:'soundId', src:'audio/music.mp3|audio/music.ogg'});	
}

// Listen for the fileload loadcomplete
createjs.Sound.addEventListener('fileload', handleFileLoad);
function handleFileLoad(event){
	// A sound has been preloaded.... it's ready to go!
	console.log('Preloaded: ', event.src);
	// Play the file once it is loaded 
	createjs.Sound.play(event.src);

}

function playMusic(){
	console.log('Going to play music');
	createjs.Sound.play('soundId');
}