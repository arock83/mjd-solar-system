"use strict";

console.log("main.js loaded");

var planetInfo = $("#planetInfo");

let mercury = require('./mercury.js');
let venus = require('./venus.js');
let earth = require('./earth.js');
let mars = require('./mars.js');
let jupiter = require('./jupiter.js');
let saturn = require('./saturn.js');
let uranus = require('./uranus.js');
let neptune = require('./neptunes.js');

mercury.outputTo(planetInfo, mercury.data),
		.outputTo(planetInfo, venus.data),
		.outputTo(planetInfo, earth.data),
		.outputTo(planetInfo, mars.data),
		.outputTo(planetInfo, jupiter.data),
		.outputTo(planetInfo, saturn.data),
		.outputTo(planetInfo, uranus.data),
		.outputTo(planetInfo, neptune.data);

