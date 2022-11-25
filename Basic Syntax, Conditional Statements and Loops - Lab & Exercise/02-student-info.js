function info(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}

info('John', 15, 5.54678)
// output: Name: John, Age: 15, Grade: 5.55

// input: 'Steve', 16, 2.1426	output: Name: Steve, Age: 16, Grade: 2.14
// input: 'Marry', 12, 6.00 	output: Name: Marry, Age: 12, Grade: 6.00


// You will be given 3 parameters – student name (string), age (number), and average grade (number). Your task is to print all the info about the student in the following format:
// `Name: {student name}, Age: {student age}, Grade: {student grade}`
//  Note: The grade should be formatted to the second decimal point.
