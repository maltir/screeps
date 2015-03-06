 module.exports = function(creep){
    var targets = creep.room.find(Game.HOSTILE_CREEPS,{
      filter: function(obj){
        if(obj.owner!="Source Keeper")
          return obj;
      }
    });
  	if(targets.length) {
  		creep.moveTo(targets[0]);
  		creep.rangedAttack(targets[0]);
  	}
 }