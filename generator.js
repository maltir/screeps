module.exports = function(){
  if(nbHavester<2){
      harvester(null);
  }else if(nbTransport<4){
      transport(null);
  }else{
    if(nbMedic<(nbGuard/3)){
      Game.spawns.Spawn1.createCreep([Game.TOUGH,Game.MOVE,Game.MOVE,Game.HEAL,Game.HEAL,Game.HEAL],null,{role: 'medic'});
    }else if(nbGuard<20){
      var guardParts = new Array();
      //tough part
      for(var i=0;i<tough;i++)
      {
        guardParts.push(Game.TOUGH);
      }
      guardParts.push(Game.MOVE);
      guardParts.push(Game.MOVE);
      guardParts.push(Game.ATTACK);
      guardParts.push(Game.ATTACK);
      guardParts.push(Game.ATTACK);
      Game.spawns.Spawn1.createCreep(guardParts,null,{role: 'guard'});
    }
  }
  nbHavester=0;
  nbBuilder=0;
  nbGuard=0;
  nbHavester2=0;
  nbMedic=0;
  nbTransport=0;
}
