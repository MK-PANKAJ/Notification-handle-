const clientWebsiteURL = "https://mk-pankaj.github.io/Manish-/"; // Change this to the actual URL of your client website
let isNotificationReceived = false;

function receiveNotification(data) {
    if (data && data.response) {
        const notificationsDiv = document.getElementById('notifications');
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerText = `Notification received: ${data.response}`;
        notificationsDiv.appendChild(notification);

        isNotificationReceived = true;
        window.location.href = clientWebsiteURL;
    }
}

window.addEventListener('message', function(event) {
    if (event.origin === "https://mk-pankaj.github.io/Manish-/") { // Change this to the actual URL of your given website
        receiveNotification(event.data);
    }
});

if (document.referrer === "") {
    isNotificationReceived = false;
}

document.getElementById('clearButton').addEventListener('click', function() {
    const notificationsDiv = document.getElementById('notifications');
    notificationsDiv.innerHTML = ''; // Clear all notifications
});
