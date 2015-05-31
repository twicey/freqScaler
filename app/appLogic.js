/**
 * Created by ErikDev on 22.05.2015.
 */

var os = require('os');
var fs = require('fs');
var gui = require('nw.gui');
var util = require('util');
var win = gui.Window.get();
var math = require('mathjs');

// Bibliothek zur detailierten Berechnung der Häufigkeitstabellen
var f = require('./lib/frequencyScaling.js');

win.showDevTools();

var appStart = new Date();

// Funktionens
function chooseFile(name) {
    var chooser = document.querySelector(name);
    chooser.addEventListener("change", function(evt) {
        if (this.value != undefined && this.value.length > 0) {
            if (fs.existsSync(this.value)) {
                console.log(this.value, "File loaded");
                f.readRootlist(this.value);
                $('#return').html('Datei: <i>' + this.value + '</i> wurde geladen.');
                $('#n,#Rx,#m,#d,#epsilon,#klassen,#haufigkeitstabelle,#grafik,#xdach,#sx,#vx,#chart,#raw').html('');
                $('#btnCalc').removeAttr('disabled');
            }
        }
    }, false);
    chooser.click();
}
