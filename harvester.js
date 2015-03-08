module.exports = function(creep){
  if(creep===null){
      Game.spawns.Spawn1.createCreep([Game.WORK,Game.WORK,Game.WORK,Game.MOVE,Game.CARRY],null,{role: 'harvester'});
  }else if(creep.energy < creep.energyCapacity) {
  	  var sources = Game.spawns.Spawn1.pos.findClosest(Game.SOURCES_ACTIVE, {ignoreCreeps: true});
  		creep.moveTo(sources);
  		creep.harvest(sources);

  		var found = creep.room.lookForAt('creep', creep.memory.toDrop);
      creep.transferEnergy(found);
  }
}