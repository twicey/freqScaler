/**
 * Created by ErikDev on 22.05.2015.
 */

var os = require('os');
var fs = require('fs');
var gui = require('nw.gui');
var util = require('util');
var win = gui.Window.get();
var $ = require('jquery');
var math = require('mathjs');

var f = require('./lib/frequencyScaling.js');

win.showDevTools();

var appStart = new Date();

// Durchlauf

f.readRootlist('./testfiles/01.txt');
f.getN();
f.getM();
f.getXmin();
f.getXmax();
f.getRx();
f.getEpsilon();
f.getClasses();
f.getHj();
f.getXbar();
f.getStdDeviation();
f.getVx();

console.log(f.n, f.m, f.xmin, f.xmax, f.Rx, f.epsilon, f.d);

console.log(f.classesList);
console.log(f.freqScalingTable);
console.log(f.hxSum);
console.log("xbar", f.xbar);
console.log("stddev", f.sx);
console.log("varkoeff", f.vx);
console.log("varkoeff in %", math.round(f.vx * 100, 4));
