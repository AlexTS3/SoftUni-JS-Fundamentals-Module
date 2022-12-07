function substraction(numArray){

    for(i = 0; i < numArray.length; i++){
        numArray[i] = Number(numArray[i]);
    }

    let evenNums = 0;
    let oddNums = 0;

    for (let num of numArray){
        if (num % 2 === 0) {
            evenNums += num;
        } else {
            oddNums += num
        }
    }

    console.log(evenNums - oddNums);
}

substraction([3,5,7,9])