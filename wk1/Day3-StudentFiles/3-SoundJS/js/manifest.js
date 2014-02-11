window.onload = function(){
	if(!createjs.Sound.initializeDefaultPlugins()){return;}

	// Create a variable to hold the relitive path to the audio files
	// If moving audio files you only have to update one place instead of each and every music link 
	var audioPath = 'audio/';

	// SoundJS accepts an array of objects that represent individual audio instances
	var manifest = [
		{id:'Music', src:audioPath + 'music.mp3|'+audioPath+'music.ogg'},
		{id:'Thunder', src:audioPath + 'Thunder1.mp3|'+audioPath+'Thunder1.ogg'}
	]

	// Create event listener 
	createjs.Sound.addEventListener('fileload', handleLoad);
	// Register our manifest with SoundJS
	createjs.Sound.registerManifest(manifest);


}
	function handleLoad(event){
		createjs.Sound.play(event.src);
	}

function playMusic(){
	console.log('Playing the music now');
	createjs.Sound.play('Music');
}

function playThunder(){
	console.log('Playing thunder now');
	createjs.Sound.play('Thunder');
}