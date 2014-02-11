$(function(){
	// Id of the show button
	$('#show').click(function(){
		$('#theDiv').show('normal');
		alert('Div is now fully shown');
		$('#theDiv').css('background-color', 'red');
	})

	// Id of the hide button
	$('#hide').click(function(){
		$('#theDiv').hide('fast');
	})

	// Id of the toggle button
	$('#toggle').click(function(){
		$('#theDiv').toggle();
	})
});