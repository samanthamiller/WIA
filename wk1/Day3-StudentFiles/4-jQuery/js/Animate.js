$(function(){
	$('#right').click(function(){
		$('#theDiv').animate({width: '500px'}, 1000);
	});

	$('#text').click(function(){
		$('#theDiv').animate({fontSize: '24pt'}, 1000);
	});

	$('#toggle').click(function(){
		$('#theDiv').animate({left: '500'}, 1000, 'swing');
	});	

	$('#multiple').click(function(){
		// $('#theDiv').animate({left: '500', height:'500px', width:'500px', fontSize:'24pt'}, 1000, 'swing');
		$('#theDiv').animate({left:'500'});
		$('#theDiv').animate({height:'500px'});
		$('#theDiv').animate({width:'500px'});
		$('#theDiv').animate({fontSize:'24pt'});

	});

	$('#reset').click(function(){
		$('#theDiv').animate({width: '250px', height: '180px', fontSize: '16pt'}, 1000, 'linear');
	});				
})