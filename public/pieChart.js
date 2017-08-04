
function PieChart(){
  var container = document.querySelector("#chart-panel");

  var chart = new Highcharts.Chart({
    chart: {type: "pie", renderTo: container},
    title: {text: "Pokemon Types I've Caught"},
    series: [{
      name: "Type", data: [
        {name: "Fire", y: 75, color: "#ffac33"},
        {name: "Water", y: 25, color: "#0000ff"},
        {name: "Grass", y: 1, color: "#00ff00"}
      ]
    }],
  });
}
