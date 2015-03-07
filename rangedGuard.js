 module.exports = function(creep){
    var target = creep.pos.findClosest(Game.HOSTILE_CREEPS);
  	if(target.owner != "Source Keeper") {
  		creep.moveTo(target);
  		creep.rangedAttack(target);
  	}
 }