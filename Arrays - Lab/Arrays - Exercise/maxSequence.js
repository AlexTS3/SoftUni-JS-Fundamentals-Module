function maxSequence(arrayOfNumbers) {
    
    let count = 1;
    let maxCount = 1;
    let currentEquals = arrayOfNumbers[0];
    let result = '';

    for(let i = 0; i < arrayOfNumbers.length; i++){

        if (arrayOfNumbers[i] === arrayOfNumbers[i + 1]) {
            count++;
        } else {
            count = 1;
        }

        if(count > maxCount){
            currentEquals = arrayOfNumbers[i];
            maxCount = count;
        }
    }

    for(let index = 0; index < maxCount; index++){
        result += currentEquals + ' ';
    }

    console.log(result);
}

maxSequence([1, 1, 1, 2, 3, 1, 3, 3])