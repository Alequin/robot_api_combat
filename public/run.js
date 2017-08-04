function makeRequest(url, onRequest){
  var request = new XMLHttpRequest();
  request.addEventListener("load", onRequest);
  request.open("GET", url);
  request.send();
}

function onRequest(){
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  console.log(countries);
}

window.addEventListener("load", function(){
  // makeRequest("https://restcountries.eu/rest/v2/all", onRequest);
  // new PieChart();
  // new BarChart();

  // insertCombatPanel();

  buildPanels();
  setNavBarEvents();
});
