const colors = [
    '#000000', // Light red
    '#1C1C1C', // Yellow
    '#2E2E2E', // Green
    '#3B3B3B', // Blue
    '#4B4B4B', // Purple
    '#5B5B5B', // Deep orange
    '#666666', // Cyan
    '#7F7F7F', // Amber
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