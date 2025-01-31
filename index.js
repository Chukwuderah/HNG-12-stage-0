function updateUTCTime() {
    const timeContainer = document.getElementById('time');
    const now = new Date();
    timeContainer.textContent = now.toUTCString();
}

// Initial call
updateUTCTime();

// Update time every second
setInterval(updateUTCTime, 1000);