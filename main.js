let cv = document.getElementById("cv");
let ctx = cv.getContext('2d');

let lastTime = new Date().getTime(), currentFPS, frameCount;

function loop()
{
    window.requestAnimationFrame(loop)
    updateFPS();
    console.log(currentFPS);
}

function updateFPS()
{
    let initTime = new Date().getTime();
    if(initTime - lastTime > 1000)
    {
        currentFPS = frameCount; 
        frameCount = 0;
        lastTime = initTime;
    }
    frameCount++;
}

loop();