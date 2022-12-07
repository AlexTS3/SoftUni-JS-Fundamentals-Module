function topNum(array){
    let resArray = [];

    for (let i = 0; i < array.length; i++){
        let isBigger = true;
        let currentNum = array[i];

        for (let j = i + 1; j < array.length; j++){
            if (currentNum <= array[j]){
                isBigger = false;
            }
        }
        if(isBigger){
            resArray.push(array[i]);
        }
    }
    console.log(resArray.join(' '));
}