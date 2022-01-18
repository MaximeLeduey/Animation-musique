// --------------------------------------------------------------------------------------
// début de timeline de Maxime
// -------------------------------------------------------------------------------------


let music = new Audio('/assets/song/futur-bass.mp3');
let bpm = 60/133;
bpm = bpm * 1000;


const circle1 = new mojs.Shape({
    parent: '.div-animated',
    shape: 'circle',
    stroke: 'purple',
    scale:    { 0 : 1 },
    strokeWidth: { 90 : 0 },
    radius: 90,
    fill: 'transparent',
    isShowEnd: false,
    duration: bpm,
});


const circle2 = new mojs.Shape({
    parent: '.div-animated',
    shape: 'circle',
    isShowEnd: false,
    stroke: '#7f44d0',
    scale:    { 0 : 1 },
    strokeWidth: { 80 : 0 },
    radius: 80,
    fill: 'transparent',
    duration: bpm,
    x: -400,
    y: -120,
});

const circle3 = new mojs.Shape({
    parent: '.div-animated',
    shape: 'circle',
    isShowEnd: false,
    stroke: 'blue',
    scale:    { 0 : 1 },
    strokeWidth: { 70 : 0 },
    radius: 70,
    fill: 'transparent',
    duration: bpm,
    x: 200,
    y: 100,
});


const circle4 = new mojs.Shape({
    parent: '.div-animated',
    shape: 'circle',
    stroke: 'green',
    scale:    { 0 : 1 },
    strokeWidth: { 60 : 0 },
    radius: 60,
    fill: 'transparent',
    isShowEnd: false,
    duration: bpm,
    x: -100,
    y: -100,
});

const circle5 = new mojs.Shape({
    parent: '.div-animated',
    shape: 'circle',
    stroke: 'red',
    scale:    { 0 : 1 },
    strokeWidth: { 50 : 0 },
    radius: 50,
    fill: 'transparent',
    isShowEnd: false,
    duration: bpm,
    x: 400,
    y: 100,
});


const circle6 = new mojs.Shape({
    parent: '.div-animated',
    shape: 'circle',
    stroke: 'orange',
    scale:    { 0 : 1 },
    strokeWidth: { 40 : 0 },
    radius: 40,
    fill: 'transparent',
    isShowEnd: false,
    duration: bpm,
    x: -400,
});

const circle7 = new mojs.Shape({
    parent: '.div-animated',
    shape: 'circle',
    stroke: 'yellow',
    scale:    { 0 : 1 },
    radius: 30,
    strokeWidth: { 30 : 0 },
    fill: 'transparent',
    isShowEnd: false,
    duration: bpm,
    x: 400,
});

const circle8 = new mojs.Shape({
    parent: '.div-animated',
    shape: 'circle',
    stroke: '#f2e7bf ',
    scale:    { 0 : 1 },
    strokeWidth: { 20 : 0 },
    radius: 20,
    fill: 'transparent',
    isShowEnd: false,
    duration: bpm,
    y: -150,
});


// --------------------------------------------------------------------------------------
// fin de timeline de Maxime
// -------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', (event) => {
// timeline de maxime
const maximeTimeline = new mojs.Timeline({repeat:6});
maximeTimeline.append(circle1, circle2, circle3, circle4, circle5, circle6, circle7, circle8, );
// timeline principale
const mainTimeline = new mojs.Timeline({});
mainTimeline.append(maximeTimeline);

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

