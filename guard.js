 module.exports = function(creep){
    var targets = creep.room.find(Game.HOSTILE_CREEPS,{
      filter: function(obj){
        return obj.owner!="Source Keeper"
      }
    });
  	if(targets.length) {
  		creep.moveTo(targets[0]);
  		creep.attack(targets[0]);
  	}
 }