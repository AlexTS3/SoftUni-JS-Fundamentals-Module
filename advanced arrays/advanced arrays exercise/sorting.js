function sorting(array) {

    let sortedArray = array.sort((a, b) => a - b);
    let resArray = [];
    let copyArray = sortedArray.slice(0);

    for (let index = 0; index < sortedArray.length; index++) {
        let lastElement = sortedArray.pop();
        let firstElement = sortedArray.shift();
        resArray.push(lastElement);
        resArray.push(firstElement);
    }
    resArray.push(sortedArray.pop());
    resArray.push(sortedArray.shift());

    console.log(resArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])