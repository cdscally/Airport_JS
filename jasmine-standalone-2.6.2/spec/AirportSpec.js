'use strict';

describe('Airport', function(){
  var airport;
  beforeEach(function(){
    airport = new Airport();
  });
  it('has no plnes by default', function(){
    expect(airport.planes()).toEqual([]);
  });
});
