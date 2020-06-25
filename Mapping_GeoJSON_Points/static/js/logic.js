// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
	// 13.5.2 Skill Drill
    onEachFeature: function(feature, layer) {
		console.log(layer);
		layer.bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3><hr><h4>Airport name: " + feature.properties.name + "</h4>");
	  }
}).addTo(map);
// // 13.5.2 Skill Drill
// L.geoJSON(sanFranAirport, {
//     pointToLayer: function(feature, latlng) {
// 		console.log(feature);
// 		return L.marker(latlng)
// 		.bindPopup("<h2>" + feature.properties.name + "</h2><hr><h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
// 	  }
// }).addTo(map);
// We create the tile layer that will be the background of our map. (see module 13.2.4 to change)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id:'streets-v11',
	accessToken: API_KEY
}).addTo(map);
// Add a night time layer.
let previewNight = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id:'navigation-preview-night-v4',
	accessToken: API_KEY
});
// var marker = {
// 	Circle: circleMarker
// }

var baseMaps = {
	Daytime: streets,
	Nighttime: previewNight
}

// Then we add our 'streets' tile layer to the map.
L.control.layers(baseMaps).addTo(map);