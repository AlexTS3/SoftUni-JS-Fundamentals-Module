function sumEvenNumbers(numbers){

    let evenSum = 0

    for (let textNumber of numbers) {
        let number = Number(textNumber);

        if (number % 2 === 0) {
            evenSum += number;
        }
    }
    console.log(evenSum)
}