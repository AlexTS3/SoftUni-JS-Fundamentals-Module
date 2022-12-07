function swapInArray(arrayToChange, rotations){

    for (let index = 0; index < rotations; index++){
        let numToChange = arrayToChange.shift();
        arrayToChange.push(numToChange);
    }
    console.log(arrayToChange.join(' '))
}

swapInArray([51, 47, 32, 61, 21], 2)