const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map(journey => journey.transport)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
return this.journeys.filter(journey => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
return this.journeys.filter(journey => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const sum = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  },0);
  return sum
};

// Found this which demonstrates 2 ways of obtaining unique's from an array which both work -  https://medium.com/front-end-hacking/getting-unique-values-in-javascript-arrays-17063080f836
//
// Method 1:
  Traveller.prototype.getUniqueModesOfTransport = function () {
      return [...new Set(this.getModesOfTransport())];
    };

// Method 2:
//   Traveller.prototype.getUniqueModesOfTransport = function () {
//     const unique = (value, index, self) => {
//         return self.indexOf(value) === index;
//     }
//     return (this.getModesOfTransport().filter(unique));
//   };

module.exports = Traveller;
