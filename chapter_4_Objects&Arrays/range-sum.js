function range(start, end, step){
    let array = [];
    let i = start;

    if ( start < end ){
        if (step === undefined){
            step = 1;
        }
        //arrays of increasing numbers
        while ( i <= end){
            array.push(i);
            i = i + step;
        }
    } else {
        if (step === undefined){
            step = -1;
        }
        //arrays of decreasing numbers
        while ( i >= end){
            array.push(i);
            i = i + step;
        }
    }

    console.log('sum '+ sum(array));
    return array;
  
}

function sum (array){
    let sum =0;
    for ( let x of array){
        sum += x;
    }
    return sum;
}

console.log(range(10, 4 ));