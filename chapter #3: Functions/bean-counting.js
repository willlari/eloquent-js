function countBs(string, char){
    let x = 0;

    for (let i=0; i< string.length; i++){
        if (string[i] === char){
            x++;
        }
    }
    return x;
}

console.log(countBs('BonBour!', 'r'));