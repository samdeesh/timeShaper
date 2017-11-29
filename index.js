'use strict'
/**
 * 
 * Example usage is as :
 * Difference between dates(Now and then) in seconds {{now|duration:then}}
 * Format seconds to HH:MM:SS {{123|toHMS}}
 * Difference between dates(Now and then) in HH:MM:SS: {{now|duration:then|toHMS}}
 * Get latest/max date from unsorted array {{dateArray}}: {{dateArray|latest|date:"dd,MM,yyyy HH:mm:ss"}}
 * Get oldest/min date from unsorted array {{dateArray}}: {{dateArray|oldest|date:"dd,MM,yyyy HH:mm:ss"}}
 * 
 */

angular
  .module("timeShaper", [])
  .filter("duration", function () {
    return function (startTime, endTime) {
      if (!startTime || !endTime) {
        return 0;
      }
      if (typeof startTime == "string") {
        startTime = new Date(startTime);
      }
      if (typeof endTime == "string") {
        endTime = new Date(endTime);
      }
      return (endTime - startTime) / 1000;
    };
  })
  .filter("latest", function () {
    return function (dateArray) {
      if (!dateArray.length) {
        return "";
      }
      var max = "";
      dateArray.forEach(function (date) {
        if (date) {
          var d = new Date(date);
          if (max && d.valueOf() > max.valueOf()) {
            max = d;
          } else if (!max) {
            max = d;
          }
        }
      });
      return max;
    };
  }).filter("oldest", function () {
    return function (dateArray) {
      if (!dateArray.length) {
        return "";
      }
      var min = "";
      dateArray.forEach(function (date) {
        if (date) {
          var d = new Date(date);
          if (min && d.valueOf() < min.valueOf()) {
            min = d;
          } else if (!min) {
            min = d;
          }
        }
      });
      return min;
    };
  })
  .filter("toHMS", function () {
    return function (secs) {
      if (!secs || isNaN(secs)) {
        secs = 0;
      }

      function z(n) {
        return (n < 10 ? "0" : "") + n;
      }
      secs = Math.abs(Math.round(secs));

      var sign = secs < 0 ? "-" : "";

      return (
        sign +
        z((secs / 3600) | 0) +
        ":" +
        z((secs % 3600 / 60) | 0) +
        ":" +
        z(secs % 60)
      );
    };
  });