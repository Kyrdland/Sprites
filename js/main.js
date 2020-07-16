let cv = window.document.getElementById('cv');
let ctx = cv.getContext('2d');
// let lastTime = new Date().getTime(), currentFPS = 0, frameCount = 0;



let kirby = new Image();

kirby.src = 'img/standby.png';
kirby.addEventListener('load', pre, false);

let numCol = 16;
let numFil = 2;
let widthKirby;
let heightKirby;

function pre()
{
	widthKirby = kirby.width / numCol;
	heightKirby = kirby.height / numFil;
	cv.width = widthKirby;
	cv.height = heightKirby;
	loop();
}

function loop()
{
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