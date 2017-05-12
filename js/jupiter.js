"use strict";

console.log("jupiter.js loaded");

var data =  {
	name: "Jupiter",
	discovered: "unknown",
	mass: "1.8981e27 kg",
	radius: "6.9911e4 km",
	distance: "7.7834e8 km",
	atmosphere: "hydrogen and helium",
	satellites: "53 moons",
	visitors: "Pioneer 10, Pioneer 11, Voyager 1, Voyager 2, Galileo, Ulysses, New Horizons, Juno"

};

// function outputTo(domElement) {
//   domElement.append(	`<div class="planet">
//   							<h2>${jupiter.name}</h2>
//   							<p>Discovered: ${jupiter.discovered}</p>
//   							<p>Mass: ${jupiter.mass}</p>
//   							<p>Radius: ${jupiter.radius}</p>
//   							<p>Distance: ${jupiter.distance}</p>
//   							<p>Atmosphere: ${jupiter.atmoshere}</p>
//   							<p>Natural Satellites: ${jupiter.satellites}</p>
//   							<p>Visiting Probes: ${jupiter.visitors}</p>
//   						</div>`);
// }

module.exports = {data};