// ===== CONFIGURATION =====
// Set the target date and time (YYYY-MM-DDTHH:MM:SS format)
const targetDate = new Date("2040-02-18T07:54:59").getTime();

// ======================================================================================= COUNTDOWN FUNCTION =============================================================================
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // text that appears once countdown is over 
    // link will be a link to the main trailer of my game
    //vid will contain main gameplay and release date announcement
    if (distance <= 0) {
        document.getElementById("launch").innerHTML = "<a href='https://youtube.com/skryms_fps' target='_blank' rel='noopener noreferrer' id='YT'>Check Youtube...</a>";
       
    // stylesheet for the youtube link
    const link = document.getElementById("YT");
    link.style.color = "#ff3753";
    link.style.fontSize = "68px";
    link.style.fontWeight = "bold";
    link.style.textDecoration = "none";
    link.style.fontFamily = "Arial, sans-serif";
    link.style.border = "none";
    link.style.outline = "none";
    link.style.boxShadow = "none";
    link.style.display = "inline-block";
    link.style.width = "auto";
    link.style.textDecoration = "underline";
        return;
    }


    // ====================================================================== Time calculations =============================================================================
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    document.getElementById("launch").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// ======================================================================================= START TIMER ==============================================================================
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to avoid 1s delay
