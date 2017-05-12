"use strict";

console.log("earth.js loaded");

var data =  {
	name: "Earth",
	discovered: "Forever",
	mass: "5.97237e24 kg",
	radius: "6371.0 km",
	distance: "1.495982e8 km",
	atmosphere: "nitrogen, and oxygen",
	satellites: "Moon",
	visitors: ""

};

// function outputTo(domElement) {
//   domElement.append(	`<div class="planet">
//   							<h2>${earth.name}</h2>
//   							<p>Discovered: ${earth.discovered}</p>
//   							<p>Mass: ${earth.mass}</p>
//   							<p>Radius: ${earth.radius}</p>
//   							<p>Distance: ${earth.distance}</p>
//   							<p>Atmosphere: ${earth.atmoshere}</p>
//   							<p>Natural Satellites: ${earth.satellites}</p>
//   							<p>Visiting Probes: ${earth.visitors}</p>
//   						</div>`);
// }

module.exports = {data};