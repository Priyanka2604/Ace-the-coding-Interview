/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    let lowerBound = 1
    let upperBound = 10**7

    let result = -1;
    const calcTime = function(d, s) {
      let travelTime = 0;
      for (let i = 0; i < d.length - 1; i++) {
        travelTime += Math.ceil(d[i]/s)
      }
      travelTime += d[d.length - 1]/s;
      return travelTime
    }
    
    while (lowerBound <= upperBound) {
      const m = Math.floor((lowerBound+upperBound)/2)
      const time = calcTime(dist, m)
      if (time > hour) lowerBound = m + 1
      else {
        result = m;
        upperBound = m - 1
      }
    }
    return result;
};