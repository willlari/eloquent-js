function min(a,b){
    let minimum = a
    if( a > b){
        minimum = b
    } 
    return minimum;
}

console.log('minimum is ' + min(12,24));