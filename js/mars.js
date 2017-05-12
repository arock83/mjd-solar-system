"use strict";

console.log("mars.js loaded");

var data =  {
	name: "Mars",
	discovered: "unknown",
	mass: "6.4171e23 kg",
	radius: "3,396.2 km",
	distance: "2.27943e8",
	atmosphere: "carbon dioxide, argon, and nitrogen",
	satellites: "Phobos and Deimos",
	visitors: "Phobos-Grunt, Yinghuo-1, Phoenix, Mars Exploration Rover Spirit, Mars Polar Lander, Nozomi, Mars Climate Orbiter, Mars Pathfinder & Sojourner, Mars 96, Mars Global Surveyor, Mars Observer, Phobos 2, Phobos 1, Viking program, Mars 4, 5, 6, & 7, Mars 2 & 3, Mariner 9, Kosmos 419, Mariner 8, Mars 1969, Mariner 6 & 7, Zond 2, Mariner 4, Mariner 3, Mars 1, Korabl 11 & 13, Korabl 4 & 5"

};

// function outputTo(domElement) {
//   domElement.append(	`<div class="planet">
//   							<h2>${mars.name}</h2>
//   							<p>Discovered: ${mars.discovered}</p>
//   							<p>Mass: ${mars.mass}</p>
//   							<p>Radius: ${mars.radius}</p>
//   							<p>Distance: ${mars.distance}</p>
//   							<p>Atmosphere: ${mars.atmoshere}</p>
//   							<p>Natural Satellites: ${mars.satellites}</p>
//   							<p>Visiting Probes: ${mars.visitors}</p>
//   						</div>`);
// }

module.exports = {data};