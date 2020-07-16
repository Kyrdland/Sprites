let cv = document.getElementById("cv");
let ctx = cv.getContext('2d');

let kirby = new Image();
kirby.src = 'img/standby.png'
kirby.addEventListener('load', pre,false);

let numCol = 16;
let numFil = 2;
let widthKirby;
let heightKirby;

let frameKirbyX = 0;
let frameKirbyY = 0;

let lastTime = new Date().getTime(); 
let currentFPS = 0; 
let frameCount = 0;

function pre()
{
    widthKirby = kirby.width / numCol;
    heightKirby = kirby.height / numFil;
    cv.width =widthKirby;
    cv.height = heightKirby;
    loop();
}

function loop()
{
    update();
    draw();
    //updateFPS();
    //console.log(currentFPS);
    window.requestAnimationFrame(loop)
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
    // console.log(widthKirby + ' x ' + heightKirby);
    ctx.drawImage(kirby, (frameKirbyX * widthKirby), 0,kirby.width,kirby.height,0,0,kirby.width,kirby.height);
}
// function updateFPS()
// {
//     let initTime = new Date().getTime();
//     if(initTime - lastTime > 1000)
//     {
//         currentFPS = frameCount; 
//         frameCount = 0;
//         lastTime = initTime;
//     }
//     frameCount++;
// }

// loop();