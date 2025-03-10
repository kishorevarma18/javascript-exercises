const reverseString = function(string) {
    let reverse='';
    /*for(i=string.length;i>0;i--){
        reverse = reverse+string.at(i-1);
        string=string.substr(0,i);
    }*/
    reverse = string.split('').reverse().join('');
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
