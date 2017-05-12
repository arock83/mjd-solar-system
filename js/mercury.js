"use strict";

console.log("mercury.js loaded");

var data =  {
	name: "Mercury",
	discovered: "unknown",
	mass: "3.30e23 kg",
	radius: "2,439.7 km",
	distance: "57,910,000 km",
	atmosphere: "hydrogen, helium, sodium, and oxygen",
	satellites: "none",
	visitors: "Mariner 10 and Messenger"

};

function outputTo(domElement, planetData) {
  domElement.append(	`<div class="planet">
  							<h2>${planetData.name}</h2>
  							<p>Discovered: ${planetData.discovered}</p>
  							<p>Mass: ${planetData.mass}</p>
  							<p>Radius: ${planetData.radius}</p>
  							<p>Distance: ${planetData.distance}</p>
  							<p>Atmosphere: ${planetData.atmoshere}</p>
  							<p>Natural Satellites: ${planetData.satellites}</p>
  							<p>Visiting Probes: ${planetData.visitors}</p>
  						</div>`);
}

module.exports = {outputTo, data};