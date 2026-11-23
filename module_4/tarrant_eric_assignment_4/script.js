
/*
    Winnipeg Cycling Routes
    Eric Tarrant
    November 23, 2026
*/

async function displayCyclingPath() {
    const container = document.getElementById("Container");

    document.getElementById("routeName").textContent = "Loading...";

    try {
        const url = "https://data.winnipeg.ca/resource/kjd9-dvf5.json?$limit=100";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const cycling = await response.json();

        console.log("API data:", cycling);

        if (!Array.isArray(cycling) || cycling.length === 0) {
            throw new Error("No cycling routes were returned.");
        }

        // Pick a random cycling route
        const randomIndex = Math.floor(Math.random() * cycling.length);
        const route = cycling[randomIndex];

        console.log("Selected route:", route);

        // Display the route information
        document.getElementById("routeName").textContent =
            route.infrastructure_name || "Unnamed Route";

        document.getElementById("routeType").textContent =
            route.infrastructure_type || "Not available";

        document.getElementById("roadLocation").textContent =
            route.road_location || "Not available";

        document.getElementById("routeLength").textContent =
            route.length || "Not available";

        document.getElementById("twoWayTravel").textContent =
            route.two_way_travel || "Not available";

    } catch (error) {
        console.error("Error:", error);
        container.querySelector(".route-card").textContent =
            "Error: " + error.message;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("routeButton")
        .addEventListener("click", displayCyclingPath);
});
