// ===== CONFIGURATION =====
// Set your target date and time (YYYY-MM-DDTHH:MM:SS format)
const targetDate = new Date("2040-02-18T07:54:59").getTime();

// ===== COUNTDOWN FUNCTION =====
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // If the countdown is over
    if (distance <= 0) {
        document.getElementById("launch").innerHTML = "Check YouTube...";
        clearInterval(timerInterval);
        return;
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    document.getElementById("launch").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// ===== START TIMER =====
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to avoid 1s delay