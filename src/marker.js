// const mapbox = require('mapbox-gl')

// const activityDomEl = document.createElement("div"); // Create a new, detached DIV
// activityDomEl.style.width = "32px";
// activityDomEl.style.height = "39px";
// activityDomEl.style.backgroundImage = "url( http://i.imgur.com/WbMOfMl.png)";

// const hotelDomEl = document.createElement("div"); // Create a new, detached DIV
// hotelDomEl.style.width = "32px";
// hotelDomEl.style.height = "39px";
// hotelDomEl.style.backgroundImage = "url( http://i.imgur.com/D9574Cu.png)";

// const restaurantDomEl = document.createElement("div"); // Create a new, detached DIV
// restaurantDomEl.style.width = "32px";
// restaurantDomEl.style.height = "39px";
// restaurantDomEl.style.backgroundImage = "url( http://i.imgur.com/cqR6pUI.png)";

// const builMarker = ()=> {
//     new mapbox.Marker(activityDomEl)
// .setLngLat([-73.9262, 40.8296])
// .addTo(map)
// }
// module.export = buildMarker


const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
    const icon = iconURLs[type]
    console.log(icon)
    const createDomEl = document.createElement("div")

    createDomEl.style.width = "32px";
    createDomEl.style.height = "39px";
    createDomEl.style.backgroundImage = `url( ${icon})`

    return new mapbox.Marker(createDomEl)
    .setLngLat(coords)
};

module.exports = buildMarker
