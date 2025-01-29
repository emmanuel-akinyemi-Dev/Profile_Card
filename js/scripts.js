const currentTime = new Date().toISOString();
document.getElementById(
  "current-time"
).textContent = `Current UTC Time: ${currentTime}`;
