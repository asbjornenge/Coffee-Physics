/* Improved Euler Integrator
*/
var ImprovedEuler,
  __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

ImprovedEuler = (function(_super) {

  __extends(ImprovedEuler, _super);

  function ImprovedEuler() {
    ImprovedEuler.__super__.constructor.apply(this, arguments);
  }

  ImprovedEuler.prototype.integrate = function(particles, dt, drag) {
    var acc, dtSq, p, vel, _i, _len, _results;
    acc = new Vector();
    vel = new Vector();
    dtSq = dt * dt;
    _results = [];
    for (_i = 0, _len = particles.length; _i < _len; _i++) {
      p = particles[_i];
      if (!(!p.fixed)) continue;
      p.old.pos.copy(p.pos);
      p.acc.scale(p.massInv);
      vel.copy(p.vel);
      acc.copy(p.acc);
      p.pos.add((vel.scale(dt)).add(acc.scale(0.5 * dtSq)));
      p.vel.add(p.acc.scale(dt));
      if (drag) p.vel.scale(drag);
      _results.push(p.acc.clear());
    }
    return _results;
  };

  return ImprovedEuler;

})(Integrator);
