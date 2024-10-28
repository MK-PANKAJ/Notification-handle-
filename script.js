const colors = [
    '#ffcccb', // Light red
    '#ffeb3b', // Yellow
    '#4caf50', // Green
    '#2196f3', // Blue
    '#9c27b0', // Purple
    '#ff5722', // Deep orange
    '#00bcd4', // Cyan
    '#ffc107', // Amber
];

// Function to change the background color
function changeBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

// Change color every 2 seconds (2000 milliseconds)
setInterval(changeBackgroundColor, 2000);