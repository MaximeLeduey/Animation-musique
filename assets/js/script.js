
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
      duration:   1100,
    },
    top: 350,
  });
  



/* -----------------------------------------
fin timeline de Yanis 
----------------------------------------- */

const Yanistimeline = new mojs.Timeline({});

Yanistimeline.append(burst1)




new MojsPlayer({ add: Yanistimeline, isPlaying: true, });












