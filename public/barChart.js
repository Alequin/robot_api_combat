
function BarChart(container, countries){

  var winColour = "green";
  var lossColour = "red";

  var generateData = function(countries){
    var data = {
      africa: {
        win: {y: 0, color: winColour},
        loss: {y: 0, color: lossColour}
      },
      americas: {
        win: {y: 0, color: winColour},
        loss: {y: 0, color: lossColour}
      },
      asia: {
        win: {y: 0, color: winColour},
        loss: {y: 0, color: lossColour}
      },
      europe: {
        win: {y: 0, color: winColour},
        loss: {y: 0, color: lossColour}
      },
      oceania: {
        win: {y: 0, color: winColour},
        loss: {y: 0, color: lossColour}
      },
    }

    for(var country of countries){
      var region = country.region.toLowerCase();
      data[region].win.y += country.score.win;
      data[region].loss.y += country.score.loss;
    }

    return data;
  }

  var chartData = generateData(countries);

  var chart = new Highcharts.Chart({
    chart: {type: "bar", renderTo: container},
    title: {text: "Fights By Region"},
    xAxis: {
        categories: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
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
        data: [
          chartData.africa.win,
          chartData.americas.win,
          chartData.asia.win,
          chartData.europe.win,
          chartData.oceania.win,
        ]
      },
      {
        name: "Losses",
        data: [
          chartData.africa.loss,
          chartData.americas.loss,
          chartData.asia.loss,
          chartData.europe.loss,
          chartData.oceania.loss,
        ]
      }
    ],
    legend: {
      enabled: false
    },
  });
}
