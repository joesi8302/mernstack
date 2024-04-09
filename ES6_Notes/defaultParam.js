// Default Parameters are used ot pass and assign in a function where we may or may not be able to pass the values

function Sum(a,b){
    return a + b;
}

console.log(Sum(10,9)); // 19
console.log(Sum(9)); // NaN
console.log(Sum()); // NaN 


function Sum1(a = 0,b = 0){ // can initialize to zero so we do not get such errors
    return a + b;
}