const colors = [
    '#000000', // Pure Black
    '#1C1C1C', // Very Dark Gray
    '#2E2E2E', // Dark Gray
    '#3B3B3B', // Dark Charcoal
    '#4B4B4B', // Charcoal
    '#5B5B5B', // Dim Gray
    '#666666', // Gray
    '#7F7F7F', // Light Gray
];

// Function to change the background color
function changeBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

// Change color every 1 second (1000 milliseconds)
const intervalId = setInterval(changeBackgroundColor, 500);

// Close the tab after 2 seconds (2000 milliseconds)
setTimeout(() => {
    clearInterval(intervalId); // Stop changing colors
    window.close(); // Close the current tab
}, 1000);