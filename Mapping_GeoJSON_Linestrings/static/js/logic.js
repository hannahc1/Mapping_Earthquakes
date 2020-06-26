// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map. (see module 13.2.4 to change)
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id:'light-v10',
	accessToken: API_KEY
});//.addTo(map);
// Add a night time layer.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id:'dark-v10',
	accessToken: API_KEY
});//.addTo(map);
// Create the map object with center and zoom level.
let map = L.map('mapid',{
	center: [30, 30],
	zoom: 2,
	layers: [dark]
  });
// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/hannahc1/Mapping_Earthquakes/master/torontoRoutes.json";
// Grabbing our GeoJSON data.
// Create a style for the lines.
let myStyle = {
	color: "#ffffa1",
	weight: 2
}
d3.json(torontoData).then(function(data) {
    console.log(data);
   
  L.geoJson(data, {
	style: myStyle,
	onEachFeature: function(feature, layer) {
    		console.log(layer);
    		layer.bindPopup("<h3>Airline: " + feature.properties.airline + "</h3><hr><h4>Destination: " + feature.properties.dst + "</h4>");
    	  }})
  .addTo(map);
});
var baseMaps = {
	Day: light,
	Night: dark
};


// Then we add our 'streets' tile layer to the map.
L.control.layers(baseMaps).addTo(map);
