const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});
let randomNum = Math.floor(Math.random() * 100);
let asyncReadLine = function () {
    readline.question(`Guess the number (0 - 100): `, number =>
    {
        if (isNaN(number) || number < 0 || number > 100) {
            console.log("You need to enter a number from 0 to 100!");
            asyncReadLine();
        } else {
            if (number < randomNum) {
                console.log("Too Low!");
                asyncReadLine();
            }
            else if (number > randomNum) {
                console.log("Too High!");
                asyncReadLine();
            }
            else {
                console.log("You guess it!");
                return readline.close();
            }
        }
    });
}
asyncReadLine();
