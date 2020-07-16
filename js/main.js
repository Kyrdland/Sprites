let cv = document.getElementById('cv');
let ctx = cv.getContext('2d');

let kirby = new Image();

kirby.src = 'img/standby.png';
kirby.addEventListener('load', pre);

let numCol = 16;
let numRow = 2;
let widthKirby;
let heightKirby;
let frameKirbyX = 0;
let frameKirbyY = 0;


const loop = () => {
	update();
	draw();
	requestAnimationFrame(loop);
}

const update = () => {
	frameKirbyX++;
	frameKirbyY++;

	frameKirbyX = frameKirbyX % numCol;
	frameKirbyY = frameKirbyY % numRow;
}

function pre(){
	widthKirby = kirby.width / numCol;
	heightKirby = kirby.height / numRow;
	cv.width = widthKirby;
	cv.height = heightKirby;
	loop();
}

const draw = () => {
	cv.width = cv.width;
	cv.height = cv.height;

	ctx.drawImage(kirby, (frameKirbyX * widthKirby), 0, widthKirby, heightKirby, 0, 0, widthKirby, heightKirby);
}

// const updateFPS = () => {
// 	let iniTime = new Date().getTime();

// 	if (iniTime - lastTime > 1000) {
// 		currentFPS = frameCount;
// 		frameCount = 0;
// 		lastTime = iniTime;
// 	}

// 	frameCount++;
// }
