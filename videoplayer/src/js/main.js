const player = document.querySelector('.player');
const video  = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');

const progressBar = player.querySelector('.player__progress');
const progressRate = player.querySelector('.progress-rate');
const slide = player.querySelectorAll('.player__slide');

const skip = player.querySelectorAll('.skip');

// functions

function toggleVideo() {
	let action = video.paused ? 'play' : 'pause';
	video[action]();
};

function changeToggleIcon() {
	let icon = video.paused ? '►' : '| |';
	toggle.innerText = icon;
};

function updateProgress() {
	let value = video.currentTime / video.duration * 100
	progressRate.style.width = `${value}%`;
};

function jumpTo(e) {
	let value = e.offsetX / this.offsetWidth * video.duration;
	video.currentTime = value;
};

function updateControls() {
	video[this.name] = this.value;
};

function skipTime(){
	video.currentTime += parseFloat(this.dataset.skip);
};
// events

toggle.addEventListener('click', toggleVideo);
video.addEventListener('click', toggleVideo);

video.addEventListener('play', changeToggleIcon);
video.addEventListener('pause', changeToggleIcon);

video.addEventListener('timeupdate', updateProgress);

progressBar.addEventListener('click', jumpTo, false);

slide.forEach( slide => slide.addEventListener('change', updateControls) );
slide.forEach( slide => slide.addEventListener('mousemove', updateControls) );
skip.forEach( skip => skip.addEventListener('mousedown', skipTime));