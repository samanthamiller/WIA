$(document).ready(function() {

	// Capture the thumbnail links and disable them
	$('.gallery_thumbnails a').click(function(e){
		e.preventDefault();

		// Set up variables vased on the clicked thumbnail
		var photo_caption = $(this).attr('title');
		var photo_fullsize = $(this).attr('href');

		// Set up the preview link for the preview photo
		var photo_preview = photo_fullsize.replace('_fullsize', '_preview');		

		// Fade out the preview area, preload the new image and fade the preview are back in
		$('.gallery_caption').slideUp(500);
		$('.gallery_preview').fadeOut(500, function(){
			// The preview area is now faded and can't be seen

			// Switch the picture
			$('.gallery_preload_area').html('<img src="'+photo_preview+'"/>');

			// Once the image is preloaded then run a function
			$('.gallery_preload_area img').imgpreload(function(){
				// Change the link to the full sized photo when clicked
				$('.gallery_preview').html('<a class = "overlayLink" title="'+photo_caption+'" href="'+photo_fullsize+'" style="background-image:url('+photo_preview+');"></a>');

				// Fade the preview winow back in
				$('.gallery_preview').fadeIn(500);

				// Captions
				$('.gallery_caption').html('<p> <a class="overlayLink zoom" title="'+photo_caption+'" href="' +photo_fullsize+ '"> View Larger </a> </p><p>'+photo_caption+'</p>');
				$('.gallery_caption').slideDown(500);




				setFancyBoxLinks();
				updateThumbnails();
			});

		});

	}); // End of click


	// Set up the initial paremeters
	var first_photo_caption = $('.gallery_thumbnails a').first().attr('title');
	var first_photo_fullsize = $('.gallery_thumbnails a').first().attr('href');
	var first_photo_preview = first_photo_fullsize.replace('_fullsize', '_preview');
	$('.gallery_preview').html('<a class = "overlayLink" title="'+first_photo_caption+'" href="'+first_photo_fullsize+'" style="background-image:url('+first_photo_preview+');"></a>');
	$('.gallery_caption').html('<p> <a class="overlayLink zoom" title="'+first_photo_caption+'" href="' +first_photo_fullsize+ '"> View Larger </a> </p><p>'+first_photo_caption+'</p>');
	setFancyBoxLinks();

	updateThumbnails();
}); // End of ready

function setFancyBoxLinks(){
	//Attatch the fancy box script to the overlay link
	$('a.overlayLink').fancybox({
		'titlePosition': 'over',
		'overlayColor':'#000',
		'overlayOpacity': .8,
		'transitionIn':'elastic',
		'transitionOut': 'elastic',
		'autoScale': true
	});
}

function updateThumbnails(){
	$('.gallery_thumbnails a').each(function(index){
		// Testing if it's selected or not
		if($('.gallery_preview a').attr('href') == $(this).attr('href')){
			$(this).addClass('selected');
			$(this).children().fadeTo(250, .4);
		}else{
			$(this).removeClass('selected');
			$(this).children().css('opacity', '1');
		};
	});
}







