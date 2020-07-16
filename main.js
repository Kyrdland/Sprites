let cv = document.getElementById("cv");
let ctx = cv.getContext('2d');

let kirby = new Image();
kirby.src = 'img/standby.png'
kirby.addEventListener('load', loop,false);

let numCol = 16;
let numFil = 2;
let widthKirby;
let heightKirby;

let lastTime = new Date().getTime(); 1
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
    draw();
    //updateFPS();
    //console.log(currentFPS);
    window.requestAnimationFrame(loop)
}

function draw()
{
    console.log(widthKirby + ' x ' + heightKirby);
    ctx.drawImage(kirby, 0, 0);
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