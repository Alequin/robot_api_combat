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

function testingbuildCountriesList(){
  allCountries = [
    {name: "country 1", flag: "flag1.jpg"},
    {name: "country 2", flag: "flag1.jpg"},
    {name: "country 3", flag: "flag1.jpg"},
    {name: "country 4", flag: "flag1.jpg"},
    {name: "country 5", flag: "flag1.jpg"}
  ];

  populateList(allCountries);
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
  var selectedCountry = allCountries[this.value];
  saveCombatantOne(selectedCountry);
  updateCombatantOne();
}

function onPressSelectCombatantTwo(){
  var selectedCountry = allCountries[this.value];
  saveCombatantTwo(selectedCountry);
  updateCombatantTwo();
}
