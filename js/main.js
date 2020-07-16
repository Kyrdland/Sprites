let cv = window.document.getElementById('cv');
let ctx = cv.getContext('2d');

// let lastTime = new Date().getTime(), currentFPS = 0, frameCount = 0;

let kirby = new Image();

kirby.src = 'img/standby.png';

kirby.addEventListener('load', loop, false);

function loop()
{
	draw();
	requestAnimationFrame(loop);
}

function draw()
{
	cv.width = cv.width;
	cv.height = cv.height;

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