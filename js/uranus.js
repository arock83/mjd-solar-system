"use strict";

console.log("uranus.js loaded");

var data =  {
	name: "Uranus",
	discovered: "March 13, 1781",
	mass: "8.681e25 kg",
	radius: "2.5362e4 km",
	distance: "2.87066e9 km",
	atmosphere: "hydrogen, helium, and methane",
	satellites: "27 moons",
	visitors: "Pioneer 10, Pioneer 11, Voyager 1, Voyager 2, Galileo, Ulysses, New Horizons, Juno"

};

// function outputTo(domElement) {
//   domElement.append(	`<div class="planet">
//   							<h2>${uranus.name}</h2>
//   							<p>Discovered: ${uranus.discovered}</p>
//   							<p>Mass: ${uranus.mass}</p>
//   							<p>Radius: ${uranus.radius}</p>
//   							<p>Distance: ${uranus.distance}</p>
//   							<p>Atmosphere: ${uranus.atmoshere}</p>
//   							<p>Natural Satellites: ${uranus.satellites}</p>
//   							<p>Visiting Probes: ${uranus.visitors}</p>
//   						</div>`);
// }

module.exports = {data};