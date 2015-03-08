module.exports = function (creep) {
  create: function(source){
    if(source===1)
      Game.spawns.Spawn1.createCreep([Game.MOVE,Game.CARRY,Game.WORK,Game.WORK,Game.WORK],null,{role: 'harvester'});
    else
      Game.spawns.Spawn1.createCreep([Game.MOVE,Game.CARRY,Game.WORK,Game.WORK,Game.WORK],null,{role: 'harvester2'});
  }
  doSomething:function(creep,source){
    this.harvest(creep,source);
  }
  harvest:function(creep,source,otherSources){
    if(creep.energy < creep.energyCapacity) {
  	  var sources = Game.spawns.Spawn1.pos.findClosest(Game.SOURCES_ACTIVE, {ignoreCreeps: true});
  		creep.moveTo(sources);
  		creep.harvest(sources);
  	}
  	else {
  		creep.moveTo(Game.spawns.Spawn1);
  		creep.transferEnergy(Game.spawns.Spawn1);
  	}
  }
}