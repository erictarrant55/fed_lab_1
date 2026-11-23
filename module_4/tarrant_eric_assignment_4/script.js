let commonName = 'Ash';
const apiUrl = 'https://data.winnipeg.ca/api/v3/views/kjd9-dvf5/query.json +
    `$where=common_name LIKE '%${commonName}%'` +
    '&$order=diameter_at_breast_height DESC' +
    '&$limit=100';
const encodedURL = encodeURI(apiUrl);

async function displayMap() {
    const container = document.getElementById("Container");
    container.textContent = "Loading...";

    try {
        const response = await fetch("https://data.winnipeg.ca/api/v3/views/kjd9-dvf5/query.json");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const cycling = await response.json();
        if (cycling.status !== "success" || typeof cycling.message !== "string") {
            throw new Error("The API returned an invalid cycling map image.");
        }

        const image = document.createElement("img");
        image.src = cycling.message;
        image.alt = "A random cycling";
        image.addEventListener("error", () => {
            container.textContent = "Could not load the cycling map image. Please try again.";
        });
        container.replaceChildren(image);
    } catch (error) {
        console.error("Error fetching cycling map image:", error);
        container.textContent = "Unable to load a cycling image. Please try again.";
    }
}
