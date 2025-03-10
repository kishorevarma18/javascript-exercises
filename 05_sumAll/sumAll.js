const sumAll = function(a,b) {
    if(!Number.isInteger(a)||!Number.isInteger(b)||!(a>0) || !(b>0))
        return "ERROR";
    else {if(a>b){
        let c=b;
        b=a;
        a=c;
    }
    let sum=0;
    for(i=a;i<=b;i++){
        sum+=i;
    }
    return sum;}
};

// Do not edit below this line
module.exports = sumAll;
