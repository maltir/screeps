module.exports = function(creep,source){
  if(creep===null){
      Game.spawns.Spawn1.createCreep([Game.WORK,Game.WORK,Game.WORK,Game.MOVE,Game.CARRY],null,{role: 'harvester'});
  }else if(creep.energy <= creep.energyCapacity) {
  		creep.moveTo(source);
  		creep.harvest(source);

  		var target = creep.pos.findClosest(Game.MY_CREEPS,{
        filter: function(object) {
          return object.memory.role === 'transport'}
      });
      creep.transferEnergy(target);
      if(creep.ticksToLive < 150){
        creep.say("I will die!!");
        nbHavester--;
      }
  }
}
