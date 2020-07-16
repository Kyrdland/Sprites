let cv = document.getElementById('cv');
let ctx = cv.getContext('2d');

let lastTime = new Date().getTime();
let currentFPS = 0;
let frameCount = 0;
//UNIX = 19191881898 1 Enero de 1970

const loop = () => {
	window.requestAnimationFrame(loop);
	updateFPS();
	console.log(currentFPS);
}

const updateFPS = () => {
	let iniTime = new Date().getTime();

	if (iniTime - lastTime > 1000) {
		currentFPS = frameCount;
		frameCount = 0;
		lastTime = iniTime;
	}

	frameCount++;
}

loop();