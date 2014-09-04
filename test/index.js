'use strict';

var should = require('should'); // jshint ignore:line

var escomplex = require('../lib/index');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, description, func) {
  task = func;
};

var configMock = {
  root: __dirname,
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

escomplex(gulpMock, configMock);

describe('Gulp Module ESComplex', function() {
  it('Should return a function', function() {
    escomplex.should.be.type('function');
  });

  it('Should add a task', function() {
    task.should.be.type('function');
  });

  it('Should run and throw an error', function(cb) {
    try {
      task();
    } catch (e) {
      cb();
    }
  });
});
