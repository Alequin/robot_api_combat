function Robot(name, attack, defence, image){
  this.name = name;
  this.attack = attack;
  this.defence = defence;
  this.image = image;
}

function randomRobot(){

  var name = "robot 1";
  var attack = dice(10, 40);
  var defence = dice(10, 40);
  var image = dice(1,2) === 1 ? "robo1.jpg" : "robo2.jpg";

  return new Robot(name, attack, defence, image);
}
