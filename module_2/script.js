/*
    Javascript Intro Demo
    Eric Tarrant
    Sept 21, 2026
*/

// Variables
const neverChange = 404; // Constant Number
let welcomeMessage = "Hello, who might you be?"; // Mutable greeting
var legacyVariable = "I am from the olden times"; //DO NOT USE, OLD

// Data Types
let userGreeting = "Welcome to our page";
let userScore = 100;
let isSessionActive = true;
let userProfile = { name: "Guest", score: userScore };
let colorOptions = ["Red", "Green", "Blue"];

// String Manipulation
let userName = "Guest";
let personalizedGreeting = "Hello, " + userName;
// console.log(personalizedGreeting);

// Interpolation
personalizedGreeting = `Hello, ${userName}`; // Interpolation with template literals
console.log(personalizedGreeting);

// Conditional Statements
let userAge = 66;

if (userAge < 18) {
    // var name = "Eric"; don't use this
    console.log("You are not eligible to vote");
} else if (userAge > 18 && userAge < 65) {
    console.log("You are eligible and required to vote");
} else {
    console.log("You are eligible but not required to vote")
}

// Using the ternary operator
let message =
    userAge >= 18
        ? "You're eligible to vote"
        : "You are not eligible to vote";
console.log(message);

let daysUntilBirthday = 5;
let birthdayMessage =
    daysUntilBirthday === 1
        ? "Your Birthday is tomorrow!"
        : "Your Birthday is coming up";

// Switch Case
// pseudo switch case
// switch (birthdayMessage) {
//     case: 5{
//         // do something if the value was 5
//     }
//     case; 10{
//         // do something if the value is 10
//     }
// }

// Loops

// for (let i = 0; i < colorOptions.length; i++) {
//     console.log(colorOptions[i]);
// }

colorOptions.forEach((color) => console.log(color))

// do{
//     console.log("This message appears at least once");
// } while (attempts > 0);

// Functions
function generateGreeting(fName) {
    return `Greetings, ${fName}`;
}

console.log(generateGreeting("Eric"));

// Arrow functions
const addScores = (score1, score2) => score1 + score2;

// function addScores(score1, score2) {
//     return score1 + score2;
// }

const calculateAge = (birthYear) => new Date().getFullYear() - birthYear;
console.log(calculateAge(1990));


/**
 * This function takes in a string and returns a greeting with that value.
 * @param {*} fName 
 * @returns {string}
 */
function getFullGreeting(fName) {
    return `Hello, ${fName}! Have a great day!`;
}

// Working with the Document Object Model (DOM)
// Let's ensure the DOM has been created
document.addEventListener("DOMContentLoaded", (event) => {
    const welcomeHeading = document.getElementById("welcome-heading")
    welcomeHeading.textContent = "Welcome, adventurous user!"
    welcomeHeading.className = "highlight"

    // Create a new paragraph
    const newParagraph = document.createElement("p")
    newParagraph.textContent = "This paragraph was dynamically added!"
    document.body.appendChild(newParagraph)
    newParagraph.style.color = "blue"
    newParagraph.style.fontWeight = "bold"

    const newButton = document.createElement("button")
    newButton.textContent = "Click Me!"
    newButton.addEventListener("click", (event) => {
        alert("You clicked the new button")
    })
    document.body.appendChild(newButton)

    const paragraphs = document.getElementsByTagName("p")
    for (let p of paragraphs) {
        p.classList.add("paragraph-style")
    }
})


