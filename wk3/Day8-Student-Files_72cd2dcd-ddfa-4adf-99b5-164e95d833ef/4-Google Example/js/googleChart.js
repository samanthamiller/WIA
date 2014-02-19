// Load the google vis library and the core chart package
// Core conains bar, pie, line charts, etc

google.load('visualization', '1', {packages:['corechart']})

// Once the libraries are loaded, then run our function
google.setOnLoadCallback(drawChart);

// Create the drawChart function

function drawChart(){
	// Create a data table using an array
	var data = google.visualization.arrayToDataTable([
			['Task', 'Hours/Day'],
			['Work', 8],
			['Eat', 2],
			['Commute', 2],
			['Watch TV', 2],
			['Sleep', 7]

		]);

	// Options for the chart
	var options = {
		title: 'My Daily Activities',
		pieHole: .6,
		pieSliceText:'label',
		// is3D: true
		// width:500,
		// height:500
		// Legend: 'left', {position:}
		legend:{position:'labeled'},
		tooltip:{trigger:'none'}

		
	};

	// Createe the chart
	var chart = new google.visualization.PieChart(document.getElementById('piechart'));

	chart.draw(data, options);
}