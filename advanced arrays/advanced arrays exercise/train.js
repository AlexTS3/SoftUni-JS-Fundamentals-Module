function train(array) {

    let passangersInTrain = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());
    let arrLength = array.length;

    for (let index = 0; index < arrLength; index++) {
        let currentRow = array[index].split(' ')

        if (currentRow[0] === 'Add') {
            let newWagonPassangers = Number(currentRow[1]);
            passangersInTrain.push(newWagonPassangers);
        } else {
            for (let indexWagon = 0; indexWagon < passangersInTrain.length; indexWagon++) {
                let passangersInWagon = passangersInTrain[indexWagon];
                if (passangersInWagon + Number(currentRow[0]) <= maxCapacity) {
                    passangersInTrain[indexWagon] += Number(currentRow[0]);
                    break;
                }
            }
        }
    }
    console.log(passangersInTrain.join(' '));

}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])