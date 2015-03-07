module.exports = function (creep) {
  var target = creep.pos.findClosest(Game.MY_CREEPS, {
      filter: function(object) {
          return object.hits < object.hitsMax;
      }
  });
  if(target) {
      creep.moveTo(target);
      creep.heal(target);
  }
}