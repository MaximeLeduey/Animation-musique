const circle1 = new mojs.Shape({
    parent: '.div-animated',
    shape: 'circle',
    fill: 'blue',
    x: 500,
}).play();
const circle2 = new mojs.Shape({
    parent: '.div-animated',
    shape: 'circle',
    fill: 'yellow',
    x: 400,
}).play();
const circle3 = new mojs.Shape({
    parent: '.div-animated',
    shape: 'circle',
    fill: 'green',
    x: 300,
}).play();
const circle4 = new mojs.Shape({
    parent: '.div-animated',
    shape: 'circle',
    fill: 'red',
    x: 200,
}).play();
const circle5 = new mojs.Shape({
    parent: '.div-animated',
    shape: 'circle',
    fill: 'gray',
    x: 100,
}).play();
const circle6 = new mojs.Shape({
    parent: '.div-animated',
    shape: 'circle',
    fill: 'purple',
}).play();



document.addEventListener('DOMContentLoaded', (event) => {
    // new MojsPlayer({ add: circle1, circle2, isPlaying: true, isRepeat: true});
})

