var config = require("config")
var console = require("console")
var http = require("http")
var dates = require("dates")
var utils = require('Utils.js')


module.exports.function = function FindEarthquakes(dateTimeExpression, searchRegion, minMagnitude, maxMagnitude, approxMagnitude, eventType) {

  var url = "https://earthquake.usgs.gov/fdsnws/event/1/query"

  var args = {
    format: "geojson",
    limit: 2000,
    orderby: "magnitude"
  };

  // Extract info from DateTimeExpression and add to args
  if (dateTimeExpression) {
     utils.extractStartAndEnd(dateTimeExpression, args)
  }

  // Compute and add searchRegion args
  if (searchRegion) {
    utils.searchRegionSetup(searchRegion, args)
  }

  if (minMagnitude) {
    args.minmagnitude = minMagnitude
  }
  if (maxMagnitude) {
    args.maxmagnitude = maxMagnitude
  }
  if (approxMagnitude) {
    args.minmagnitude = approxMagnitude - 0.25
    args.maxmagnitude = approxMagnitude + 0.25
  }

  var ret = []
  try {
    // Looping logic to generate separate API calls for each of the eventType inputs specified by the user.
    // ********************************************************************************
    if (eventType.length != 0) {
      for (var j = 0; j < eventType.length; j++) {
        args.eventtype = eventType[j];
        // Find earthquakes
        utils.findQuake(url, args, ret)
      }
    }
    // ********************************************************************************
    else {
      // Find earthquakes
      utils.findQuake(url, args, ret)
    }
  } catch (err) {
    console.log("ERR: " + JSON.stringify(err));
  }
  return ret
}

