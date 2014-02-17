window.onload = function() {
	$('.lightbox_trigger').click(function(e){
		e.preventDefault();

		var image_href = $(this).attr('href');

		// Create a lightbox or use an existing lightbox

		if($('#lightbox').length > 0){
			// Lightbox div has already been created

			// Place the href as an image source value
			$('#content').html('<img src="' + image_href+'"/>');

			// Show the lightbox because it's hidden
			$('#lightbox').show;

		}else{
			// Light box has not been created yet
			// Create it here
			// Create variable to hold all of the html for the div

			var lightbox =
				'<div id = "lightbox">'+
				'<p>Click to close</p>' +
				'<div id = "content">' +
				'<img src="' + image_href+'"/>' +
				'</div>' +
				'</div>';

				// Insert the lightbox div in our page
				$('body').append(lightbox);
		}
	});
	
	// Click anywhere to get rid of lightbox
	$('#lightbox').live('click', function(){
		$('#lightbox').hide();
	});

}