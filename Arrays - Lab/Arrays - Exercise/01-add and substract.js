function addAndSubstract(array) {

    let sumOriginal = 0;
    let sumMod = 0;
    let arrayMod = [];

    for (index = 0; index < array.length; index++) {
        let numOfArray = array[index];
        sumOriginal += numOfArray;

        if (numOfArray % 2 === 0){
            numOfArray += index;
            sumMod += numOfArray;
            arrayMod.push(numOfArray);
        } else {
            numOfArray -= index;
            sumMod += numOfArray;
            arrayMod.push(numOfArray)
        }
    }

    console.log(arrayMod);
    console.log(sumOriginal);
    console.log(sumMod);
}

addAndSubstract([5, 15, 23, 56, 35]);
// addAndSubstract([-5, 11, 3, 0, 2]);