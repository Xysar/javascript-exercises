const ftoc = function(degrees) {
degrees -= 32;
degrees *= (5/9);
degrees = Math.round(degrees *10) / 10;
return degrees;
};

const ctof = function(degrees) {
degrees *= (9/5);
degrees += 32;
degrees = Math.round(degrees *10) / 10;
return degrees;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
