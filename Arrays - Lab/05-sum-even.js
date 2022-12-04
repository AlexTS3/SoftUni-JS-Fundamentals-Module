function sumEvenNumbers(numbers) {

    let evenSum = 0

    for (let textNumber of numbers) {
        let number = Number(textNumber);

        if (number % 2 === 0) {
            evenSum += number;
        }
    }
    console.log(evenSum)
}

sumEvenNumbers();

// ['1','2','3','4','5','6']	12
// ['3','5','7','9']	0
// ['2','4','6','8','10']	30


// Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.