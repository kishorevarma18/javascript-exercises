const repeatString = function(str, num) {
    if(num<0) return "ERROR";
    let str1='';
    for(i=0;i<num;i++){
        str1=str1+str;
    }
    return str1;
};
// Do not edit below this line
module.exports = repeatString;
