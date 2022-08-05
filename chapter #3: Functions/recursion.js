function isEven(number){

    number = (number*number)/number; // negatives into positives

    while (number >= 1){
        number -= 2;
    }
    
    if (number < 0 ){
        return false
    } else {
        return true
    }

}

console.log( isEven(-22));



