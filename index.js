'use strict';

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

var Alexa = require('alexa-app');
var app = new Alexa.app('cabify');

/**
 * Called when the user invokes the skill without specifying what they want.
 */
app.launch(function(req, res) {
  res.say('Hello Cabify user!!');
});

module.exports = app;
