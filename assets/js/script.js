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
  .play();

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
  .play();

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

  .play();

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
}).play();

const Evantimeline = new mojs.Timeline();
Evantimeline.add(rect1, polygon1, star1, burst);

document.addEventListener("DOMContentLoaded", (event) => {
  new MojsPlayer({
    add: Evantimeline,
    isPlaying: true,
    isRepeat: true,
  });
});
/* -------------------------------------------------------------------------------------------
----------------------------Fin timeline de Evan--------------------------------------------
---------------------------------------------------------------------------------------------- */

