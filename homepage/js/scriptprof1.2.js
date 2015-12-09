function alertMsg() {
    alert("Functionality not implemented!");
}

function alertMsg2() {
	alert("Functionality implemented for other 2 groups but not this one!");
}

google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);

function drawChart() {

	// Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Month', 'Milk Rock', 'Rockstars' ],
         ['2004/05',  1,      2,        ],
         ['2005/06',  5,      4,  ],
         ['2006/07',  6,      3,  ],
         ['2007/08',  7,      3,  ],
         ['2008/09',  2,     5,   ]
      ]);

    var options = {
      title : 'Hours of contribution for project per month ',
      vAxis: {title: 'Hours'},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      legend : {position: 'bottom'}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}