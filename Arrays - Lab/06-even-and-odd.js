function substraction(numArray) {

    for (i = 0; i < numArray.length; i++) {
        numArray[i] = Number(numArray[i]);
    }

    let evenNums = 0;
    let oddNums = 0;

    for (let num of numArray) {
        if (num % 2 === 0) {
            evenNums += num;
        } else {
            oddNums += num
        }
    }

    console.log(evenNums - oddNums);
}

// [1,2,3,4,5,6]	3
// [3,5,7,9]	-24
// [2,4,6,8,10]	30

// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.