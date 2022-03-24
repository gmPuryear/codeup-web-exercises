"use strict";

mapboxgl.accessToken = MAPBOX;

// creates map and adds to page
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [startLon, startLat],
    zoom: 10
});

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([startLon, startLat])
    .addTo(map);

// allows user to drag and drop a marker on the map and have the weather updated for the given area
function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    getWeatherData(lngLat.lat, lngLat.lng);
}

marker.on('dragend', onDragEnd);

// geocoder object
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
});

// selects geocoder search bar
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

// sends coordinates from 'geocoder' search to weather function to show the location's weather
    geocoder.on('result', function(e) {
        marker.remove();
        getWeatherData(e.result.center[1], e.result.center[0]);
    })





