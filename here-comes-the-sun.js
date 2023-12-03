
let rgb = 0;
let rgbText = 255
const h1 = document.getElementsByTagName('h1')[0]
const hereComesTheSun = () => {
    if( rgb < 255) {
        rgb++
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
        requestAnimationFrame(hereComesTheSun)
    } 
}

requestAnimationFrame(hereComesTheSun )


const hereComesTheSunText = () => {
    if( rgbText > 0) {
        rgbText--
        h1.style.color = `rgb(${rgbText}, ${rgbText}, ${rgbText})`;
        requestAnimationFrame(hereComesTheSunText)
    } 
}

requestAnimationFrame(hereComesTheSunText)