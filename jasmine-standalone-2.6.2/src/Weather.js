'use strict';
function Weather(){
  this._stormy = false
}

Weather.prototype.setStorm = function(state){
  this._stormy = state;
};

Weather.prototype.stormy = function(){
  return this._stormy;
};

Weather.prototype.isClear = function() {
  return this._stormy === false;
}
