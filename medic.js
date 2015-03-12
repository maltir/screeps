module.exports = function (creep) {
  var target = creep.pos.findClosest(Game.MY_CREEPS, {
      filter: function(object) {
          return object.hits < object.hitsMax && object.id !== creep.id;
      }
  });
  if(target) {
      creep.moveTo(target);
      creep.heal(target);
  }else if(Game.flags.Flag1 !== undefined){
	  creep.moveTo(Game.flags.Flag1);
	}
}
