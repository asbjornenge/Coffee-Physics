/* Velocity Verlet Integrator
*/
var Verlet,
  __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

Verlet = (function(_super) {

  __extends(Verlet, _super);

  function Verlet() {
    Verlet.__super__.constructor.apply(this, arguments);
  }

  Verlet.prototype.integrate = function(particles, dt, drag) {
    var dtSq, p, pos, _i, _len, _results;
    pos = new Vector();
    dtSq = dt * dt;
    _results = [];
    for (_i = 0, _len = particles.length; _i < _len; _i++) {
      p = particles[_i];
      if (!(!p.fixed)) continue;
      p.acc.scale(p.massInv);
      (p.vel.copy(p.pos)).sub(p.old.pos);
      if (drag) p.vel.scale(drag);
      (pos.copy(p.pos)).add(p.vel.add(p.acc.scale(dtSq)));
      p.old.pos.copy(p.pos);
      p.pos.copy(pos);
      _results.push(p.acc.clear());
    }
    return _results;
  };

  return Verlet;

})(Integrator);
