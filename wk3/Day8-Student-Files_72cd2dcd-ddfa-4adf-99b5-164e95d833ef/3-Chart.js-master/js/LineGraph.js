$(function() { 
	var canvas= document.getElementById("canvas");
	var ctx =canvas.getContext("2d");

	// Create the line graph data
	var lineChartData = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul'],
		datasets: [
			{			
				fillColor: 'rgba(166, 209, 122, .5)',
				strokeColor: 'rgba(166, 209, 122, 1)',
				pointColor: 'rgba(166, 209, 122, 1)',
				pointStrokeColor: '#fff',
				data: [1, 20, 40, 20, 60, 75, 40]
			},
			{
				fillColor: 'rgba(166, 209, 122, .5)',
				strokeColor: 'rgba(166, 209, 122, 1)',
				pointColor: 'rgba(166, 209, 122, 1)',
				pointStrokeColor: '#fff',
				data: [15,30,45,60,30,60,75]
			}
		]
	};

	var options = {
		// bezierCurve:false
		onAnimationComplete:done
	};

	var myLine = new Chart(ctx).Line(lineChartData, options);
	

	function done(){
		// Get data url and put it in as an image
		var dataURL = canvas.toDataURL();
		document.getElementById('canvasImg').src=dataURL;

		// Hide the canvas
		$('#canvas').hide();
	}	
});