"use strict";

console.log("venus.js loaded");

var data =  {
	name: "Venus",
	discovered: "unknown",
	mass: "4.8675e24 kg",
	radius: "6,051.8 km",
	distance: "1.08209e8 km",
	atmosphere: "carbon-dioxide nitrogen",
	satellites: "none",
	visitors: "Mariner 2, Venera 4, Venera 9, Venera 10, Venera 13, Venera 14, Venera 15, Venera 16, Pioneer, Venus Express, Akatsuki"

};

// function outputTo(domElement) {
//   domElement.append(	`<div class="planet">
//   							<h2>${venus.name}</h2>
//   							<p>Discovered: ${venus.discovered}</p>
//   							<p>Mass: ${venus.mass}</p>
//   							<p>Radius: ${venus.radius}</p>
//   							<p>Distance: ${venus.distance}</p>
//   							<p>Atmosphere: ${venus.atmoshere}</p>
//   							<p>Natural Satellites: ${venus.satellites}</p>
//   							<p>Visiting Probes: ${venus.visitors}</p>
//   						</div>`);
// }

module.exports = {data};