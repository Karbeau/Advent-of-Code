// Access each line in txt file
// Make each line a string in an array
let fs = require("fs");
let text = fs.readFileSync("./day4/input.txt").toString('utf-8');
let inputArray = text.split("\n")

let cardsArray = [];

for (line of inputArray) {
    const lineSplit = line.split(":");
    const cardString = lineSplit[0];
    const values = lineSplit[1];

    const card = parseInt(cardString.split("Card ")[1]);

    const valuesSplit = values.split(" | ");
    const myNums = valuesSplit[1];
    const winningNums = valuesSplit[0];

    let myNumsArray = myNums.split(" ");
    myNumsArray = myNumsArray.map(function(element) { return parseInt(element.trim()) });
    myNumsArray = myNumsArray.filter(element => element);

    let winningNumsArray = winningNums.split(" ");
    winningNumsArray = winningNumsArray.map(function(element) { return parseInt(element.trim()) });
    winningNumsArray = winningNumsArray.filter(element => element);

    cardsArray.push({
        card: card,
        myNums: myNumsArray,
        winningNums: winningNumsArray,
        instances: 1,
        matches: 0,
        score: 0
    });
}

let i = 1;
while (i <= cardsArray.length) {

    let card = cardsArray[i-1];
    for (winningNum of card.winningNums) {
        for (myNum of card.myNums) {
            if (winningNum === myNum) {
                card.matches++;
            }
        }
    }

    for(let j = 0; j < card.matches; j++) {
        cardsArray[i + j].instances += card.instances;
    }

    i++;
}

//console.log(cardsArray);

let sum = 0;
for (card of cardsArray) {
    sum += card.instances;
}
console.log(sum);