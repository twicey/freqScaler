/**
 * Created by ErikDev on 22.05.2015.
 */

var fs = require('fs');
var math = require('mathjs');

exports.valueArray = [];
exports.classesList = [];
exports.freqScalingTable = [];
exports.hxSum = 0;
exports.n = 0;
exports.m = 0;
exports.d = 0;
exports.xmax = 0;
exports.xmin = 0;
exports.Rx = 0;
exports.epsilon = 0;
exports.xbar = 0;
exports.sx = 0;
exports.vx = 0;

exports.readRootlist = function (file) {
    if (fs.existsSync(file)) {
        this.resetAllValues();
        var fContents = fs.readFileSync(file, 'UTF-8');
        this.valueArray = fContents.split('\n');
        //todo file checking - int|float validation?!
        if (this.valueArray.length > 0) {
            for (var i = 0; i < this.valueArray.length; i++) {
                this.valueArray[i] = parseFloat(this.valueArray[i].trim());
            }
        }
    }
};

exports.resetAllValues = function () {
    this.valueArray = [];
    this.classesList = [];
    this.freqScalingTable = [];
    this.hxSum = 0;
    this.n = 0;
    this.m = 0;
    this.d = 0;
    this.xmax = 0;
    this.xmin = 0;
    this.Rx = 0;
    this.epsilon = 0;
    this.xbar = 0;
    this.sx = 0;
    this.vx = 0;
}

exports.getN = function () {
    this.n = exports.valueArray.length;
    return this.n;
};

exports.getM = function () {
    this.m = Math.round(Math.sqrt(this.getN()));
    return this.m;
};

exports.getXmax = function () {
    var max = this.valueArray[0];
    for (var i = 1; i < this.valueArray.length; i++) {
        if (this.valueArray[i] > max) {
            max = this.valueArray[i];
        }
    }
    this.xmax = max;
    return max;
};

exports.getXmin = function () {
    var min = this.valueArray[0];
    for (var i = 1; i < this.valueArray.length; i++) {
        if (this.valueArray[i] < min) {
            min = this.valueArray[i];
        }
    }
    this.xmin = min;
    return min;
};

exports.getRx = function () {
    this.Rx = this.xmax - this.xmin;
    return this.Rx;
};

exports.getEpsilon = function () {
    for (var i = 0; i < 100000; i += .1) {
        if (((this.Rx + i) % this.m) == 0) {
            this.epsilon = math.round(i,1);
            this.d = ((this.Rx + i) / this.m);
            break;
        }
    }
    return this.epsilon;
};

exports.getClasses = function () {
    var firstClassBegin = this.xmin - (this.epsilon / 2);
    var halfAdd = this.d / 2;

    // Erste Klasse
    this.classesList[0] = [
        firstClassBegin, firstClassBegin + halfAdd, firstClassBegin + this.d
    ];
    this.freqScalingTable[0] = [this.classesList[0][1],0];
    // Die übrigen Klassen
    for (var i = 1; i < this.m; i++) {
        this.classesList[i] = [
            this.classesList[i-1][2], this.classesList[i-1][2] + halfAdd, this.classesList[i-1][2] + this.d
        ];
        this.freqScalingTable[i] = [this.classesList[i][1], 0];
    }
};

exports.getHj = function () {
    // Schleife über alle Elemente in der Urliste
    for (var i = 0; i < this.n; i++) {
        // Schleife über alle Klassen
        for (var c = 0; c < this.m; c++) {
            console.log(c);
            if (this.valueArray[i] > this.classesList[c][0] &&
            this.valueArray[i] <= this.classesList[c][2]) {
                this.freqScalingTable[c][1] += 1;
                this.hxSum++;
            }
        }
    }
};

exports.getXbar = function () {
    var sumXjxHj = 0;
    for (var i = 0; i < this.m; i++) {
        sumXjxHj += this.freqScalingTable[i][0] * this.freqScalingTable[i][1];
    }
    this.xbar = math.round(sumXjxHj / this.n, 4);
};

exports.getStdDeviation = function () {
    var sumXjxXbar = 0;
    for (var i = 0; i < this.m; i++) {
        sumXjxXbar += math.pow(this.freqScalingTable[i][0] - this.xbar, 2) * this.freqScalingTable[i][1];
    }
    this.sx = math.round(math.sqrt(sumXjxXbar / (this.n - 1)), 4);
};

exports.getVx = function () {
    this.vx = math.round(this.sx / this.xbar, 6);
};

exports.getVxPercent = function () {
    this.vxPercent = math.round(this.vx * 100,4);
};