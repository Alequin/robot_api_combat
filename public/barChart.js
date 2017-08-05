
function BarChart(container, countries){

  var winColour = "green";
  var lossColour = "red";

  var regions = [];

  var generateData = function(countries){
    var data = {};

    for(var country of countries){
      var region = country.region.toLowerCase();
      if(region === "") region = "unknown";

      var regionData = data[region];
      if(regionData === undefined){
        data[region] = {
          win: {y: 0, color: winColour},
          loss: {y: 0, color: lossColour}
        };
        regions.push(region);
      }

      data[region].win.y += country.score.win;
      data[region].loss.y += country.score.loss;
    }

    return data;
  }

  var chartData = generateData(countries);
  var winData = [];
  var lossData = [];
  for(var region of regions){
    winData.push(chartData[region].win);
    lossData.push(chartData[region].loss);
  }

  console.log(regions);

  var chart = new Highcharts.Chart({
    chart: {type: "bar", renderTo: container},
    title: {text: "Fights By Region"},
    xAxis: {
        categories: regions
    },
    yAxis: {
      allowDecimals: false,
      title: {
          text: null
      },
      min: 0,
    },
    series: [
      {
        name: "Wins",
        data: winData
      },
      {
        name: "Losses",
        data: lossData
      }
    ],
    legend: {
      enabled: false
    },
  });
}
