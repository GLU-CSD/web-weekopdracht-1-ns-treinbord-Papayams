// Clock Elements
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let tijdafteller = document.getElementById('tijdafteller');

// Function to display current time
function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Calculate rotations for each hand
    let hRotation = 30 * (hh % 12) + mm / 2 + ss / 120;  // Hour hand
    let mRotation = 6 * mm + ss / 10;                    // Minute hand
    let sRotation = 6 * ss;                              // Second hand

    // Apply the rotations to each hand
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}

// Update clock every second
setInterval(displayTime, 1000);

// Logic for switching between relative and absolute time
let isRelativeTime = true; // Start with relative time

function updateTijdafteller() {
    const now = new Date();
    if (isRelativeTime) {
        // Show relative time (remaining time left)
        const targetTime = new Date();
        targetTime.setHours(10, 45, 0, 0); // Set target time to 10:36
        const remainingTime = targetTime - now;
        const remainingMinutes = Math.floor(remainingTime / 60000);
        tijdafteller.innerHTML = `${remainingMinutes}<div class="textoffset_afteller">over minuten</div>`;
    } else {
        // Show absolute time (current time)
        let hh = now.getHours().toString().padStart(2, '0');
        let mm = now.getMinutes().toString().padStart(2, '0');
        tijdafteller.innerHTML = `${hh}:${mm}<div class="textoffset_afteller">uur</div>`;
    }
}

// Function to toggle between relative and absolute time
function toggleTimeDisplay() {
    isRelativeTime = !isRelativeTime;
    updateTijdafteller();
}

// Update every minute and toggle time display
setInterval(() => {
    updateTijdafteller();
    toggleTimeDisplay();
}, 10000);

// Initial display
updateTijdafteller();