//optional problem to solve

function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let counter = 0;

    password = username.split('').reverse().join('');

    let inputPass = input[index];
    index++;
    for (let i = 1; i <= 4; i++) {
        if (inputPass === password) {
            console.log(`User ${username} logged in.`)
            break;
        } else {
            counter++;
            if (counter === 4) {
                console.log(`User ${username} blocked!`)
                break;
            }
            console.log(`Incorrect password. Try again.`)
            inputPass = input[index];
            index++;
        }
    }

}


// You will be given a string representing a username. The correct password will be that username reversed. Until you receive the correct password print on the console: "Incorrect password. Try again.". When you receive the correct password print: "User {username} logged in." 
// However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program. 
// The input comes as an array of strings - the first string represents username and each subsequent string is a password.
