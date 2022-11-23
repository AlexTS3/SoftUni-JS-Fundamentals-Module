function foreignLanguages(country) {
    if (country === 'USA') {
        console.log('English');
    } else if (country === 'England') {
        console.log('English');
    } else if (country === 'Spain') {
        console.log('Spanish'); 
    } else if (country === 'Argentina') {
        console.log('Spanish');
    } else if (country === 'Mexico') {
        console.log('Spanish')
    } else {
        console.log('unknown')
    }
}
foreignLanguages('USA')

//output: English

// Write a program, which prints the language, that a given country speaks. You can receive only the following combinations: 
// •	English is spoken in England and USA;
// •	Spanish is spoken in Spain, Argentina, and Mexico;
// •	For the others, we should print "unknown";
