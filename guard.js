 module.exports = function(creep){
    var target = creep.pos.findClosest(Game.HOSTILE_CREEPS, {
      filter: function(object) {
        return object.owner.username !== 'Source Keeper'}
    });
  	if(target) {
  		creep.moveTo(target);
  		creep.attack(target);
  	}else if(Game.flags.Flag1 !== undefined){
  	  creep.moveTo(Game.flags.Flag1);
  	}
 }