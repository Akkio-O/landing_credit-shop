export default function setTimer() {
  const timer = document.getElementById("countdown");
  let hours = 0;
  let minutes = 30;
  let seconds = 0;

  const updateTimer = () => {
    const displayHours = hours < 10 ? `0${hours}` : hours;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

    timer.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
  };
  updateTimer();

  const interval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0 && hours === 0) {
        clearInterval(interval);
        timer.innerHTML = "00:30:00";
        return;
      } else if (minutes === 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }

    updateTimer();
  }, 1000);
}
