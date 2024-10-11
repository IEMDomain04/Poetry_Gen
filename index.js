import { generateTextAndImage } from "./utils.js"

// Initialize default values
let name = "Default";
let favoriteActivity = "Default";
let favoritePlace = "Default";
let temperature = 0.5; // AI configuration

// Function to update activity and place
function updateYourName() {
    const nameInput = document.getElementById("name-input").value;
    name = nameInput || name; // Update only if input is provided
}

function updateFavoriteActivity() {
    const activityInput = document.getElementById("activity-input").value;
    favoriteActivity = activityInput || favoriteActivity; // Update only if input is provided
}

function updateFavoritePlace() {
    const placeInput = document.getElementById("place-input").value;
    favoritePlace = placeInput || favoritePlace; // Update only if input is provided
}

// Attach event listeners to the buttons
document.getElementById("save-button").addEventListener("click", () => {
    updateFavoriteActivity(), updateFavoritePlace(), updateYourName();
    generateTextAndImage(name, favoriteActivity, favoritePlace, temperature);
});

// Optional: Initial call with default values
generateTextAndImage(name, favoriteActivity, favoritePlace, temperature);

// Navigate to intruction Page
document.getElementById("instruction-button").addEventListener('click', function() {
    window.location.href = 'instruction_page/instruction.html';
});

