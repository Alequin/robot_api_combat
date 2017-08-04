function saveCombatantOne(country){
  var jasonString = JSON.stringify(country);
  localStorage.setItem("combatant1", jasonString);
}

function loadCombatantOne(){
  var loaded = localStorage.getItem("combatant1");
  var country = JSON.parse(loaded);
  return country;
}

function saveCombatantTwo(country){
  var jasonString = JSON.stringify(country);
  localStorage.setItem("combatant2", jasonString);
}

function loadCombatantTwo(){
  var loaded = localStorage.getItem("combatant2");
  var country = JSON.parse(loaded);
  return country;
}
