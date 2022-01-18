const circle1 = new mojs.Shape({
  parent: ".div-animated",
  shape: "circle",
  fill: "blue",
  radius: { 10: 100 },
  isYoyo: true,
  x: 500,
  duration: 2000,
}).play();
const rectangle = new mojs.Shape({
  parent: ".div-animated",
  shape: "rect",
  fill: "none",
  stroke: "purple",
  radius: 10,
  strokeWidth: 20,
  rotate: { [-180]: 0 },
  duration: 800,
  x: 400,
})
  .then({
    strokeWidth: { 50: 0 },
    stroke: { darkred: "yellow" },
  })
  .play();
const polygon = new mojs.Shape({
  parent: ".div-animated",
  shape: "polygon",
  points: 6,
  fill: "green",
  x: 300,
}).play();
const rectangle2 = new mojs.Shape({
  parent: ".div-animated",
  shape: "circle",
  fill: "red",
  x: 200,
}).play();
const star = new mojs.Shape({
  parent: ".div-animated",
  shape: "circle",
  fill: "gray",
  x: 100,
}).play();
const circle6 = new mojs.Shape({
  parent: ".div-animated",
  shape: "circle",
  fill: "purple",
}).play();

document.addEventListener("DOMContentLoaded", (event) => {
  new MojsPlayer({
    add: circle1,
    rectangle,
    polygon,
    isPlaying: true,
    isRepeat: true,
  });
});
