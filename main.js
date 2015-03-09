var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');
var rangedGuard = require('rangedGuard');
var medic = require('medic');
var transport = require('transport');
var generator = require('generator');
var nbHavester=0;
var nbHavester2=0;
var nbBuilder=0;
var nbGuard=0;
var nbMedic=0;
var nbTransport=0;
var ranged=false;
var source=null;
var tough=1;

if(source==null)
  source = Game.spawns.Spawn1.pos.findClosest(Game.SOURCES, {ignoreCreeps: true});

if((Game.rooms.survivalInfo.wave/2)>1)
  tough=Game.rooms.survivalInfo.wave/2;


for(var nom in Game.creeps) {
	var creep = Game.creeps[nom];
	switch(creep.memory.role) {
	    case 'harvester':
        	harvester(creep,source);
  	    	nbHavester++;
  	    	break;
	    case 'harvester2':
	        harvester(creep,source);
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
generator();
