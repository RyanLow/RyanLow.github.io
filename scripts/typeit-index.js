import descriptors from './descriptors.js';

document.getElementById('descriptor').innerHTML = '';

let typeItInstance = new TypeIt('#descriptor', {
    strings: descriptors.map(desc => desc + '.'),
    speed: 100,
    deleteSpeed: 50,
    nextStringDelay: [2500, 1500],
    startDelay: 1500,
    breakLines: false,
    lifeLike: true,
    loop: true,
    loopDelay: [1500, 2500]
}).go();