let cv = window.document.getElementById('cv');
let ctx = cv.getContext('2d');

let kirby = new Image();

kirby.src = 'img/run.png';
kirby.addEventListener('load', pre, false);

let numCol = 8;
let numFil = 2;
let widthKirby;
let heightKirby;
let frameKirbyX = 0;
let frameKirbyY = 0;

function pre()
{
	widthKirby = kirby.width / numCol;
	heightKirby = kirby.height / numFil;
	cv.width = 1000;
	cv.height = 1000;
	loop();
}

function loop()
{
	update();
	draw();
	requestAnimationFrame(loop);
}

function update()
{
	frameKirbyX++;
	frameKirbyY++;

	frameKirbyX = frameKirbyX % numCol;
	frameKirbyY = frameKirbyY % numFil;

}

function draw()
{
	cv.width = cv.width;
	cv.height = cv.height;
	// image, ix, iy, iwidth, iheight, cx, cy, cwidth, cheight
	ctx.drawImage(kirby, (frameKirbyX * widthKirby), 0, widthKirby, heightKirby, 300, 0, widthKirby, heightKirby);
}