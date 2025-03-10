const convertToCelsius = function(F) {
  let C=((F-32)*5)/9;
  C=round(C);
  return C;
};

const round =function(value){
  value= Math.round(value*10)/10;
  return value;
}

const convertToFahrenheit = function(C) {
  let F=((C*9)/5)+32;
  F=round(F);
  return F;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
