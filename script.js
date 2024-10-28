document.getElementById('openClient').addEventListener('click', function() {
    window.open('https://mk-pankaj.github.io/Notification-handle-/client.htmlhttps://mk-pankaj.github.io/Notification-handle-/client.html', '_blank'); // Open the client website in a new tab
});

// Listen for messages from the client website
window.addEventListener('message', function(event) {
    // Check the origin of the message for security
    if (event.origin === "https://mk-pankaj.github.io/Manish-/") { // Replace with the actual client website URL
        displayNotification(event.data);
    } else {
        console.warn("Received message from untrusted origin:", event.origin);
    }
});

// Function to display notifications
function displayNotification(data) {
    if (data && data.response) {
        const notificationArea = document.getElementById('notificationArea');
        const notificationDiv = document.createElement('div');
        notificationDiv.className = 'notification';
        notificationDiv.textContent = data.response;
        notificationArea.appendChild(notificationDiv);
    } else {
        console.error("Invalid notification data:", data);
    }
}
