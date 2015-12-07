function alertMsg() {
    alert("Functionality not implemented!");
}

function alertMsg2() {
	alert("Functionality implemented for other 2 groups but not this one!");
}

google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);

function drawChart() {

	var data = google.visualization.arrayToDataTable([
		['Contribution', 'Hours'],
		['Johnny', 3],
		['Jeff', 3],
	]);

	var options = {
		title: 'Silent Geese contribution stat'
	};

	var chart = new google.visualization.PieChart(document.getElementById('piechart'));

	chart.draw(data, options);
}