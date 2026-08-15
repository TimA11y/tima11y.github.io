// Horrified: American Monsters - Application Logic

let locationsData = [];
let locationGraph = new Map();

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    setupEventListeners();
});

// Load location data from JSON file
async function loadData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        locationsData = await response.json();
        buildGraph();
        populateSelects();
    } catch (error) {
        console.error('Error loading data:', error);
        showError('Failed to load location data. Please refresh the page.');
    }
}

// Build a graph representation for pathfinding
function buildGraph() {
    locationGraph = new Map();
    locationsData.forEach(location => {
        locationGraph.set(location.location, location.connections);
    });
}

// Populate all select elements with location data
function populateSelects() {
    const locationSelect = document.getElementById('location-select');
    const fromSelect = document.getElementById('from-select');
    const toSelect = document.getElementById('to-select');
    
    // Sort locations alphabetically
    const sortedLocations = [...locationsData].sort((a, b) => 
        a.location.localeCompare(b.location)
    );
    
    sortedLocations.forEach(location => {
        const connectionCount = location.connections.length;
        const pluralSuffix = connectionCount === 1 ? '' : 's';
        const optionText = `${location.location} (${connectionCount} connection${pluralSuffix})`;
        
        // Add to location lookup select
        const option1 = document.createElement('option');
        option1.value = location.location;
        option1.textContent = optionText;
        locationSelect.appendChild(option1);
        
        // Add to From select (just location name)
        const option2 = document.createElement('option');
        option2.value = location.location;
        option2.textContent = location.location;
        fromSelect.appendChild(option2);
        
        // Add to To select (just location name)
        const option3 = document.createElement('option');
        option3.value = location.location;
        option3.textContent = location.location;
        toSelect.appendChild(option3);
    });
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('location-select').addEventListener('change', handleLocationSelect);
    document.getElementById('map-button').addEventListener('click', handleMapRoute);
    
    // Allow Enter key on selects to trigger Map button
    document.getElementById('from-select').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleMapRoute();
    });
    document.getElementById('to-select').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleMapRoute();
    });
}

// Handle location selection in Section 1
function handleLocationSelect(event) {
    const selectedLocation = event.target.value;
    const resultArea = document.getElementById('connections-result');
    
    if (!selectedLocation) {
        resultArea.classList.remove('visible');
        resultArea.innerHTML = '';
        return;
    }
    
    const locationData = locationsData.find(loc => loc.location === selectedLocation);
    
    if (!locationData) {
        showError('Location not found.', 'connections-result');
        return;
    }
    
    const connections = locationData.connections;
    const connectionCount = connections.length;
    const pluralSuffix = connectionCount === 1 ? '' : 's';
    
    let html = `<h3>${selectedLocation}</h3>`;
    html += `<p>${connectionCount} connection${pluralSuffix}:</p>`;
    html += '<ul>';
    
    // Sort connections alphabetically
    const sortedConnections = [...connections].sort((a, b) => a.localeCompare(b));
    sortedConnections.forEach(connection => {
        // Find the connection count for this location
        const connData = locationsData.find(loc => loc.location === connection);
        const connCount = connData ? connData.connections.length : 0;
        const connPlural = connCount === 1 ? '' : 's';
        html += `<li><button class="location-link" data-location="${connection}">${connection} (${connCount} connection${connPlural})</button></li>`;
    });
    
    html += '</ul>';
    
    resultArea.innerHTML = html;
    resultArea.classList.add('visible');
    
    // Add click handlers to location links
    resultArea.querySelectorAll('.location-link').forEach(button => {
        button.addEventListener('click', (e) => {
            const locationName = e.target.dataset.location;
            const locationSelect = document.getElementById('location-select');
            locationSelect.value = locationName;
            // Trigger the change event to update the display
            locationSelect.dispatchEvent(new Event('change'));
            // Focus the first button in the new list after the DOM updates
            setTimeout(() => {
                const firstButton = document.querySelector('#connections-result .location-link');
                if (firstButton) {
                    firstButton.focus();
                }
            }, 0);
        });
    });
}

// Handle Map Route button click
function handleMapRoute() {
    const fromLocation = document.getElementById('from-select').value;
    const toLocation = document.getElementById('to-select').value;
    const resultArea = document.getElementById('paths-result');
    
    // Validate selections
    if (!fromLocation || !toLocation) {
        showError('Please select both a starting location and a destination.', 'paths-result');
        return;
    }
    
    if (fromLocation === toLocation) {
        resultArea.innerHTML = '<h3>Same Location</h3><p>You are already at this location.</p>';
        resultArea.classList.add('visible');
        return;
    }
    
    // Find all paths
    const paths = findAllPaths(fromLocation, toLocation);
    
    if (paths.length === 0) {
        resultArea.innerHTML = '<h3>No Path Found</h3><p>There is no route between these locations.</p>';
        resultArea.classList.add('visible');
        return;
    }
    
    // Sort paths by length (shortest first)
    paths.sort((a, b) => a.length - b.length);
    
    // Display results
    const pluralSuffix = paths.length === 1 ? '' : 's';
    let html = `<h3>Found ${paths.length} Path${pluralSuffix}</h3>`;
    html += '<ol>';
    
    paths.forEach(path => {
        const pathString = path.join(' <span class="path-arrow">›</span> ');
        const stepCount = path.length - 1;
        const stepSuffix = stepCount === 1 ? '' : 's';
        html += `<li>${pathString} <em>(${stepCount} step${stepSuffix})</em></li>`;
    });
    
    html += '</ol>';
    
    resultArea.innerHTML = html;
    resultArea.classList.add('visible');
}

// Find all unique paths between two locations using depth-first search
function findAllPaths(start, end) {
    const allPaths = [];
    const visited = new Set();
    const currentPath = [];
    
    function dfs(location) {
        // Add current location to path and visited set
        currentPath.push(location);
        visited.add(location);
        
        // If we reached the destination, save this path
        if (location === end) {
            allPaths.push([...currentPath]);
        } else {
            // Explore all unvisited neighbors
            const connections = locationGraph.get(location) || [];
            for (const neighbor of connections) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        }
        
        // Backtrack: remove current location from path and visited set
        currentPath.pop();
        visited.delete(location);
    }
    
    dfs(start);
    return allPaths;
}

// Show error message in a result area
function showError(message, resultAreaId = null) {
    const resultArea = resultAreaId 
        ? document.getElementById(resultAreaId)
        : document.getElementById('paths-result');
    
    resultArea.innerHTML = `<p style="color: var(--accent-red);">${message}</p>`;
    resultArea.classList.add('visible');
}
