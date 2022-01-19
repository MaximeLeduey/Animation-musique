

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


/* -----------------------------------------------------
timeline début de Yanis 
------------------------------------------------------- */

const COLORS = {
    white:   '#ffffff',
    black:   '#000000',
    green:   '#49F2CC',
    lightGrey: '#777',
    grey:    '#29363B',
    cyan:    'cyan',
    yellow:  '#FFE202',
    hotpink: 'deeppink',
    red: '#F05454',
    beige: '#30475E',
    blue : '#562f7e'
  };
const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
const scaleCurveBase = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100' );
const scaleCurve = (p) => { return 1 + scaleCurveBase(p); };
const nScaleCurve = (p) => { return 1 - scaleCurveBase(p)/10; };

const circle = new mojs.Shape({
  shape:        'rect',
  fill:         { 'purple' : 'purple', curve: scaleCurve },
  radius:       20,
  rx:           3,
  x:            { [-0] : 0, easing: shiftCurve },
  scaleX:       { 1 : 1, curve: scaleCurve },
  scaleY:       { 1 : 1, curve: nScaleCurve },
  origin:       { '0 50%' : '100% 50%', easing: shiftCurve },
  duration:     800,
  isShowEnd: false,
  top: 350,
});

  const burst1 = new mojs.Burst({
    radius:   { 0: 100 },
    count:    20,
    radius: 100,
    scale:    { 1: 0 },
    children: {
      shape:      'polygon',
      fill:       { 'purple' : 'purple' },
      radius:     180,
      rotate:      { 360: 0 },
      duration:   800,
    },
    top: 350,
  });
  



/* -----------------------------------------
fin timeline de Yanis 
----------------------------------------- */

/* -------------------------------------------------------------------------------------------
----------------------------Début timeline de Evan-------------------------------------------- */
// const circle1 = new mojs.Shape({
//   parent: ".div-animated",
//   shape: "circle",
//   scale: { 0: 1 },
//   fill: "purple",
//   radius: { 0: 100 },
//   isYoyo: true,
//   x: 0,
//   duration: 500,
//   speed: 1,
// }).play();
const rect1 = new mojs.Shape({
    parent: ".div-animated",
    shape: "rect",
    fill: "none",
    stroke: "red",
    radius: { 10: 70 },
    strokeWidth: 20,
    rotate: { 0: 180 },
    duration: 800,
    speed: 3,
    delay: 900,
    x: { 0: 500 },
    y: { 0: -200 },
    isYoyo: true,
  })
    .then({
      strokeWidth: { 50: 0 },
      stroke: { yellow: "green" },
      x: { 500: -200 },
      y: { 0: 50 },
      speed: 2,
    })
    
  const polygon1 = new mojs.Shape({
    parent: ".div-animated",
    shape: "polygon",
    points: 6,
    fill: "none",
    radius: { 100: 10 },
    stroke: "black",
    x: { 0: 500 },
    y: { 0: 200 },
    rotate: { [-180]: 0 },
    duration: 1000,
    speed: 2,
    delay: 900,
  })
    .then({
      stroke: { blue: "purple" },
      x: { 500: 200 },
      y: { 200: -200 },
      strokeWidth: { 100: 10 },
      speed: 2,
    })
    
  class star extends mojs.CustomShape {
    getShape() {
      return '<path id="Icon_awesome-star" data-name="Icon awesome-star" d="M46.077,3.478,33.871,29.334,6.563,33.494c-4.9.742-6.86,7.05-3.308,10.663L23.012,64.271,18.339,92.685c-.841,5.136,4.336,8.983,8.673,6.581L51.441,85.85l24.43,13.416c4.336,2.383,9.514-1.445,8.673-6.581L79.871,64.271,99.628,44.156c3.551-3.613,1.589-9.921-3.308-10.663l-27.308-4.16L56.806,3.478a5.876,5.876,0,0,0-10.729,0Z" transform="translate(-1.441 0.001)"/>';
    }
  }
  mojs.addShape("star", star);
  const star1 = new mojs.Shape({
    parent: ".div-animated",
    shape: "star",
    fill: "yellow",
    x: { 0: -500 },
    y: { 0: 200 },
    speed: 3,
    delay: 900,
  })
    .then({
      fill: "red",
      speed: 2,
      x: { 0: 70 },
      y: { 0: -50 },
    })
    .then({
      fill: "pink",
      speed: 2,
      x: { 70: 100 },
      y: { 60: 200 },
    })
    .then({
      fill: "lime",
      speed: 2,
      x: { 100: 40 },
      y: { 200: 80 },
    })
    .then({
      fill: "darkblue",
      speed: 2,
      x: { 40: 500 },
      y: { 80: 150 },
    })
    .then({
      fill: "black",
      speed: 2,
      x: { 500: 150 },
      y: { 150: 30 },
    })
    .then({
      fill: "yellow",
      speed: 2,
      x: { 150: -500 },
      y: { 300: -100 },
    })
   
  const burst = new mojs.Shape({
    parent: ".div-animated",
    fill: "brown",
    x: { 0: -500 },
    y: { 0: -200 },
    radius : {0 : 100},
    count : 50,
    degree : 360,
    speed: 3,
    delay: 900,
  })
  

  /* -------------------------------------------------------------------------------------------
  ----------------------------Fin timeline de Evan--------------------------------------------
  ---------------------------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', (event) => {
// timeline de maxime
const maximeTimeline = new mojs.Timeline({repeat:6});
maximeTimeline.append(circle1, circle2, circle3, circle4, circle5, circle6, circle7, circle8,);
// timeline de Yanis
const Yanistimeline = new mojs.Timeline({delay:2200});
Yanistimeline.append(circle,burst1)
// timeline de evan 
const Evantimeline = new mojs.Timeline();
Evantimeline.add(rect1, polygon1, star1, burst);
// timeline principale
const mainTimeline = new mojs.Timeline({});
mainTimeline.append(maximeTimeline, Yanistimeline, Evantimeline);

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


