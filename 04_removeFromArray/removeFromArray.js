const removeFromArray = function(arr,...value) {
    return arr.filter(items=>!value.includes(items));
};

// Do not edit below this line
module.exports = removeFromArray;
