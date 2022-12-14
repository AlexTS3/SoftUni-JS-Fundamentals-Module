function reverseInPlace(input) {

    for (let i = 0; i < input.length / 2; i++) {
        let tempElement = input[i];

        input[i] = input[input.length - 1 - i];
        input[input.length - 1 - i] = tempElement;

    }

    console.log(input.join(' '))
}

reverseInPlace();

// ['a', 'b', 'c', 'd', 'e']	e d c b a 
// ['abc', 'def', 'hig', 'klm', 'nop']	nop klm hig def abc
// ['33', '123', '0', 'dd']	dd 0 123 33


// Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array. Print the resulting elements on a single line, space-separated. 