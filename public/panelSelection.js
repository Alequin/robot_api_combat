
var isCombatPanelVisible = false;
var combatPanel = null;
var chartPanel = null;

function buildPanels(){
  combatPanel = buildCombatPanel();

  chartPanel = document.createElement("section");
  chartPanel.id = "chart-panel";
}

function setNavBarEvents(){

  var fight = document.querySelector("#fight-nav");
  var countryWins = document.querySelector("#country-wins-nav");
  var regionWins = document.querySelector("#region-wins-nav");

  fight.addEventListener("click", onPressFightNav);
  countryWins.addEventListener("click", onPressCountryNav);
  regionWins.addEventListener("click", onPressRegionNav);
}

function onPressFightNav(){
  if(!isCombatPanelVisible){
    removeCurrentPanel();
    isCombatPanelVisible = true;
    var panel = document.querySelector("#panel-container");
    panel.appendChild(buildCombatPanel());
  }
}

function onPressCountryNav(){
  isCombatPanelVisible = false;
  removeCurrentPanel();
  var panel = document.querySelector("#panel-container");
  new PieChart(chartPanel);
  panel.appendChild(chartPanel);
}

function onPressRegionNav(){
  isCombatPanelVisible = false;
  removeCurrentPanel();
  var panel = document.querySelector("#panel-container");
  new BarChart(chartPanel);
  panel.appendChild(chartPanel);
}

function buildCombatPanel(){

    var container = document.createElement("div");
    var fighterSection = buildFighterSection();
    var fightBtn = buildFightButton();

    container.appendChild(fighterSection);
    container.appendChild(fightBtn);

    return container;
}

function buildFighterSection(){
  var panel = document.createElement("article");
  panel.id = "combat-panel";

  var leftDiv = buildCombatantDiv("Country 1", "robo1.jpg", "xxx", "xxx");
  var vsTag = document.createElement("p");
  vsTag.innerHTML = "<b>VS</b>";
  var rightDiv = buildCombatantDiv("Country 2", "robo2.jpg", "xxx", "xxx");

  panel.appendChild(leftDiv);
  panel.appendChild(vsTag);
  panel.appendChild(rightDiv);

  return panel;
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
  pTag.classList.add("details");
  return pTag;
}

function removeCurrentPanel(){
  var panel = document.querySelector("#panel-container");
  var toRemove = panel.children[0];
  if(toRemove !== undefined && toRemove !== null){
    panel.removeChild(toRemove);
  }
}
