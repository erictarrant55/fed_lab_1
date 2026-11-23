
async function displayCyclingPath() {
    const container = document.getElementById("Container");

    container.textContent = "Loading cycling paths...";

    try {
        const response = await fetch(
            "https://data.winnipeg.ca/resource/kjd9-dvf5.json?$limit=20"
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const cycling = await response.json();

        if (!Array.isArray(cycling) || cycling.length === 0) {
            throw new Error("No cycling data was returned.");
        }

        const list = document.createElement("ul");

        cycling.forEach((path) => {
            const item = document.createElement("li");

            item.textContent = JSON.stringify(path);

            list.appendChild(item);
        });

        container.replaceChildren(list);

    } catch (error) {
        console.error("Error fetching cycling data:", error);

        container.textContent =
            "Unable to load cycling paths. Please try again.";
    }
}

displayCyclingPath();
