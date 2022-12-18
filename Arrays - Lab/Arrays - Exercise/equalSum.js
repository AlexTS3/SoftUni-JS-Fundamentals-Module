function  equalSum(array) {
    
    let atIndex = 'no'
    let arrLength = array.length
    for (let index = 0; index < arrLength; index++){
        
        let rightNumbers = 0;
        let leftNumbers = 0;

        for (let indexLeft = 0; indexLeft < index; indexLeft++){
            leftNumbers += array[indexLeft];
        }

        for(let indexRight = index+1; indexRight < arrLength; indexRight++){
            rightNumbers += array[indexRight];
        }

        if(leftNumbers === rightNumbers){
            atIndex = index;
        }
    }
    console.log(atIndex)
}

equalSum([1, 2])