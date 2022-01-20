let music = new Audio('/assets/song/futur-bass_drop.mp3');
let bpm = 60/133;
bpm = bpm * 1000;


const circle2 = new mojs.Shape({
    shape: 'rect',
    fill: {'red':'green'},
    scaleY: {7:5.4},
    scaleX: 4,
    y: -23,
    
    fill: 'white',
    isShowEnd: false,
    duration: bpm,
});


const rect1 = new mojs.Shape({
    shape: 'rect',
    isShowEnd: false,
    
    scaleY:   {3.4:6.7},
    scaleX: 4,
    fill: 'white',
    duration: bpm*2,
    x: {"-600":"0"},
    y: -23,
});

const rect1clone = new mojs.Shape({
    shape: 'rect',
    isShowEnd: false,
    
    scaleY:   {3.4:6.7},
    scaleX: 4,
    fill: 'white',
    duration: bpm*2,
    x: {600:0} ,
    y: -23,
});



const rect2 = new mojs.Shape({
    shape: 'rect',
    isShowEnd: false,
    
    scaleY:   {6.8:5.4},
    scaleX: 4,
    fill: 'white',
    duration: bpm*2,
    x: 0,
    y: -23,
});


const rect3 = new mojs.Shape({
    shape: 'rect',
    isShowEnd: false,
    
    scaleY:   {5.4:0.4},
    scaleX: 4,
    fill: 'white',
    duration: bpm*2,
    x: -450 ,
    y: -23,
});

const rect3clone = new mojs.Shape({
    shape: 'rect',
    isShowEnd: false,
    
    scaleY:   {5.4:0.4},
    scaleX: 4,
    fill: 'white',
    duration: bpm*2,
    x: {'0':'450'} ,
    y: -23,
});



const rect3cloneinverse = new mojs.Shape({
    shape: 'rect',
    isShowEnd: false,
    
    scaleY:   {5.4:0.4},
    scaleX: 4,
    fill: 'white',
    duration: bpm*2,
    x: {'0':'-450'} ,
    y: -23,
});


const rect4 = new mojs.Shape({
    shape: 'rect',
    isShowEnd: false,
    
    scaleY:  {0.4:1.4},
    scaleX: 4,
    fill: 'white',
    duration: bpm*2,
    x: 450 ,
    y: -23,
});

const rect5 = new mojs.Shape({
    shape: 'rect',
    isShowEnd: false,
    
    scaleY:   {1.4:3.4},
    scaleX: 4,
    fill: 'white',
    duration: bpm*2,
    x: 0 ,
    y: -23,
});




const rect6 = new mojs.Shape({
    shape: 'rect',
    isShowEnd: false,
    
    scaleY:   {3.4:5.4},
    scaleX: 4,
    fill: 'white',
    duration: bpm*2,
    x: -450 ,
    y: -23,
});


const rect7 = new mojs.Shape({
    shape: 'rect',
    isShowEnd: false,
    
    scaleY:   {5.4:6.7},
    scaleX: 4,
    fill: 'white',
    duration: bpm*2,
    x: 0 ,
    y: -23,
});

const rect8 = new mojs.Shape({
    shape: 'rect',
    isShowEnd: false,
    
    scaleY:   {6.7:3.4},
    scaleX: 4,
    fill: 'white',
    duration: bpm*2,
    x: 450 ,
    y: -23,
});




const circle3 = new mojs.Shape({
    shape: 'rect',
    
    isShowEnd: false,
    stroke: {'transparent':'white'},
    scaleY:    7.4,
    scaleX: 4,
    
    fill: 'white',
    duration: bpm/2,
    x: 670,
    y: -23,
});


const circle4 = new mojs.Shape({
    shape: 'curve',
    stroke: 'white',
    scale:    { 0 : 1 },
    strokeWidth: { 50 : 0 },
    fill: 'white',
    isShowEnd: false,
    duration: bpm,
    x: -100,
    y: -100,
});

const circle5 = new mojs.Shape({
    shape: 'circle',
    stroke: 'white',
    scale:    { 0 : 1 },
    strokeWidth: { 50 : 0 },
    fill: 'white',
    isShowEnd: false,
    duration: bpm,
    x: 400,
    y: 100,
});


const circle6 = new mojs.Shape({
    shape: 'curve',
    stroke: 'white',
    scale:    { 0 : 1 },
    strokeWidth: { 50 : 0 },
    fill: 'white',
    isShowEnd: false,
    duration: bpm,
    x: -360,
});

const circle7 = new mojs.Shape({
    shape: 'circle',
    stroke: 'white',
    scale:    { 0 : 1 },
    strokeWidth: { 50 : 0 },
    fill: 'transparent',
    isShowEnd: false,
    duration: bpm,
    x: 400,
});

const circle8 = new mojs.Shape({
    shape: 'rect',
    
    scaleY:   7,
    scaleX: 16,
    strokeWidth: { 50 : 0 },
    fill: {'transparent':'black'},
    isShowEnd: false,
    duration: bpm/4,
    x: 0 ,
    y: -10,
});

const restart = new mojs.Shape({
    shape: 'rect',
    fill: 'white',
    scale: {0:1},
    duration: bpm,
})










document.addEventListener('DOMContentLoaded', (event) => {
// timeline de maxime
const rectTimeline = new mojs.Timeline({});
const rectTimelineClone = new mojs.Timeline({});
const clignTimeline = new mojs.Timeline({repeat: 64});

const briceTimeline = new mojs.Timeline({});
rectTimeline.append(rect1, rect2, rect3,rect4, rect5, rect6, rect7, rect8 );
clignTimeline.add(circle8);
rectTimeline.add(rect1clone,rect3cloneinverse,rect3clone)
briceTimeline.add(rectTimeline, clignTimeline, rectTimelineClone);

// briceTimeline.append(circle1, circle2, circle3,);
// briceTimeline.append(circle2, circle1, circle3,);
// timeline principale
const mainTimeline = new mojs.Timeline({});

mainTimeline.add(briceTimeline);



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

