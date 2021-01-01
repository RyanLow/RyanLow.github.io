"use strict";

// I am...
var descriptors = ["a programmer", "a mathematician", "a student", "a frisbee player", "a food lover", "an art lover", "an engineer", "a problem-solver", "a thinker", "a writer", "a trouble-maker", "in college", "a dog lover", "attentive", "poor", "a derp", "kinda cute"];
document.getElementById('descriptor').innerHTML = '';
new TypeIt('#descriptor', {
  strings: descriptors.map(function (desc) {
    return desc + '.';
  }),
  speed: 100,
  deleteSpeed: 50,
  nextStringDelay: [2500, 1500],
  startDelay: 1500,
  breakLines: false,
  lifeLike: true,
  loop: true,
  loopDelay: [1500, 2500]
}).go();