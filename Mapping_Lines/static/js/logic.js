// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([36.6213,-100], 5);
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });
// Coordinates for each point to be used in the line.
let line = [
	[37.6213, -122.3790],
	[30.202610016,-97.667137146],
	[43.695709229,-79.610046387],
	[40.6413, -73.795356750]
  ];
  // Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
	color: "blue",
	dashArray: '10,10',
	weight: 4,
	opacity: .5
  }).addTo(map);
// Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// Get data from cities.js
// let cityData = cities;
// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
// 	console.log(city)
// 	L.circleMarker(city.location,{
// 		radius: city.population/200000,
// 		weight: 4,
// 		color: "orange"
// 	})
// 	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// 	.addTo(map);
//    });
// Add a circle on the map.
// let circle = L.circle([34.0522, -118.2437],{
// 	radius: 300,
// 	color: 'black',
// 	fillColor: 'yellow'
// }).addTo(map);
// // We create the tile layer that will be the background of our map. (see module 13.2.4 to change)
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
// 	maxZoom: 18,
// 	id:'streets-v11',
// 	accessToken: API_KEY
// });
// Add a night time layer.
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id:'satellite-streets-v11',
	accessToken: API_KEY
}).addTo(map);
// var marker = {
// 	Circle: circleMarker
// }

// var baseMaps = {
// 	Daytime: streets,
// 	Nighttime: nightView
// }

// Then we add our 'streets' tile layer to the map.
// L.control.layers(baseMaps, marker).addTo(map);