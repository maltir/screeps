module.exports = function(creep){
  if(creep===null){
      Game.spawns.Spawn1.createCreep([Game.WORK,Game.WORK,Game.WORK,Game.MOVE,Game.CARRY],null,{role: 'harvester'});
  }else if(creep.energy < creep.energyCapacity) {
  	  var sources = Game.spawns.Spawn1.pos.findClosest(Game.SOURCES_ACTIVE, {ignoreCreeps: true});
  		creep.moveTo(sources);
  		creep.harvest(sources);

  		var target = creep.pos.findClosest(creep.pos.findInRange(Game.MY_CREEPS, 5), {
        filter: function(object) {
          return object.memory.role === 'transport'}
      });
      creep.transferEnergy(target);
      console.log(target);
  }
}
