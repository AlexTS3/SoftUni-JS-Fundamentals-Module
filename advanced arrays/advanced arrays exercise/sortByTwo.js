function sortByTwoCriteria(arrayOfNames){

    let sortedArray = arrayOfNames.sort((a,b)=>{
        return a.length - b.length || a.localeCompare(b);
    })
    
    sortedArray.forEach(element => {
        console.log(element);
    });
}

sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])