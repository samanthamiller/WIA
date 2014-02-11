$(document).ready(function() {

	// When the form changes, update the map
	$('#mapForm').change(function(){
		// Test to make sure it is functioning properly 
		// alert($('#mapForm option:selected').val());

		// Create a variable to see what is selected
		var selectedContinent = $('#mapForm option:selected').val();

		// Test what is selected 
		if(selectedContinent === 'ALL'){
			// Show all the dots on the map
			$('a.dot').slideDown(1000);
		}else{
			// Show all the dots that are on the chosen continent 
			// Then hide all the other ones
			$('a.dot[continent = '+selectedContinent+']').slideDown(1000);
			$('a.dot[continent!='+selectedContinent+']').slideUp(1000);
		}
	});

	// When a dot is clicked 
	$('a.dot').click(function(){
		// Test to make sure it is functioning properly 
		// alert($(this).attr('country'));

		// Remove the selected class from all other dots
		$('a.dot').removeClass('selected');
		// Add selected class to the dot that was clicked
		// Basically turn it green
		$(this).addClass('selected');
		// Create a variable to hold the path of the matching country div
		var country = '.country_detail#'+$(this).attr('country');
		// Create a variable that will hold the html code 
		var htmlCode = $(country).html();
		// Animate the container to fade out 
		// Put the new html code in and then fade back in
		$('.detail_container').fadeOut(500, function(){
			// This runs after the container fades out 
			$('.detail_container .country_detail').html(htmlCode);
			$('.detail_container').fadeIn(500);
		});
	});

});