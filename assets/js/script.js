const circle = new mojs.Shape({
    parent: '.one',
    shape: 'circle',
    radius: {20:50},
    fill: {'red': 'blue'},
    duration: 2000,
    isYoyo: true,
    repeat: 1,
    isShowStart: true,
}).then({
   x: 'rand(-250,250)',
}).play();








document.addEventListener('DOMContentLoaded', (event) => {
    new MojsPlayer({ add: circle, isPlaying: true, isRepeat: true});
})

