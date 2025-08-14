const API_KEY = 'qO0pMRhIptQ64GbO8bTuxzUAg96gVP4qaMW15B9L'; // Paste your key here
const API_URL = `https://developer.nps.gov/api/v1/parks?limit=20&api_key=${API_KEY}`;

export async function fetchParks() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        return data.data; // The park array is inside a 'data' property
    } catch (error) {
        console.error("Failed to fetch parks:", error);
        return []; // Return an empty array on failure
    }
}