function repeatingElements(array) {

    let uniqueNumbersArr = [];
    let arrayLength = array.length;

    for(let index = 0; index < arrayLength; index++){
        if(!uniqueNumbersArr.includes(array[index])){
            uniqueNumbersArr.push(array[index]);
        }
    }

    console.log(uniqueNumbersArr.join(' '));

}

repeatingElements([7, 8, 9, 7, 2, 3, 4, 1, 2])