/*
  Eric Tarrant
  November 11th, 2026  

    
*/

//  Simulate an async operation using a timeout
function simulateAsyncOperation() {
    //  A Promise represents an operation that hasn't completed yet
    //  but is expected to in the future
    return new Promise((resolve) => {
        setTimeout(() => {
            //  'resolve' is used to signal the successful completion
            //  of the promise
            resolve("Data fetched after waiting");
        }, 2000)
    })
}

async function demonstrateAsyncCall() {
    console.log("Starting async operation....");
    const result = await simulateAsyncOperation();
    console.log(result);
}

demonstrateAsyncCall();



const myPromise = new Promise((resolve, reject) => {
    //  Here we simulate a condition to demo both resolve an reject scenarios
    const condition = true;
    if (condition) {
        resolve("Promise was resolved successfully");
    } else {
        reject("Promise was rejected");
    }
})

myPromise
    .then((result) => console.log(result))
    .catch((error) => console.error(error));


async function fetchCatBreeds() {
    try {
        const count = document.getElementById("factCount").value;
        const response = await fetch(`https://catfact.ninja/breeds?limit=${count}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data } = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching cat breeds:", error.message);
    }
}

async function displayCatFacts() {
    try {
        const count = document.getElementById("factCount").value;
        const response = await fetch(`https://catfact.ninja/facts?limit=${count}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data } = await response.json();
        const container = document.getElementById("factsContainer");
        container.innerHTML = "";

        data.forEach(({ fact }) => {
            const p = document.createElement("p");
            p.textContent = fact;
            container.appendChild(p);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}



// things that did not work


// const catFactList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


// async function fetchCatBreeds() {
//     try {
//         const count = document.getElementById("factCount").value;
//         const responseBreeds = await fetch(`https://catfact.ninja/breeds?limit=${count}`);

//         //Check if the response is okay
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);

//         }

//         // json method parses the response body as JSON
//         return responseBreeds.json();
//     } catch (error) {
//         console.error("Error fetching cat fact:", error.message);
//     }

// }
// fetchCatBreeds();


// async function displayCatFacts() {
//     try {
//         const count = document.getElementById("factCount").value;
//         const responseFacts = await fetch(`https://catfact.ninja/facts?limit=${count}`);
//         const { data } = await response.json();
//         const container = document.getElementById("factsContainer");
//         container.innerHTML = "";

//         data.forEach(({ fact }) => {
//             const p = document.createElement("p");
//             p.textContent = fact;
//             container.appendChild(p);

//             console.log(fact);
//         });
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// displayCatFacts();


