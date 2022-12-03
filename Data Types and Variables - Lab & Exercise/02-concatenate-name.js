function concatNames(first, second, delimiter) {
    let firstResult = first + delimiter + second;

    console.log(firstResult)
}

concatNames('John',
    'Smith',
    '->'
)

concatNames('Jan',
    'White',
    '<->'
)

concatNames('Linda',
    'Terry',
    '=>'
)



// Write a function, which receives two names as string parameters and a delimiter. Print the names joined by the delimiter.