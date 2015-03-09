module.exports = function(){
  if(nbHavester<2){
      harvester(null);
  }else if(nbTransport<4){
      transport(null);
  }else if(nbGuard<3){
      Game.spawns.Spawn1.createCreep([Game.TOUGH,Game.MOVE,Game.MOVE,Game.ATTACK,Game.ATTACK,Game.ATTACK],null,{role: 'guard'});
  }else if(nbMedic<2){
      Game.spawns.Spawn1.createCreep([Game.TOUGH,Game.MOVE,Game.MOVE,Game.HEAL,Game.HEAL,Game.HEAL],null,{role: 'medic'});
  }else{
      if(ranged){
          Game.spawns.Spawn1.createCreep([Game.TOUGH,Game.MOVE,Game.MOVE,Game.RANGED_ATTACK],null,{role: 'rangedGuard'});
          ranged=!ranged;
      }else{
          Game.spawns.Spawn1.createCreep([Game.TOUGH,Game.MOVE,Game.MOVE,Game.ATTACK,Game.ATTACK,Game.ATTACK],null,{role: 'guard'});
          ranged=!ranged;
      }
  }
  nbHavester=0;
  nbBuilder=0;
  nbGuard=0;
  nbHavester2=0;
  nbMedic=0;
  nbTransport=0;
}
