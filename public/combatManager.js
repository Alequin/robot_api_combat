const START_HEALTH = 1000;

function updateCombatantOne(){
  var country = loadCombatantOne();
  var combatantDiv = document.querySelector("#left-combatant");
  if(country !== undefined && country !== null){
    updateCombatantContainer(combatantDiv.children, country);
  }
}

function updateCombatantTwo(){
  var country = loadCombatantTwo();
  var combatantDiv = document.querySelector("#right-combatant");
  if(country !== undefined && country !== null){
    updateCombatantContainer(combatantDiv.children, country);
  }
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

function runFight(country1, country2){

  var robot1 = country1.robot;
  var robot2 = country2.robot;

  var robot1.health = START_HEALTH;
  var robot2.health = START_HEALTH;

  var attacker = dice(1,2) === 1 ? robot1 : robot2;
  var defender = attacker === robot1 ? robot2 : robot1;
  while(robot1.health > 0 && robot2.health > 0){
    var healthToLoose = fight(attacker, defender);
    defender.health -= healthToLoose;

    var temp = attacker;
    attacker = defender;
    defender = temp;
  }

  if(robot1.health > 0){
    country1.score.win++;
    country2.score.loss++;
    return country1;
  }else{
    country2.score.win++;
    country1.score.loss++;
    return country2;
  }
}

function fight(attacker, defender){
  var damage = attacker.attack + dice(0, 100);
  damage -= robot2.defence + dice(0, 50);
  return damage;
}
