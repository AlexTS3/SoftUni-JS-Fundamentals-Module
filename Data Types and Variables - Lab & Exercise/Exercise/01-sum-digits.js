function sumOfNumbers(inputNumber) {
    let sum = 0;
    let num = inputNumber.toString();


    for (let i = 0; i < num.length; i++) {
        let digit = num[i]
        sum += parseInt(digit);

    }
    console.log(sum)
}

sumOfNumbers();


//Write a function, which will be given a single number. Your task is to find the sum of its digits.