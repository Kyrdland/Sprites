let cv = document.getElementById("cv");
let ctx = cv.getContext('2d');

let kirby = new Image();
kirby.src = 'img/standby.png'
kirby.addEventListener('load', loop,false);

let lastTime = new Date().getTime(); 
let currentFPS = 0; 
let frameCount = 0;

function loop()
{
    draw();
    //updateFPS();
    //console.log(currentFPS);
    window.requestAnimationFrame(loop)
}

function draw()
{
    cv.width =cv.width;
    cv.height = cv.height;
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