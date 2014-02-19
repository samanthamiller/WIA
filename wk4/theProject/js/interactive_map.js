$(document).ready(function() {

	// When a dot is clicked 
	$('a.dot').click(function(){
		// Remove the selected class from all other dots
		$('a.dot').removeClass('selected');
		// Add selected class to the dot that was clicked
		// Basically turn it green
		$(this).addClass('selected');
		// Create a variable to hold the path of the matching country div
		var country = '.detail#'+$(this).attr('country');
		// Create a variable that will hold the html code 
		var htmlCode = $(country).html();
		// Animate the container to fade out 
		// Put the new html code in and then fade back in
		$('.detail_container').fadeOut(500, function(){
			// This runs after the container fades out 
			$('.detail_container .detail').html(htmlCode);
			$('.detail_container').fadeIn(500);
		});
	});

});