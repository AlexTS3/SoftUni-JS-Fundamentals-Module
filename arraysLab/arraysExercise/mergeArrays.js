function mergeArrays(firstArray, secondArray) {

    let resArray = [];
    let arrayLength = firstArray.length;

    for (let index = 0; index < arrayLength; index++){

        if (index % 2 === 0){
            resArray.push(Number(firstArray[index]) + Number(secondArray[index]));
        } else {
            resArray.push(firstArray[index] + secondArray[index]);
        }
    }
    console.log(resArray.join(' - '))
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])
