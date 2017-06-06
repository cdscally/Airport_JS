'use strict';

function Airport(){
  this._hangar = [];
}
Airport.prototype.planes = function(){ return this._hangar; };

Airport.prototype.clearForLanding = function(plane) {
  this._hangar.push(plane);
  console.log(plane + 'has landed!')
};

Airport.prototype.clearForTakeOff = function(plane) {
  console.log(1);
  this._hangar.splice(this._hangar.indexOf(plane), 1 );
  console.log(2);
  console.log(plane + 'has taken off!');
  console.log(3);
};
