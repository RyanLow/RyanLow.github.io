"use strict";

document.getElementById('descriptor').innerHTML = ''; // I am...

var descriptors = ["a programmer", "a mathematician", "a student", "a frisbee player", "a food lover", "an art admirer", "an engineer", "a problem-solver", "a deep thinker", "a writer", "in college", "a trouble-maker", "a dog lover", "poor", "a derp", "kinda cute"];
new TypeIt('#descriptor', {
  strings: descriptors.map(function (desc) {
    return desc + '.';
  }),
  speed: 75,
  deleteSpeed: 40,
  nextStringDelay: [4000, 1700],
  startDelay: 1700,
  breakLines: false,
  lifeLike: true,
  loop: true,
  loopDelay: [1700, 4000]
}).go();