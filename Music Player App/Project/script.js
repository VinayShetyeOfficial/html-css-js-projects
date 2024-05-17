let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let intervalId;

song.onloadedmetadata = function () {
    progress.max = song.duration;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
        intervalId = setInterval(() => {
            progress.value = song.currentTime;
        }, 100);
    }
}

progress.oninput = function () {
    clearInterval(intervalId);
    song.currentTime = progress.value;
}

progress.onchange = function () {
    if (ctrlIcon.classList.contains("fa-pause")) {
        intervalId = setInterval(() => {
            progress.value = song.currentTime;
        }, 100);
    }
}
