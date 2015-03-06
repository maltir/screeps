var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');
var rangedGuard = require('rangedGuard');
var medic = require('medic');
var nbHavester=0;
var nbHavester2=0;
var nbBuilder=0;
var nbGuard=0;
var nbMedic=0;
var ranged=false;


for(var nom in Game.creeps) {
	var creep = Game.creeps[nom];
	switch(creep.memory.role) {
	    case 'harvester':
        	harvester.doSomething(creep,0);
	    	nbHavester++;
	    	break;
	    case 'harvester2':
	        harvester.doSomething(creep,1);
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
            medic.doSomething(creep);
    	    nbMedic++;
    	    break;
    	default:
    	    console.log("FAIL: no role");
    	    break;
	}
}

if(nbHavester<3){
    harvester.create(1);
}else if(false){
    Game.spawns.Spawn1.createCreep([Game.MOVE,Game.CARRY,Game.WORK,Game.WORK,Game.WORK],null,{role: 'builder'});
}else if(nbGuard<3){
    Game.spawns.Spawn1.createCreep([Game.MOVE,Game.MOVE,Game.ATTACK,Game.ATTACK,Game.TOUGH],null,{role: 'guard'});
}else if(nbMedic<2){
    medic.create();
}else if(nbHavester2<3){
    harvester.create(2);
}else{
    if(ranged){
        Game.spawns.Spawn1.createCreep([Game.MOVE,Game.MOVE,Game.RANGED_ATTACK,Game.TOUGH],null,{role: 'rangedGuard'});
        ranged=!ranged;
    }else{
        Game.spawns.Spawn1.createCreep([Game.MOVE,Game.MOVE,Game.ATTACK,Game.ATTACK,Game.TOUGH],null,{role: 'guard'});
        ranged=!ranged;
    }
}
nbHavester=0;
nbBuilder=0;
nbGuard=0;
nbHavester2=0;
nbMedic=0;