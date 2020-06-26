// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id:'streets-v11',
	accessToken: API_KEY
});//.addTo(map);
// Add a night time layer.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id:'satellite-streets-v11',
	accessToken: API_KEY
});//.addTo(map);
// Create the map object with center and zoom level.
let map = L.map('mapid',{
	center: [39.5, -98.5],
	zoom: 3,
	layers: [streets]
  });
// Accessing the airport GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/hannahc1/Mapping_Earthquakes/master/torontoNeighborhoods.json";
// Grabbing our GeoJSON data.
// Create a style for the lines.
let myStyle = {
	color: "blue",
	fillColor: "yellow",
	weight: 1
}
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
	// Creating a GeoJSON layer with the retrieved data.
	console.log(data)
L.geoJson(data
	// , {
// 	style: myStyle,
// 	onEachFeature: function(feature, layer) {
//     		console.log(layer);
//     		layer.bindPopup("<h3>" + feature.properties.AREA_NAME + "</h3>");
//     	  }}
)
  .addTo(map);
});
// Create a base layer that holds both maps.
let baseMaps = {
	"Streets": streets,
	"Satellite": satelliteStreets
  };


// Then we add our 'streets' tile layer to the map.
L.control.layers(baseMaps).addTo(map);
