
function PieChart(container, countries){

  var dataSet = [];
  for(var country of countries){
    dataSet.push({name: country.name, y: country.score.win});
  }

  var chart = new Highcharts.Chart({
    chart: {type: "pie", renderTo: container},
    title: {text: "Victories By Country"},
    series: [{
      name: "Victories", data: dataSet
    }],
  });
}
