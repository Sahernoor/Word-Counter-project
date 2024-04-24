#! /usr/bin/env node
// Importing inquirer and chalk Packages
import inquirer from "inquirer";
import chaalk from "chalk";
// Display a colourful Welcome message
console.log(chaalk.bold.cyanBright("\n \t\t Code With Saher - Word Counter"));
console.log("=".repeat(60));
// prompt the user to enter a Sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
// Trimming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chaalk.bold("- Sentence words:"));
console.log(words);
console.log(chaalk.bold(`\n - Word Count: ${chaalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
