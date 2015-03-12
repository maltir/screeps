 module.exports = function(creep){
    if(!creep.memory.dit){
      creep.say(creep.memory.puissance);
      creep.memory.dit=true;
    }
    var target = creep.pos.findClosest(creep.pos.findInRange(Game.HOSTILE_CREEPS, 10), {
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