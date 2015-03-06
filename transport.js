module.exports = new transport();

function transport(){}
transport.prototype.create=function(source){
  if(source===1)
      Game.spawns.Spawn1.createCreep([Game.MOVE,Game.MOVE,Game.MOVE,Game.MOVE,Game.CARRY],null,{role: 'transport'});
  else
      Game.spawns.Spawn1.createCreep([Game.MOVE,Game.MOVE,Game.MOVE,Game.MOVE,Game.CARRY],null,{role: 'transport2'});
};
transport.prototype.doSomething=function(creep,source){

}