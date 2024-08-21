let timer;
let isRunning = false;
let elapsedTime = 0;
let startTime = 0;

function startStop() {
    const startStopButton = document.getElementById('startStop');
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 100);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('startStop').textContent = 'Start';
    document.getElementById('laps').innerHTML = '';
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);

    document.getElementById('display').textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function recordLap() {
    if (isRunning) {
        const lapTime = document.getElementById('display').textContent;
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        document.getElementById('laps').appendChild(lapItem);
    }
}
