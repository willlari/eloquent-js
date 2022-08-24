function reverseArray(array){
    let newArray = [];
    for (let element of array){
        newArray.push(element);
    }
    console.log(newArray);

}

function reverseArrayInPlace(array){
   for (let i = 0 ; i < array.lenght ; i++){
    array.push(array[i])
    array.pop(i);
   }
   console.log(array);
}

reverseArray([1,2,3,4,5]);
reverseArrayInPlace([1,2,3,4,5,6]);