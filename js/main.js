let cv = window.document.getElementById('cv');
let ctx = cv.getContext('2d');
// let lastTime = new Date().getTime(), currentFPS = 0, frameCount = 0;

cv.width = 292;
cv.height = 292;

let kirby = new Image();

kirby.src = 'img/standby.png';
kirby.addEventListener('load', loop, false);

let numCol = 16;
let numFil = 2;
let widthKirby;
let heightKirby;

function loop()
{
	widthKirby = kirby.width / numCol;
	heightKirby = kirby.height / numFil;

	draw();
	requestAnimationFrame(loop);
}

function draw()
{
	cv.width = cv.width;
	cv.height = cv.height;

	console.log(widthKirby + ' x ' + heightKirby);

	ctx.drawImage(kirby, 0 , 0);
}

// function updateFPS()
// {
// 	let iniTime = new Date().getTime();

// 	if(iniTime - lastTime > 1000)
// 	{
// 		currentFPS = frameCount;
// 		frameCount = 0;
// 		lastTime = iniTime;
// 	}

// 	frameCount++;
// }