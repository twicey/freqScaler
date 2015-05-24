/**
 * Created by ErikDev on 22.05.2015.
 */

var os = require('os');
var fs = require('fs');
var gui = require('nw.gui');
var util = require('util');
var win = gui.Window.get();
var math = require('mathjs');

var f = require('./lib/frequencyScaling.js');

//win.showDevTools();

var appStart = new Date();

// Funktionen

function chooseFile(name) {
    var chooser = document.querySelector(name);
    chooser.addEventListener("change", function(evt) {
        if (this.value != undefined && this.value.length > 0) {
            if (fs.existsSync(this.value)) {
                console.log(this.value);
                f.readRootlist(this.value);
            }
        }
    }, false);
    chooser.click();
}