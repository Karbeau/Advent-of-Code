// --- Day 1: Trebuchet?! ---
// Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.

// You've been doing this long enough to know that to restore snow operations, you need to check all fifty stars by December 25th.

// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").

// As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.

// The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

// For example:

// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet
// In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

// Consider your entire calibration document. What is the sum of all of the calibration values?

//////////////// Input is in input.txt, who woulda guessed?!

// Access each line in txt file
// Make each line a string in an array
let fs = require("fs");
let text = fs.readFileSync("./input.txt").toString('utf-8');
let inputArray = text.split("\n")

// let inputArray = ["yutire8fvsv8vsfvfs",
// "7fshs9ajwhw5sff6",
// "834h1b365dnnsa0",
// "veunjs8"]

//[88, 76, 80, 88]


// Loop through array of strings, then loop through each string finding numbers

let numsArr = []
inputArray.forEach(element => {

    let currentVal = []
    for (let i = 0; i < element.length; i++) {
        let value = parseInt(element[i]);
        // get first num in string
        if (typeof value === "number" && !isNaN(value)) {
            currentVal.push(value.toString())
        }
    }
    
    // get last num in string
    // If there is only 1 num, the first num is repeated (22)
    if (currentVal.length <= 1) {
        let dupNum = currentVal[0].toString()
        currentVal.push(dupNum)
    }
    let lastElement = currentVal.pop();
    let currentNum = currentVal[0] + lastElement
    currentNum = parseInt(currentNum)
    //console.log(currentNum)

    numsArr.push(currentNum)
        
    //console.log("last element " + lastElement)
    //console.log("current val " + currentVal)
    //console.log("num Array: " + numsArr)
    return numsArr
});

// sum the array

const sum = numsArr.reduce((partialSum, a) => partialSum + a, 0);
console.log(sum); // 6