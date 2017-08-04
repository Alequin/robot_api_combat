function updateCombatantOne(){
  var country = loadCombatantOne();
  var combatantDiv = document.querySelector("#left-combatant");
  updateCombatantContainer(combatantDiv.children, country);
}

function updateCombatantTwo(){
  var country = loadCombatantTwo();
  var combatantDiv = document.querySelector("#right-combatant");
  updateCombatantContainer(combatantDiv.children, country);
}

function updateCombatantContainer(combatantChildren, country){
  var title = combatantChildren[0];
  var image = combatantChildren[1];
  var attack = combatantChildren[2];
  var defence = combatantChildren[3];

  title.innerText = country.name;
  image.src = country.robot.image;
  attack.innerText = "Attack: " + country.robot.attack;
  defence.innerText = "defence: " + country.robot.defence;
}
