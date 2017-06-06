'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weatherDouble;
  beforeEach(function(){
    weatherDouble = {
      isClear: function() { return true; }
    }
    airport = new Airport(weatherDouble);
    plane = jasmine.createSpy('plane');
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for take-off', function(){

    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('says no land on bad weather', function() {
    var badWeatherDouble = {
      isClear: function() { return false; }
    };
    airport = new Airport(badWeatherDouble);
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([]);
  })
});
