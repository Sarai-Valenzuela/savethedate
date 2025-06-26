// Set your event date here (MM/DD/YYYY HH:MM:SS)
const eventDate = new Date("11/21/2026 18:00:00").getTime(); // example: Sept 20, 2025, 6:00 PM

const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdown.innerHTML = "It's party time!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown();
