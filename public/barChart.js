
function BarChart(container){

  var chart = new Highcharts.Chart({
    chart: {type: "bar", renderTo: container},
    title: {text: "Fights By Region"},
    xAxis: {
        categories: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
        labels: {
            enabled: true
        }
    },
    yAxis: {
      allowDecimals: false,
      title: {
          text: null
      },
      min: 0,
      max: 6
    },
    series: [{
      data: [
        {y: 1, color: "#ffac33"},
        {y: 2, color: "#0000ff"},
        {y: 3, color: "#00ff00"},
        {y: 4, color: "#00ff00"},
        {y: 5, color: "#00ff00"},
      ]
    }],
    legend: {
      enabled: false
    },
  });
}

// var charts = [],
//     $containers = $('#trellis td'),
//     datasets = [{
//         name: 'Erik',
//         data: [3, 6, 1, 2, 6]},
//     {
//         name: 'Gert',
//         data: [5, 6, 4, 2, 1]},
//     {
//         name: 'Helge',
//         data: [2, 6, 5, 2, 3]},
//     {
//         name: 'Torstein',
//         data: [5, 2, 7, 4, 2]}];
//
//
// $.each(datasets, function(i, dataset) {
//     charts.push(new Highcharts.Chart({
//
//         chart: {
//             renderTo: $containers[i],
//             type: 'bar',
//             marginLeft: i === 0 ? 100 : 10
//         },
//
//         title: {
//             text: dataset.name,
//             align: 'left',
//             x: i === 0 ? 90 : 0
//         },
//
//         credits: {
//             enabled: false
//         },
//
//         xAxis: {
//             categories: ['Apples', 'Pears', 'Oranges', 'Bananas', 'Carrots'],
//             labels: {
//                 enabled: i === 0
//             }
//         },
//
//         yAxis: {
//             allowDecimals: false,
//             title: {
//                 text: null
//             },
//             min: 0,
//             max: 10
//         },
//
//
//         legend: {
//             enabled: false
//         },
//
//         series: [dataset]
//
//     }));
// });
