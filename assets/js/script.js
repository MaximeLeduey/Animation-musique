const circle1 = new mojs.Shape({
    shape: 'circle',
    fill: {'red': 'blue'},
    x: {0: 100},
    duration: 1000,
}).then({
    fill: {'blue': 'yellow'},
    x: {100:200},
});


const circle2 = new mojs.Shape({
    shape: 'circle',
    fill: {'yellow': 'blue'},
    x: {0: -100},
    duration: 1000,
}).then({
    fill: {'blue': 'red'},
    x: {0: -200},
});



document.addEventListener('DOMContentLoaded', (event) => {
const maximeTimeline = new mojs.Timeline({});
maximeTimeline.add(circle1, circle2);
// create the timeline
const mainTimeline = new mojs.Timeline({});
mainTimeline.add(maximeTimeline);

// add the timeline to the player
const mojsPlayer = new MojsPlayer({
  add: mainTimeline
});
})

