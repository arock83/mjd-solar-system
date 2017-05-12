"use strict";

console.log("saturn.js loaded");

var data =  {
	name: "Saturn",
	discovered: "unknown",
	mass: "5.6832e26 kg",
	radius: "5.8232e4 km",
	distance: "1.426666e9 km",
	atmosphere: "hydrogen and helium",
	satellites: "61 moons",
	visitors: "Pioneer 10, Pioneer 11, Voyager 1, Voyager 2, Galileo, Ulysses, Cassini-Huygens, New Horizons, Juno"

};

// function outputTo(domElement) {
//   domElement.append(	`<div class="planet">
//   							<h2>${saturn.name}</h2>
//   							<p>Discovered: ${saturn.discovered}</p>
//   							<p>Mass: ${saturn.mass}</p>
//   							<p>Radius: ${saturn.radius}</p>
//   							<p>Distance: ${saturn.distance}</p>
//   							<p>Atmosphere: ${saturn.atmoshere}</p>
//   							<p>Natural Satellites: ${saturn.satellites}</p>
//   							<p>Visiting Probes: ${saturn.visitors}</p>
//   						</div>`);
// }

module.exports = {data};