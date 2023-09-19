const audioElement = document.querySelector('.audio-element');
const playButton = document.querySelector('.play-button');
const pauseButton = document.querySelector('.pause-button');
const progressBar = document.querySelector('.progress-bar');

playButton.addEventListener('click', () => {
  audioElement.play();
});

pauseButton.addEventListener('click', () => {
  audioElement.pause();
});

audioElement.addEventListener('timeupdate', () => {
  progressBar.value = audioElement.currentTime / audioElement.duration;
});
