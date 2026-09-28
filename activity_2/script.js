/*
    Activity 2
    Eric Tarrant
    Sept 28, 2026
*/




const celestialName = "Mars";
let celestialType = "Planet";
var discoveryYear = "4000 years ago";
console.log(celestialName, celestialType, discoveryYear);

/*
I could not figure out to use a function like "celestialName" with in the button.
Instead I found that using the facts within the html actually worked for myself.
*/


/*
Showing mars facts and photo after the "Reveal Space Fact" is pressed.
*/
const button = document.getElementById("reveal-fact");
const text = document.getElementById("fact-text");

button.addEventListener("click", () => {
    // Shows the info when clicked, when clicked again it is hidden
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
});
console.log(button.addEventListener)



//Jsdoc only did this below
/** Description placeholder */
function populateHeader() {


    const celestialElement = document.querySelector('.celestial-name') || document.querySelector('#celestial-name');

    if (celestialElement) {
        celestialElement.textContent = "MARS!";
    }
}
window.addEventListener('DOMContentLoaded', populateHeader);
console.log(populateHeader)

