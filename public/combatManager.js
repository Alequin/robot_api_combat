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

function runFight(){

  var country1 = loadCombatantOne();
  var country2 = loadCombatantTwo();

  if(country1 === undefined || country2 === undefined){
    return;
  }

  var robot1 = country1.robot;
  var robot2 = country2.robot;

  robot1.health = START_HEALTH;
  robot2.health = START_HEALTH;

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
    highlightCombatantOne();
  }else{
    country2.score.win++;
    country1.score.loss++;
    highlightCombatantTwo();
  }
}

function fight(attacker, defender){
  var damage = attacker.attack + dice(0, 100);
  damage -= defender.defence + dice(0, 100);
  if(damage < 0) damage = 0;
  return damage;
}

function highlightCombatantOne(){
  highlightCombatants({
    winner: document.querySelector("#left-combatant"),
    looser: document.querySelector("#right-combatant")
  });
}

function highlightCombatantTwo(){
  highlightCombatants({
    winner: document.querySelector("#right-combatant"),
    looser: document.querySelector("#left-combatant")
  });
}

function highlightCombatants(divs){
  var winnerImage = divs.winner.children[1];
  var looserImage = divs.looser.children[1];

  winnerImage.style.borderColor = "green";
  looserImage.style.borderColor = "red";
}
