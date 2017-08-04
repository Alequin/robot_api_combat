
var isCombatPanelVisible = false;

function setNavBarEvents(){

  var fight = document.querySelector("#fight-nav");
  var countryWins = document.querySelector("#country-wins-nav");
  var countryWins = document.querySelector("#region-wins-nav");

  fight.addEventListener("click", onPressFightNav);
  fight.addEventListener("click", onPressCountryNav);
  fight.addEventListener("click", onPressRegionNav);
}

function onPressFightNav(){
  insertCombatPanel();
}

function onPressCountryNav(){

}

function onPressRegionNav(){

}

function insertCombatPanel(){
  if(!isCombatPanelVisible){

    isCombatPanelVisible = true;

    var panel = document.querySelector("#panel-container");

    var combatPanel = buildCombatPanel();
    var fightBtn = buildFightButton();

    panel.appendChild(combatPanel);
    panel.appendChild(fightBtn);
  }
}

function buildCombatPanel(){
  var combatPanel = document.createElement("article");
  combatPanel.id = "combat-panel";

  var leftDiv = buildCombatantDiv("Country 1", "robo1.jpg", "xxx", "xxx");
  var vsTag = document.createElement("p");
  vsTag.innerHTML = "<b>VS</b>";
  var rightDiv = buildCombatantDiv("Country 2", "robo2.jpg", "xxx", "xxx");

  combatPanel.appendChild(leftDiv);
  combatPanel.appendChild(vsTag);
  combatPanel.appendChild(rightDiv);

  return combatPanel;
}

function buildFightButton(){
  var fightBtn = document.createElement("div");
  fightBtn.id = "fight-btn";
  fightBtn.classList.add("button");
  fightBtn.innerText = "Click To Fight";
  return fightBtn;
}

function buildCombatantDiv(title, image, attack, defence){
  var div = document.createElement("div");

  var titleElement = document.createElement("p");
  titleElement.classList.add("country-title");
  titleElement.innerText = title;

  var imageElement = document.createElement("img");
  imageElement.src = image;

  var attackElement = makeDetailsPTag();
  attackElement.innerText = "Attack: " + attack;

  var defenceElement = makeDetailsPTag();
  defenceElement.innerText = "Defence: " + defence;

  div.appendChild(titleElement);
  div.appendChild(imageElement);
  div.appendChild(attackElement);
  div.appendChild(defenceElement);

  return div;
}

function makeDetailsPTag(){
  var pTag = document.createElement("p");
  pTag.classList.add("country-title");
  return pTag;
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
