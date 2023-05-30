/**
 * @file: main.js
 * @author: Alvise Spadea
 * Exercise on event in Javascript
 * ● The cat should start from the left side of the screen
 * ● Write a function ‘catWalk()’ that moves the cat 10 pixels to the right
 * ● Make the cat move across the screen by calling that function every 50ms
 * ● Write different versions of the function to handle the following variants:
 * ○ Variant 1: When the cat reaches the right side of the screen it should restart from the left
 * ○ Variant 2: When the cat reaches the right side of the screen, it should move backwards.
 *  When it reaches the left it should move forwards
 * ○ Variant 3: When the cat reaches the middle of the screen, replace the img with a different
 *  cat image. Keep it in the middle for 10 seconds, and then replace the img with the original
 * image and have it continue the walk as in variant 2
 */

let mL = 0
let dir = 1; // 1 for moving forward, -1 for moving backward
function catWalk(i) {
    let img = document.getElementsByTagName('img')[0];
    let screenWidth = window.innerWidth;
    const catWidth = img.width;

    if (i >= screenWidth / 2 - catWidth / 2 && i <= screenWidth / 2 + catWidth / 2) {
        img.src = "https://clipart-library.com/images/6Tro9gA7c.gif";
        setTimeout(() => {
            img.src = "https://clipart-library.com/images/6Tro9gA7c.gif";
        }, 10000);
    }
    img.style.marginLeft = i + 'px';
    return screenWidth;
}
//variant 1
/*setInterval(()=>{
    let sW = catWalk(mL);    
    mL+=10;
    if (mL>=sW) {
        mL=0;
        }
},50);*/
/*setInterval(()=>{
    let sW = catWalk(mL);
    if (dir === 1) {
        mL += 10;
        if (mL >= sW) {
          dir = -1; // Change direction to move backward
        }
      } else {
        mL -= 10;
        if (mL <= 0) {
          dir = 1; // Change direction to move forward
        }
      }
},50);*/
setInterval(()=>{
let sW = catWalk(mL);
if (dir === 1) {
    mL += 10;
    if (mL >= sW) {
        dir = -1; // Change direction to move backward
    }
} else {
    mL -= 10;
    if (mL <= 0) {
        dir = 1; // Change direction to move forward
    }
}
}, 50);

