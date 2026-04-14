// ===== CONFIGURATION =====
// Set your target date and time (YYYY-MM-DDTHH:MM:SS format)
const targetDate = new Date("2010-02-18T07:54:59").getTime();

// ===== COUNTDOWN FUNCTION =====
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // text that appears once countdown is over 
    // under the 'const' is all the style for the youtube link
    if (distance <= 0) {
        document.getElementById("launch").innerHTML = "<a href='https://youtube.com/skryms_fps' target='_blank' rel='noopener noreferrer' id='YT'>Check Youtube...</a>";
        
    const link = document.getElementById("YT");
    link.style.color = "#ff0000";
    link.style.fontSize = "50px";
    link.style.fontWeight = "bold";
    link.style.textDecoration = "none";
    link.style.fontFamily = "Arial, sans-serif";
    link.style.border = "none";
    link.style.outline = "none";
    link.style.boxShadow = "none";
    link.style.display = "inline-block";
    link.style.width = "auto";
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
