let counting = false;
let intervalID;
let targetRange;
let position = 0;

function startStopTimedHit() {
    counting = !counting;
    const button = document.getElementById('start-stop-btn');
    const resultDiv = document.getElementById('result');

    if (counting) {
        button.textContent = 'Stop';
        resultDiv.textContent = '';
        const intervalInput = document.getElementById('hit-interval').value;
        const range = intervalInput.split('-');
        targetRange = [parseInt(range[0], 10), parseInt(range[1], 10)];
        intervalID = setInterval(moveMarker, 10);
    } else {
        button.textContent = 'Start';
        clearInterval(intervalID);
        checkHit();
    }
}

function moveMarker() {
    const marker = document.getElementById('marker');
    const hitBar = document.getElementById('hit-bar');
    const barWidth = hitBar.offsetWidth;
    position = (position + 1) % barWidth;
    marker.style.left = position + 'px';
}

function checkHit() {
    const resultDiv = document.getElementById('result');
    if (position >= targetRange[0] && position <= targetRange[1]) {
        resultDiv.textContent = 'Hit!';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'Missed!';
        resultDiv.style.color = 'red';
    }
}
