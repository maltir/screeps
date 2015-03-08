module.exports = function(creep){
  if(creep === null){
    Game.spawns.Spawn1.createCreep([Game.MOVE,Game.MOVE,Game.MOVE,Game.MOVE,Game.CARRY],null,{role: 'transport'});
  }else{
    if(creep.energy < creep.energyCapacity){
      var energy = creep.pos.findClosest(creep.pos.findInRange(Game.DROPPED_ENERGY, 10));
      if(energy){
        creep.moveTo(energy);
        creep.pickup(energy);
      }else{
        var target = creep.pos.findClosest(Game.MY_CREEPS, {
          filter: function(object) {
            return object.memory.role === "harvester";
          }
        });
        creep.moveTo(target);
      }
    }else{
      creep.moveTo(Game.spawns.Spawn1);
      creep.transferEnergy(Game.spawns.Spawn1);
    }
  }
}
