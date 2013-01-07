'use strict';

describe('Service: env', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var env;
  beforeEach(inject(function(_env_) {
    env = _env_;
  }));

  it('should be running in development on localhost', function () {
    expect(env.env).toBe("development");
  });

});
