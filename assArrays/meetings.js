function scheduleMeetings(input) {
    const meetings = {};

    for (const entry of input) {
        let [day, name] = entry.split(' ');

        if (meetings[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;

            console.log(`Scheduled for ${day}`);
        }
    }

    // for(let day in meetings){
    //     console.log(`${day} -> ${meetings[day]}`);
    // } 
    for (const [day, name] of Object.entries(meetings)) {
        console.log(`${day} -> ${name}`);
    }
}

scheduleMeetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])