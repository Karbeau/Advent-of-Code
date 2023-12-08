// Access each line in txt file
// Make each line a string in an array
let fs = require("fs");
let text = fs.readFileSync("./input.txt").toString('utf-8');
let inputArray = text.split("\n")

// const inputArray = [
//     "7gksfives",
//     "41nine",
//     "rflzninemfs1",
//     "foureight6",
//     "hhnineight",
// ];

// --- Part Two ---
// Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

// Equipped with this new information, you now need to find the real first and last digit on each line. For example:

// two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen
// In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

// What is the sum of all of the calibration values?

const numberWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const reverseNumberWords = ["eno", "owt", "eerht", "ruof", "evif", "xis", "neves", "thgie", "enin"];

function findFirstAndLastNumbers(arr) {
    const result = [];

    for (const str of arr) {
        let firstNumber = null;
        for (let i = 0; i < str.length; i++) {
            if (!isNaN(str[i])) {
                // If the character is a digit
                firstNumber = str[i];
                break;
            } else {
                // Check for number words
                let digitstr = str[i];
                let j = i + 1;
                let found = false;
                while (isNaN(str[j]) && j < str.length) {
                    digitstr += str[j];
                    j++;
                    if (numberWords.includes(digitstr)) {
                        firstNumber = digitstr;
                        found = true;
                        break;
                    }
                }
                if (found) {
                    break;
                }
            }
        }

        let lastNumber = null;
        for (let i = str.length-1; i >= 0; i--) {
            if (!isNaN(str[i])) {
                // If the character is a digit
                lastNumber = str[i];
                break;
            } else {
                // Check for number words
                let digitstr = str[i];
                let j = i - 1;
                let found = false;
                while (isNaN(str[j]) && j >= 0) {
                    digitstr += str[j];
                    j--;
                    if (reverseNumberWords.includes(digitstr)) {
                        lastNumber = digitstr.split("").reverse().join("");
                        found = true;
                        break;
                    }
                }
                if (found) {
                    break;
                }
            }
        }

        result.push({
            input: str,
            firstNumber: firstNumber,
            lastNumber: lastNumber,
        });
    }

    return result;
}

const resultArray = findFirstAndLastNumbers(inputArray);

let sum = 0;
for (const result of resultArray) {
    console.log(result);
    if (isNaN(result.firstNumber)) {
        for (i = 0; i < numberWords.length; i++) {
            if (result.firstNumber === numberWords[i]) {
                result.firstNumber = (i+1).toString();
                break;
            }
        }
    }
    if (isNaN(result.lastNumber)) {
        for (i = 0; i < numberWords.length; i++) {
            if (result.lastNumber === numberWords[i]) {
                result.lastNumber = (i+1).toString();
                break;
            }
        }
    }
    console.log(result.input + " = " + (result.firstNumber + result.lastNumber));
    sum += parseInt(result.firstNumber + result.lastNumber);
}
console.log(sum)
