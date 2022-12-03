function echoType(value) {
    console.log(typeof value)

    if (typeof value == 'string' || typeof value == 'number') {
        console.log(value)
    } else {
        console.log('Parameter is not suitable for printing')
    }
}

echoType('Hello, JavaScript!')

// echoType(18)

// echoType(null)



// Write a JS function that takes one parameter and prints on two lines the type of the parameter and then one of the following:
// •	If the parameter type is either string or number, print its value
// •	Otherwise, print the text 'Parameter is not suitable for printing'
