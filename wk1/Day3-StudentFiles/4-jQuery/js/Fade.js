$(function() {

	$('#fadein').click(function(){
		$('#theDiv').fadeIn(4000);
	});

	$('#fadeout').click(function(){
		$('#theDiv').fadeOut(2000);
	});

	$('#fadeto3').click(function(){
		$('#theDiv').fadeTo('slow', .3);
	});	

	$('#fadeup').click(function(){
		$('#theDiv').fadeUp'slow', 1);
	});	
})