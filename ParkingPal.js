/*
  coordinates are in format: {lat:x, lng:y}
  To consider later
  https://developers.google.com/maps/documentation/javascript/examples/map-latlng-literal
*/

function findSpots(curLocation, radius) {
  let closeSpots = [];
  for (let i = 0; i < parkingSpots.length; i++) {
    if (checkSpot(curLocation, parkingSpots[i], radius)) {
      closeSpots.push(parkingSpots[i]);
    }
  }
  return closeSpots;
}

function checkSpot(curLocation, parkLocation, radius) {
    return coordinateDistance(curLocation, parkLocation) <= radius;
}

function coordinateDistance(coord1, coord2) {
/*
  1 deg latitude ~= 69 miles, [-90.0,90.0]
  1 deg longitude ~= 52.51 miles, [-180.0,180.0]
  These are based on NYC location of latitude 40.7131 degrees (only one necessary)
  We multiply by the unit conversion to create mile vectors from origin coordinates [0,0]
*/
  const milesPerLat = 69.00;
  const milesPerLng = 52.51;
  let x1 = coord1.lng * milesPerLng;
  let y1 = coord1.lat * milesPerLat;
  let x2 = coord2.lng * milesPerLng;
  let y2 = coord2.lat * milesPerLat;
  // Locally earth is euclidean, no need for haversine formula, just pythagoras.
  return distance(x1, y1, x2, y2);
}

function distance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

// Hardcoded locations
let parkingSpots = [];
let goldmanSachsOffice = {lat: 40.7131, lng: -74.0338, address: "200 West Street New York, NY 10282", name: "Goldman Sachs Tower" };
let empireStateBuilding = {lat: 40.748817, lng: -73.985428, address: "20 W 34th St, New York, NY 10001", name: "Empire State Building"};
parkingSpots.push(goldmanSachsOffice);
parkingSpots.push(empireStateBuilding);

// testLocation (Macy's) is within 1 mile from empireStateBuilding
let testLocation = {lat: 40.750797, lng: -73.989578, address: "151 W 34th St, New York, NY 10001", name: "Macy's"};

console.log(findSpots(testLocation, 1));
