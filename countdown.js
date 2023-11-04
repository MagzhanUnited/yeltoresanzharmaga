//Countdown timer javascript code
let intervalId;
function startTimer() {
    const inputDateTime = new Date(document.getElementById('dateTime').value).getTime();
    const now = new Date().getTime();

    if (isNaN(inputDateTime) || inputDateTime <= now) {
        alert('Please enter a valid future date and time.');
        return;
    }

    const totalMilliseconds = inputDateTime - now;

    let remainingMilliseconds = totalMilliseconds;
    const timerElement = document.getElementById('timer');
    timerElement.classList.add('visible');

    intervalId = setInterval(function() {
        remainingMilliseconds -= 1000;

        if (remainingMilliseconds <= 0) {
            clearInterval(intervalId);
            timerElement.innerText = 'Timer finished!';
        } else {
            timerElement.innerText = formatTime(remainingMilliseconds);
        }
    }, 1000);
}

function formatTime(milliseconds) {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
