
/*
    Winnipeg Cycling Routes
    Eric Tarrant
    November 23, 2026
*/

async function displayCyclingPath() {
    const container = document.getElementById("Container");

    container.textContent = "Loading a random cycling route...";

    try {
        const response = await fetch(
            "https://data.winnipeg.ca/resource/kjd9-dvf5.json?$where=road_location IS NOT NULL&$order=infrastructure_name ASC&$limit=100"
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const cycling = await response.json();

        if (cycling.length === 0) {
            container.textContent = "No cycling routes found.";
            return;
        }

        const randomIndex = Math.floor(Math.random() * cycling.length);
        const route = cycling[randomIndex];

        container.textContent = "";

        const card = document.createElement("article");
        card.className = "route-card";

        card.innerHTML = `
            <h2>${route.infrastructure_name || "Unnamed Route"}</h2>
            <p><strong>Infrastructure Type:</strong> ${route.infrastructure_type || "Not available"}</p>
            <p><strong>Road Location:</strong> ${route.road_location || "Not available"}</p>
            <p><strong>Length:</strong> ${route.length || "Not available"}</p>
            <p><strong>Two-Way Travel:</strong> ${route.two_way_travel || "Not available"}</p>
        `;

        container.appendChild(card);

    } catch (error) {
        container.textContent = "Unable to load a cycling route. Please try again.";
        console.error("Error fetching cycling data:", error);
    }
}

// Run when the button is clicked
document.getElementById("routeButton").addEventListener("click", displayCyclingPath);