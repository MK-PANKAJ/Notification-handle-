document.getElementById('sendNotification').addEventListener('click', function() {
    const notificationData = { response: "This is a test notification!" };
    displayNotification(notificationData);
});

document.getElementById('clearButton').addEventListener('click', function() {
    clearNotifications();
});

// Function to display notifications
function displayNotification(data) {
    const notificationArea = document.getElementById('notificationArea');
    const notificationDiv = document.createElement('div');
    notificationDiv.className = 'notification';
    notificationDiv.textContent = data.response;

    // Add a click event to redirect to a different URL
    notificationDiv.addEventListener('click', function() {
        // Redirect to the client website or any other URL
        window.location.href = "https://mk-pankaj.github.io/Manish-/"; // Replace with the actual URL
    });

    notificationArea.appendChild(notificationDiv);
}

// Function to clear notifications
function clearNotifications() {
    const notificationArea = document.getElementById('notificationArea');
    notificationArea.innerHTML = ''; // Clear all notifications
}
