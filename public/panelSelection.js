
var isCombatPanelVisible = false;

function setNavActions(){

  var fight = document.querySelector("#fight-nav");
  var countryWins = document.querySelector("#country-wins-nav");
  var countryWins = document.querySelector("#region-wins-nav");

  fight.addEventListener("click", onPressFightNav);
  fight.addEventListener("click", onPressCountryNav);
  fight.addEventListener("click", onPressRegionNav);
}

function onPressFightNav(){

}

function onPressCountryNav(){

}

function onPressRegionNav(){

}

function insertCombatPanel(){
  if(!isCombatPanelVisible){

    isCombatPanelVisible = true;

    var panel = document.querySelector("#panel-container");

  }
}

function removeCombatPanel(){

}

function insertPieChartPanel(){
  insertChart("pie");
}

function insertBarChartPanel(){
  insertChart("bar");
}

function insertChart(type){

  switch(type){

    case "pie":

    break;

    case "bar":

    break;

    default:
      throw Error("wrong input");

  }

}

function removeChartPanel(){

}
