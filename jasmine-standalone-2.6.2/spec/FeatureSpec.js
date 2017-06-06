'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    weather = new Weather();
    airport = new Airport(weather);
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to take off from an airport', function(){
    plane.takeOff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

  it('Planes can not land when it\'s stormy', function(){
    weather.setStorm(true);
    console.log('inside test: before landing')
    console.log(weather._stormy);
    plane.land(airport);
    console.log('inside test: after landing')
    console.log(weather._stormy);
    expect(airport.planes()).not.toContain(plane);
  });

});
