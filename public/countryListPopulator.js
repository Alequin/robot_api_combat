
function buildCountriesList(){
  var request = new XMLHttpRequest();
  request.addEventListener("load", onRequest);
  request.open("GET", "https://restcountries.eu/rest/v2/all");
  request.send();
}

function onRequest(){
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  allCountries = JSON.parse(jsonString);

  populateList(allCountries);
  // produceFakeScoreData(allCountries);
}

function testingbuildCountriesList(){
  var categories = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  allCountries = [
    {name: "country 1", flag: "flag1.jpg", region: categories[0]},
    {name: "country 2", flag: "flag1.jpg", region: categories[1]},
    {name: "country 3", flag: "flag1.jpg", region: categories[2]},
    {name: "country 4", flag: "flag1.jpg", region: categories[3]},
    {name: "country 5", flag: "flag1.jpg", region: categories[4]},
    {name: "country 6", flag: "flag1.jpg", region: categories[0]},
    {name: "country 7", flag: "flag1.jpg", region: categories[1]},
    {name: "country 8", flag: "flag1.jpg", region: categories[2]},
    {name: "country 9", flag: "flag1.jpg", region: categories[3]},
    {name: "country 10", flag: "flag1.jpg", region: categories[4]}
  ];

  populateList(allCountries);
  produceFakeScoreData(allCountries);
}

function produceFakeScoreData(countries){

  for(var country of countries){
    country.score.win = dice(1, 100);
    country.score.loss = dice(1, 100);
  }

}

function populateList(countries){

  var length = countries.length;
  var robots = generateRandomRobots(length);

  var container = document.querySelector("#list-section");

  for(var j=0; j<length; j++){
    var country = countries[j];
    country.robot = robots[j];
    country.score = {win: 0, loss: 0}
    container.appendChild(document.createElement("hr"));
    container.appendChild(buildCountryElement(j, country));
    container.appendChild(buildSelectionButtons(j, country));
    container.appendChild(document.createElement("hr"));
  }
}

function buildCountryElement(index, country){

  var container = document.createElement("article");
  container.classList.add("country-container");

  var leftContainer = buildLeftContainer(country);
  var rightContainer = buildRightContainer(country);

  container.appendChild(leftContainer);
  container.appendChild(rightContainer);

  return container;
}

function buildLeftContainer(country){

  var leftContainer = document.createElement("div");
  leftContainer.classList.add("country-inner-container-left");

  var flagImg = document.createElement("img");
  flagImg.classList.add("flag-img");
  flagImg.src = country.flag;

  var countryName = document.createElement("p");
  countryName.innerHTML = "<b>Name</b>: " + country.name;

  leftContainer.appendChild(flagImg);
  leftContainer.appendChild(countryName);

  return leftContainer;
}

function buildRightContainer(country){

  var rightContainer = document.createElement("div");
  rightContainer.classList.add("country-inner-container-right");

  var roboImg = document.createElement("img");
  roboImg.classList.add("country-robo-img");
  roboImg.src = country.robot.image;
  // roboImg.src = "https://robohash.org/"+ country.name +".png";

  var roboDetailsList = document.createElement("ul");
  var name = document.createElement("li");
  name.innerHTML = "<b>Name</b>: " + country.robot.name;
  var attack = document.createElement("li");
  attack.innerHTML = "<b>Attack</b>: " + country.robot.attack;
  var defence = document.createElement("li");
  defence.innerHTML = "<b>Defence</b>: " + country.robot.defence;

  roboDetailsList.appendChild(name);
  roboDetailsList.appendChild(attack);
  roboDetailsList.appendChild(defence);

  rightContainer.appendChild(roboImg);
  rightContainer.appendChild(roboDetailsList);

  return rightContainer;
}

function buildSelectionButtons(index, country){
  var selectionBtnContainer = document.createElement("article");
  selectionBtnContainer.classList.add("combatant-button-container");

  var button1 = buildCombatantSelectionButton(index, "Set "+ country.robot.name +" as combatant 1");
  var button2 = buildCombatantSelectionButton(index, "Set "+ country.robot.name +" as combatant 2");
  selectionBtnContainer.appendChild(button1);
  selectionBtnContainer.appendChild(button2);

  button1.addEventListener("click", onPressSelectCombatantOne);
  button2.addEventListener("click", onPressSelectCombatantTwo);

  return selectionBtnContainer;
}

function buildCombatantSelectionButton(index, text){
  var button = document.createElement("button");
  button.classList.add("combatant-btn");
  button.classList.add("button");
  button.value = index;
  button.innerText = text;

  return button;
}

function onPressSelectCombatantOne(){
  saveCombatantOne(this.value);
  if(isCombatPanelVisible){
    updateCombatantOne();
  }
}

function onPressSelectCombatantTwo(){
  saveCombatantTwo(this.value);
  if(isCombatPanelVisible){
    updateCombatantTwo();
  }
}
