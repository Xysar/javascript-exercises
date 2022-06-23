const sumAll = function (first, second) {
  if (typeof(first) != "number" || typeof(second) !="number") {
    return "ERROR";
  }
  if (first < 0 || second < 0) {
    return "ERROR";
  }
  if (first > second) {
    let temp = second;
    second = first;
    first = temp;
  }

  let sum = 0;
  for(;first<=second; first++){
    sum+=first;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
