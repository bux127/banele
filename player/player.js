let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
const play = document.querySelector(".play");

//set progress period == song played time
song.onloadedemetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

//change pause and play option
play.addEventListener("click", () => {
  if (play.classList.contains("fa-pause")) {
    song.pause();
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
  } else {
    song.play();
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
  }
});

//update song slider
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

//drag pointer where u want on slider or to foward with mouse
progress.onchange = () => {
  song.play();
  song.currentTime = progress.value;
};
