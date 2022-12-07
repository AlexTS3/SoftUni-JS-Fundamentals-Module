function searchForNumm(arrayOfNums, actionNums) {

    let numsToTake = actionNums[0];
    let numsToDelete = actionNums[1];
    let searchedNum = actionNums[2];

    let takenNumbers = arrayOfNums.slice(0, numsToTake);
    takenNumbers.splice(0, numsToDelete);

    let counter = 0;

    for (const number of takenNumbers) {
        
        if(number === searchedNum){
            counter++;
        }    

    }
    console.log(`Number ${searchedNum} occurs ${counter} times.`);
}

searchForNumm([5, 2, 3, 4, 1, 6],

    [5, 2, 3])