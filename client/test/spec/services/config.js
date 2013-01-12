'use strict';

describe('Service: config', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var config;

  beforeEach(module(function($provide) {
    $provide.value('env', 'development');
  }));
  beforeEach(inject(function(_config_) {
    config = _config_;
  }));

  it('should be running in development on localhost', function () {
    expect(config.api_url).toBeDefined();
  });

});
