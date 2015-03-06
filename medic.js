 module.exports = new medic();

 function medic(){}
 medic.prototype.create=function(){
    Game.spawns.Spawn1.createCreep([Game.MOVE,Game.MOVE,Game.HEAL,Game.HEAL,Game.HEAL],null,{role: 'medic'});
 };
 medic.prototype.doSomething=function(creep){
    var target = creep.pos.findClosest(Game.MY_CREEPS, {
        filter: function(object) {
            return object.hits < object.hitsMax;
        }
    });
    if(target) {
        creep.moveTo(target);
        creep.heal(target);
    }
 };