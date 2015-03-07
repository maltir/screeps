module.exports = new harvester();

function harvester(){}
harvester.prototype.create=function(source){
  if(source===1)
      Game.spawns.Spawn1.createCreep([Game.MOVE,Game.CARRY,Game.WORK,Game.WORK,Game.WORK],null,{role: 'harvester'});
  else
      Game.spawns.Spawn1.createCreep([Game.MOVE,Game.CARRY,Game.WORK,Game.WORK,Game.WORK],null,{role: 'harvester2'});
};
harvester.prototype.doSomething=function(creep,source){
    this.harvest(creep,source);
}
harvester.prototype.harvest=function(creep,source,otherSources){
  if(creep.energy < creep.energyCapacity) {
	  var sources = Game.spawns.Spawn1.pos.findClosest(Game.SOURCES, {ignoreCreeps: true});
		creep.moveTo(sources);
		creep.harvest(sources);
	}
	else {
		creep.moveTo(Game.spawns.Spawn1);
		creep.transferEnergy(Game.spawns.Spawn1);
	}
};