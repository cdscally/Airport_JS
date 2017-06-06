'use strict';

function Airport(weather){
  this._hangar = [];
  this._weather = weather;
}
Airport.prototype.planes = function(){ return this._hangar; };


Airport.prototype.weatherIsClear = function () {
  return this._weather.isClear();
};

Airport.prototype.land = function (plane) {
  this._hangar.push(plane);
  console.log(plane + ' has landed!');
};

Airport.prototype.clearForLanding = function(plane) {
  if(this.weatherIsClear()){
    this.land(plane);
  } else {
    console.log("Can not land due to stormy weather");
  }
};

Airport.prototype.clearForTakeOff = function(plane) {
  this._hangar.splice(this._hangar.indexOf(plane), 1 );
  console.log(plane + 'has taken off!');
};
