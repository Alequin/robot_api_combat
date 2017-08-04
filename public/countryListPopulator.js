var allCountries = [];

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

  console.log(allCountries);
  populateList(allCountries);
}

function populateList(countries){

  var container = document.querySelector("#list-section");

  for(var j=0; j<3; j++){
    container.appendChild(document.createElement("hr"));
    container.appendChild(buildCountryElement(j, countries[j]));
    container.appendChild(buildSelectionButtons(j));
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
  roboImg.src = "robo1.png";
  // roboImg.src = "https://robohash.org/"+ country.name +".png";

  var roboDetailsList = document.createElement("ul");
  var name = document.createElement("li");
  name.innerHTML = "<b>Name</b>: Name 1"
  var attack = document.createElement("li");
  attack.innerHTML = "<b>Name</b>: 20"
  var defence = document.createElement("li");
  defence.innerHTML = "<b>Name</b>: 15"

  roboDetailsList.appendChild(name);
  roboDetailsList.appendChild(attack);
  roboDetailsList.appendChild(defence);

  rightContainer.appendChild(roboImg);
  rightContainer.appendChild(roboDetailsList);

  return rightContainer;
}

function buildSelectionButtons(index){
  var selectionBtnContainer = document.createElement("article");
  selectionBtnContainer.classList.add("combatant-button-container");

  var button1 = buildCombatantSelectionButton(index, "Set robo name as combatant 1");
  var button2 = buildCombatantSelectionButton(index, "Set robo name as combatant 2");
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

}

function onPressSelectCombatantTwo(){

}
