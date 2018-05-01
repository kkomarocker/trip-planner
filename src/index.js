const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1Ijoia2tvbWFyb2NrZXIiLCJhIjoiY2pnbzU4bDBlMDFrZzJ3cGoyNXpnMGlpZSJ9.E97o4pQbF_r_68XY5oZZRg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl)
.setLngLat([-73.9262, 40.8296])
.addTo(map);
