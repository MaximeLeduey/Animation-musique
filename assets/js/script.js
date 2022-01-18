let music = new Audio('/assets/song/futur-bass.mp3');
let bpm = 60/133;
bpm = bpm * 1000;


const circle1 = new mojs.Shape({
    shape: 'circle',
    stroke: 'purple',
    scale:    { 0 : 1 },
    strokeWidth: { 50 : 0 },
    fill: 'transparent',
    isShowEnd: false,
    duration: bpm,
});


const circle2 = new mojs.Shape({
    shape: 'polygon',
    isShowEnd: false,
    stroke: 'indigo',
    scale:    { 0 : 1 },
    strokeWidth: { 50 : 0 },
    fill: 'transparent',
    duration: bpm,
    x: -400,
    y: -150,
});

const circle3 = new mojs.Shape({
    shape: 'rect',
    isShowEnd: false,
    stroke: 'blue',
    scale:    { 0 : 1 },
    strokeWidth: { 50 : 0 },
    fill: 'transparent',
    duration: bpm,
    x: 200,
    y: 100,
});


const circle4 = new mojs.Shape({
    shape: 'curve',
    stroke: 'green',
    scale:    { 0 : 1 },
    strokeWidth: { 50 : 0 },
    fill: 'transparent',
    isShowEnd: false,
    duration: bpm,
    x: -100,
    y: -100,
});

const circle5 = new mojs.Shape({
    shape: 'circle',
    stroke: 'yellow',
    scale:    { 0 : 1 },
    strokeWidth: { 50 : 0 },
    fill: 'transparent',
    isShowEnd: false,
    duration: bpm,
    x: 400,
    y: 100,
});


const circle6 = new mojs.Shape({
    shape: 'curve',
    stroke: 'orange',
    scale:    { 0 : 1 },
    strokeWidth: { 50 : 0 },
    fill: 'transparent',
    isShowEnd: false,
    duration: bpm,
    x: -400,
});

const circle7 = new mojs.Shape({
    shape: 'circle',
    stroke: 'red',
    scale:    { 0 : 1 },
    strokeWidth: { 50 : 0 },
    fill: 'transparent',
    isShowEnd: false,
    duration: bpm,
    x: 400,
});

const circle8 = new mojs.Shape({
    shape: 'rect',
    stroke: 'red',
    scale:    { 0 : 1 },
    strokeWidth: { 50 : 0 },
    fill: 'transparent',
    isShowEnd: false,
    duration: bpm,
    y: -150,
});

const restart = new mojs.Shape({
    shape: 'rect',
    fill: 'transparent',
    scale: {0:1},
    duration: bpm,
})


document.addEventListener('DOMContentLoaded', (event) => {
// timeline de maxime
const maximeTimeline = new mojs.Timeline({});
maximeTimeline.append(circle1, circle2, circle3, circle4, circle5, circle6, circle7, circle8, );
// timeline principale
const mainTimeline = new mojs.Timeline({repeat:8});
mainTimeline.add(maximeTimeline);

let play = document.querySelector('.div-animated');
play.addEventListener('click', function(){
    mainTimeline.play();
    music.play();
})

// on ajoute la timeline principale au player
// const mojsPlayer = new MojsPlayer({
//   add: mainTimeline
// });
})

