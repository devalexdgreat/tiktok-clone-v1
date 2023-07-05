let vidElement = document.querySelector('.video');
let tikPage = document.querySelector('.tiktok-app');
let btnOne = document.getElementById("btnOne");

const videos = document.querySelectorAll('video');
let videolist = Array.from(videos);
const vidDivMobs = document.querySelectorAll('.tik-body');
const vidDivPc = document.querySelectorAll('.tik-p-b');

let likeBtns  = document.querySelectorAll("#act-btn");
let likeBtnArr = Array.from(likeBtns);

let visuals = document.querySelectorAll('#display');
let visual = Array.from(visuals);

let display = 999;
this.isAdded = false;

let tiktokApp = document.querySelector('body');
let tikContent = document.querySelector('.tik-content');
let tikPcContent = document.querySelector('.tik-pc-body');

tiktokApp.addEventListener('load', function() {
	visual.forEach((vis) => {
		vis.innerHTML = display;
	})
})
// to dynamically fill like display
window.onload = function() {
	visual.forEach((vis) => {
		vis.innerHTML = display;
	})
}
// to stop playing videos, while scrolling
tikContent.addEventListener('scroll', function() {
	videolist.forEach((vid) => {
		vid.pause();
	})
})
// to pause on large screens
tikPcContent.addEventListener('scroll', function() {
	videolist.forEach((vid) => {
		vid.pause();
	})
})  
// to add like value
function increase() {
	display += 1;
}
// to subtract like value
function decrease() {
	display -= 1;
}

// checking
console.log(videolist);
console.log(likeBtnArr);
var counter = 0;

// like function main logic
likeBtnArr.forEach((btn) => {
	btn.addEventListener('click', function addLike() {

		if(counter !== 1) {
			btn.firstElementChild.classList.toggle('isliked');
			console.log(typeof btn.lastElementChild.innerHTML);
			increase();		
			btn.lastElementChild.innerHTML = display;
			counter++;
		} else {
			btn.firstElementChild.classList.toggle('isliked');
			decrease();
			btn.lastElementChild.innerHTML = display;
			counter = 0;
		}

		
	});
});

// for play and pause control
for (const video of videos) {
	video.addEventListener('click', function() {
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	})
}
// play and pause control on mobile
for (const vidDivMob of vidDivMobs) {
	vidDivMob.addEventListener('click', function() {
		if (vidDivMob.firstElementChild.paused) {
			vidDivMob.firstElementChild.play();
		} else {
			vidDivMob.firstElementChild.pause();
		}
	})
}
// to disactivate disclaimer prompt
document.querySelector('.continue').addEventListener('click', function() {
	document.querySelector('.disclaimer').style.display = "none";
})