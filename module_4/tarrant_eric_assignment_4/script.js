/*
    Winnipeg Cycling Routes
    Eric Tarrant
    November 23, 2026
*/

async function searchRoutes() {
    const search = document.getElementById("searchInput").value.trim();
    const message = document.getElementById("message");
    const tbody = document.getElementById("resultsBody");
    const template = document.getElementById("rowTemplate");

    tbody.replaceChildren();

    if (search === "") {
        message.textContent = "Enter a route name to search.";
        return;
    }

    message.textContent = "Loading...";

    try {
        const safeSearch = search.replace(/'/g, "''");
        const where = `lower(infrastructure_name) LIKE lower('%${safeSearch}%')`;
        const url = "https://data.winnipeg.ca/resource/kjd9-dvf5.json" +
            `?$where=${encodeURIComponent(where)}&$order=infrastructure_name&$limit=100`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const routes = await response.json();

        if (routes.length === 0) {
            message.textContent = `No routes found matching "${search}".`;
            return;
        }

        for (const route of routes) {
            const row = template.content.cloneNode(true);
            for (const cell of row.querySelectorAll("td")) {
                cell.textContent = route[cell.dataset.field] || "";
            }
            tbody.appendChild(row);
        }

        message.textContent = `${routes.length} routes found.`;
    } catch (error) {
        console.error("Error fetching routes:", error);
        message.textContent = "Unable to load routes. Please try again.";
    }
}

document.getElementById("searchButton").addEventListener("click", searchRoutes);
