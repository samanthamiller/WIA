// Load diffrent scripts based on results of Modernizr
Modernizr.load({
	test: Modernizr.inputtypes.date,
	yep: 'js/success.js',
	nope: 'js/fail.js',
	complete: function(){
		console.log('Test has been run.');
	}
});