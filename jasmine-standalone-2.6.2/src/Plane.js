'use strict';
function Plane(name){
  this.name = "name"
}

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
};

Plane.prototype.takeOff = function(airport){
  console.log(4);
  airport.clearForTakeOff(this);
  console.log(5);
};
