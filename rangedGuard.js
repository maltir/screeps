 module.exports = function(creep){
    var targets = creep.pos.findClosest(Game.HOSTILE_CREEPS);
  	if(targets.length && targest.owner != "Source Keeper") {
  		creep.moveTo(targets[0]);
  		creep.rangedAttack(targets[0]);
  	}
 }