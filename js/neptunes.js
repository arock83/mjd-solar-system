"use strict";

console.log("neptune.js loaded");

var data =  {
	name: "Neptune",
	discovered: "September 23, 1846",
	mass: "1.0241e26 kg",
	radius: "2.4622e4 km",
	distance: "4.4983e9 km",
	atmosphere: "hydrogen, helium, methane",
	satellites: "13 moons",
	visitors: "Pioneer 10, Pioneer 11, Voyager 1, Voyager 2, Galileo, Ulysses, New Horizons, Juno"

};

// function outputTo(domElement) {
//   domElement.append(	`<div class="planet">
//   							<h2>${neptune.name}</h2>
//   							<p>Discovered: ${neptune.discovered}</p>
//   							<p>Mass: ${neptune.mass}</p>
//   							<p>Radius: ${neptune.radius}</p>
//   							<p>Distance: ${neptune.distance}</p>
//   							<p>Atmosphere: ${neptune.atmoshere}</p>
//   							<p>Natural Satellites: ${neptune.satellites}</p>
//   							<p>Visiting Probes: ${neptune.visitors}</p>
//   						</div>`);
// }

module.exports = {data};