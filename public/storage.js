var allCountries = [];

function saveCombatantOne(index){
  var jasonString = JSON.stringify(index);
  localStorage.setItem("combatant1", jasonString);
}

function loadCombatantOne(){
  var loaded = localStorage.getItem("combatant1");
  var index = JSON.parse(loaded);
  return allCountries[index];
}

function saveCombatantTwo(index){
  var jasonString = JSON.stringify(index);
  localStorage.setItem("combatant2", jasonString);
}

function loadCombatantTwo(){
  var loaded = localStorage.getItem("combatant2");
  var index = JSON.parse(loaded);
  return allCountries[index];
}
