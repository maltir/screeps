var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');
var rangedGuard = require('rangedGuard');
var medic = require('medic');
var transport = require('transport');
var nbHavester=0;
var nbHavester2=0;
var nbBuilder=0;
var nbGuard=0;
var nbMedic=0;
var nbTransport=0;
var ranged=false;


for(var nom in Game.creeps) {
	var creep = Game.creeps[nom];
	switch(creep.memory.role) {
	    case 'harvester':
        	harvester(creep);
  	    	nbHavester++;
  	    	break;
	    case 'harvester2':
	        harvester(creep);
  		    nbHavester2++;
  		    break;
	    case 'builder':
	        builder(creep);
	        nbBuilder++;
	        break;
	    case 'guard':
	        guard(creep);
    	    nbGuard++;
    	    break;
      case 'rangedGuard':
          rangedGuard(creep);
          break;
      case 'medic':
          medic(creep);
    	    nbMedic++;
    	    break;
	    case 'transport':
          transport(creep);
    	    nbTransport++;
    	    break;
    	default:
    	    console.log("FAIL: no role");
    	    break;
	}
}

if(nbHavester<2){
    harvester(null);
}else if(nbTransport<4){
    transport(null);
}else if(nbGuard<3){
    Game.spawns.Spawn1.createCreep([Game.TOUGH,Game.MOVE,Game.MOVE,Game.ATTACK,Game.ATTACK],null,{role: 'guard'});
}else if(nbMedic<2){
    Game.spawns.Spawn1.createCreep([Game.TOUGH,Game.MOVE,Game.MOVE,Game.HEAL,Game.HEAL,Game.HEAL],null,{role: 'medic'});
}else{
    if(ranged){
        Game.spawns.Spawn1.createCreep([Game.TOUGH,Game.MOVE,Game.MOVE,Game.RANGED_ATTACK],null,{role: 'rangedGuard'});
        ranged=!ranged;
    }else{
        Game.spawns.Spawn1.createCreep([Game.TOUGH,Game.MOVE,Game.MOVE,Game.ATTACK,Game.ATTACK],null,{role: 'guard'});
        ranged=!ranged;
    }
}
nbHavester=0;
nbBuilder=0;
nbGuard=0;
nbHavester2=0;
nbMedic=0;
nbTransport=0;