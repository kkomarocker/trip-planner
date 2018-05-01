const mapboxgl = require('mapbox-gl');
const buildmarker = require('./marker.js')

mapboxgl.accessToken = 'pk.eyJ1Ijoia2tvbWFyb2NrZXIiLCJhIjoiY2pnbzU4bDBlMDFrZzJ3cGoyNXpnMGlpZSJ9.E97o4pQbF_r_68XY5oZZRg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

const marker = buildmarker("restaurants", [-74.009151, 40.705086])
marker.addTo(map);
