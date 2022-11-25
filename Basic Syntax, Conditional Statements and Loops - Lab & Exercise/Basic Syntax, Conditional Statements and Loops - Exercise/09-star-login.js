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