
var isCombatPanelVisible = false;
var combatPanel = null;

function buildPanels(){
  combatPanel = buildCombatPanel();
}

function setNavBarEvents(){

  var fight = document.querySelector("#fight-nav");
  var countryWins = document.querySelector("#country-wins-nav");
  var countryWins = document.querySelector("#region-wins-nav");

  fight.addEventListener("click", onPressFightNav);
  fight.addEventListener("click", onPressCountryNav);
  fight.addEventListener("click", onPressRegionNav);
}

function onPressFightNav(){
  var panel = document.querySelector("#panel-container");
  panel.appendChild(combatPanel);
}

function onPressCountryNav(){

}

function onPressRegionNav(){

}

function buildCombatPanel(){
    isCombatPanelVisible = true;

    var container = document.createElement("div");
    var fighterSection = buildFighterSection();
    var fightBtn = buildFightButton();

    container.appendChild(fighterSection);
    container.appendChild(fightBtn);

    return container;
}

function buildFighterSection(){
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
  var combatPanel = document.createElement("article");
  combatPanel
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
