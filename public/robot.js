function Robot(name, attack, defence, image){
  this.name = name;
  this.attack = attack;
  this.defence = defence;
  this.image = image;
}

function generateRandomRobots(count){

  var result = [];
  var names = generateNames(count);

  for(var j=0; j<count; j++){
    var name = names[j];
    var attack = dice(10, 40);
    var defence = dice(10, 40);
    // var image = dice(1,2) === 1 ? "robo1.jpg" : "robo2.jpg";
    var image = "https://robohash.org/"+ dice(1, 1000000) +".png";
    result.push(new Robot(name, attack, defence, image));
  }

  return result;
}

function generateNames(count){

  var names = ["Cabe", "Mechan", "Odeb", "Olog", "Plexi", "Boomer", "Nozzle", "Saber", "Raiwad", "Daijinan", "Beta", "Sark", "Arz", "Iluoid", "Grezzer", "Copper"];
  var adjectives = ["Autonomous", "Giant", "destroyer", "Bionic", "thingamabob", "Undefined"];

  var result = [];
  var namesLength = names.length;
  var adjectivesLength = adjectives.length;

  for(var j=0; j<count; j++){
    var nameToUse = names[dice(0, namesLength-1)];
    var adjectiveToUse = adjectives[dice(0, adjectivesLength-1)];
    result.push(nameToUse + " the " + adjectiveToUse);
  }

  return result;
}
