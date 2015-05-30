/**
 * Created by ErikDev on 23.05.2015.
 */

var math = require('mathjs');

function showCalculations() {
    if (f.valueArray.length > 0) {
        //////////////////////////////////////////
        f.getN(); // n berechnen;
        $('#n').html('<span class="taskText">1. <math><mi>n</mi></math> berechnen</span>' +
        '<p><math><mi>n</mi><mo>=</mo><mn>' + f.n + '</mn></math></p>');
        //////////////////////////////////////////
        f.getXmax();
        f.getXmin();
        f.getRx();
        $('#Rx').html('<span class="taskText">2. Kleinsten und größten Wert bestimmen und ' +
        '<math><msub><mi>R</mi><mn>x</mn></msub></math> ausrechnen (<math><msub><mi>R</mi><mn>x</mn></msub><mo>=</mo>' +
        '<msub><mi>x</mi><mn>max</mn></msub><mo>-</mo><msub><mi>x</mi><mn>min</mn></msub></math>)</span>' +
        '<p>' +
        '<math><msub><mi>x</mi><mn>max</mn></msub><mo>=</mo><mn>' + f.xmax + '</mn></math><br>' +
        '<math><msub><mi>x</mi><mn>min</mn></msub><mo>=</mo><mn>' + f.xmin + '</mn></math><br>' +
        '<math><msub><mi>R</mi><mn>x</mn></msub><mo>=</mo><mn>' + f.xmax + '</mn><mo>-</mo><mn>' + f.xmin + '</mn></math><br>' +
        '<math><msub><mi>R</mi><mn>x</mn></msub><mo>=</mo><mn>' + f.Rx + '</mn></math><br>' +
        '</p>');
        //////////////////////////////////////////
        f.getM();
        $('#m').html('<span class="taskText">3. <math><mi>m</mi></math> berechnen (<math><mi>m</mi><mo>&ap;</mo><msqrt><mrow><mi>n</mi></mrow></msqrt></math>)</span>' +
        '<p>' +
        '<math><mi>m</mi><mo>&ap;</mo><msqrt><mrow><mn>' + f.n + '</mn></mrow></msqrt></math><br>' +
        '<math><mi>m</mi><mo>&ap;</mo><mn>' + f.m + '</mn></math><br>' +
        '</p>');
        //////////////////////////////////////////
        f.getEpsilon();
        $('#epsilon').html('<span class="taskText">4. Ein gutes <math><mi>&epsilon;</mi></math> bestimmen und dadurch <math><mi>d</mi></math> bestimmen ' +
        '(<math><mi>d</mi><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>x</mn></msub><mo>&plus;</mo><mi>&epsilon;</mi></mrow><mrow><mi>m</mi></mrow></mfrac></math>)</span>' +
        '<p>' +
        '<math><mi>&epsilon;</mi><mo>=</mo><mn>' + f.epsilon + '</mn></math><br>' +
        '<math><mi>d</mi><mo>=</mo><mfrac><mrow><mn>' + f.Rx + '</mn><mo>&plus;</mo><mn>' + f.epsilon + '</mn></mrow><mrow><mn>' + f.m + '</mn></mrow></mfrac></math><br>' +
        '<math><mi>d</mi><mo>=</mo><mn>' + f.d + '</mn>' +
        '</p>');
        //////////////////////////////////////////
        f.getClasses();
        $('#klassen').html('<span class="taskText">5. Klassen einteilen, Klassengrenzen festlegen wobei der Start bei (' +
        '<math><msub><mi>x</mi><mn>min</mn></msub><mo>-</mo><mfrac><mrow><mi>&epsilon;</mi></mrow><mrow><mn>2</mn></mrow></mfrac></math>) und das Ende der letzten Klasse bei ' +
        '(<math><msub><mi>x</mi><mn>max</mn></msub><mo>+</mo><mfrac><mrow><mi>&epsilon;</mi></mrow><mrow><mn>2</mn></mrow></mfrac></math>) liegt. Außerdem den Klassenmittelpunkt ausrechnen ' +
        '(<math><mi>Klassenanfang</mi><mo>&plus;</mo><mfrac><mrow><mi>d</mi></mrow><mrow><mn>2</mn></mrow></mfrac></math>)</span>');

        $('#klassen').append('<p></p><table class="table table-bordered">' +
        '<thead><tr>' +
        '<th>Klassen-Anfang</th>' +
        '<th>Klassen-Ende</th>' +
        '<th class="warning"><math><msub><mi>x</mi><mn>j</mn></msub></math></th>' +
        '</tr></thead><tbody></tbody></table></p>');

        for (var i = 0; i < f.classesList.length; i++) {
            $('#klassen table tbody').append("<tr>" +
            "<td><math><mo>&gt;</mo><mn>" + f.classesList[i][0] + "</mn></math></td>" +
            "<td><math><mo>&le;</mo><mn>" + f.classesList[i][2] + "</mn></math></td>" +
            "<td class='warning'><math><mn>" + f.classesList[i][1] + "</mn></math></td>" +
            "</tr>");
        }
        //////////////////////////////////////////
        f.getHj();
        $('#haufigkeitstabelle').html('<span class="taskText">6. Häufigkeitstabelle aufstellen, auszählen und zuordnen der einzelnen Werte in die passenden Gruppen</span>' +
        '<p>' +
        '<table class="table table-bordered">' +
        '<thead><tr>' +
        '<th><math><msub><mi>x</mi><mn>j</mn></msub></math></th>' +
        '<th><math><msub><mi>h</mi><mn>j</mn></msub></math></th>' +
        '</tr></thead><tbody></tbody>' +
        '</table>' +
        '</p>');

        for (var i = 0; i < f.freqScalingTable.length; i++) {
            $('#haufigkeitstabelle table tbody').append("<tr>" +
            "<td><math><mn>" + f.freqScalingTable[i][0] + "</mn></math></td>" +
            "<td><math><mn>" + f.freqScalingTable[i][1] + "</mn></math></td>" +
            "</tr>");
        }
        //////////////////////////////////////////
        f.getXbar();
        $('#xdach').html('<span class="taskText">7. Bestimmen von ' +
        '<math><mover accent="true"><mi>x</mi><mo>_</mo></mover><mo>=</mo><mfrac><mrow>' +
        '<munderover><mo>&sum;</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>m</mi></munderover>' +
        '<mo>(</mo><msub><mi>x</mi><mi>j</mi></msub><mo>&times;</mo><msub><mi>h</mi><mi>j</mi></msub><mo>)</mo></mrow>' +
        '<mrow><mi>n</mi></mrow></mfrac></math></span>' +
        '<p>' +
        '<table class="table table-bordered">' +
        '<thead><tr>' +
        '<th><math><msub><mi>x</mi><mn>j</mn></msub></math></th>' +
        '<th><math><msub><mi>h</mi><mn>j</mn></msub></math></th>' +
        '<th class="warning"><math><msub><mi>x</mi><mn>j</mn></msub><mo>&times;</mo><msub><mi>h</mi><mn>j</mn></msub></math></th>' +
        '<th class="warning"><math>' +
        '<msup><mrow><mo>(</mo><msub><mi>x</mi><mi>j</mi></msub><mo>-</mo><mover accent="true"><mi>x</mi><mo>_</mo></mover><mo>)</mo></mrow>' +
        '<mn>2</mn></msup><mo>&times;</mo><msub><mi>h</mi><mi>j</mi></msub></math></th>' +
        '</tr></thead><tbody></tbody>' +
        '</table>' +
        '</p>');

        var sumXjxHj = 0;
        var difXjXbarxHj = 0;

        for (var i = 0; i < f.freqScalingTable.length; i++) {
            $('#xdach table tbody').append("<tr>" +
            "<td><math><mn>" + f.freqScalingTable[i][0] + "</mn></math></td>" +
            "<td><math><mn>" + f.freqScalingTable[i][1] + "</mn></math></td>" +
            "<td class='warning'><math><mn>" + math.round((f.freqScalingTable[i][0] * f.freqScalingTable[i][1]),4) + "</mn></math></td>" +
            "<td class='warning'><math><mn>" + math.round((math.pow(f.freqScalingTable[i][0] - f.xbar, 2) * f.freqScalingTable[i][1]),4) + "</mn></math></td>" +
            "</tr>");

            sumXjxHj += (f.freqScalingTable[i][0] * f.freqScalingTable[i][1]);
            difXjXbarxHj += (Math.pow(f.freqScalingTable[i][0] - f.xbar, 2) * f.freqScalingTable[i][1]);
        }

        $('#xdach table tbody').append("<tr>" +
        "<td></td>" +
        "<td></td>" +
        "<td class='warning'><math><mo>&sum;</mo><mo>=</mo><mn>" + math.round(sumXjxHj, 4) + "</mn></math></td>" +
        "<td class='warning'><math><mo>&sum;</mo><mo>=</mo><mn>" + math.round(difXjXbarxHj, 4) + "</mn></math></td>" +
        "</tr>");

        $('#xdach').append('' +
        '<p>' +
        '<math><mover accent="true"><mi>x</mi><mo>_</mo></mover><mo>=</mo><mfrac><mrow><mn>' + sumXjxHj + '</mn></mrow><mrow><mn>' + f.n + '</mn></mrow></mfrac></math><br>' +
        '<math><mover accent="true"><mi>x</mi><mo>_</mo></mover><mo>=</mo><mn>' + f.xbar + '</mn></math>' +
        '</p>');
        //////////////////////////////////////////
        f.getStdDeviation();
        $('#sx').html('<span class="taskText">8. Bestimmen von <math><msub><mi>s</mi><mi>x</mi></msub></math> (Standardabweichung) ' +
        '<math><msub><mi>s</mi><mi>x</mi></msub><mo>=</mo><msqrt><mfrac><mrow>' +
        '<munderover><mo>&sum;</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>m</mi></munderover>' +
        '<msup><mrow><mo>(</mo><msub><mi>x</mi><mi>j</mi></msub><mo>-</mo><mover accent="true"><mi>x</mi><mo>_</mo></mover><mo>)' +
        '</mo></mrow><mn>2</mn></msup><mo>&times;</mo><msub><mi>h</mi><mi>j</mi></msub></mrow>' +
        '<mrow><mi>n</mi><mo>-</mo><mn>1</mn></mrow></mfrac></msqrt>' +
        '</math></span>' +
        ': <p>' +
        '<math><msub><mi>s</mi><mi>x</mi></msub><mo>=</mo><msqrt><mfrac><mrow><mn>' + difXjXbarxHj + '</mn></mrow>' +
        '<mrow><mn>' + (f.n - 1) + '</mn></mrow></mfrac></msqrt></math><br>' +
        '<math><msub><mi>s</mi><mi>x</mi></msub><mo>=</mo><mn>' + f.sx +'</mn></msub></math>' +
        '</p>');
        //////////////////////////////////////////
        f.getVx();
        f.getVxPercent();
        $('#vx').html('<span class="taskText">9. Bestimmen des Variabilitätskoeffizienten ' +
        '<math><msub><mi>v</mi><mi>x</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>s</mi><mi>x</mi></msub></mrow>' +
        '<mover accent="true"><mi>x</mi><mo>_</mo></mover></mfrac></math></span>' +
        '<p>' +
        '<math><msub><mi>v</mi><mi>x</mi></msub><mo>=</mo><mfrac><mrow><mn>' + f.sx + '</mn></mrow>' +
        '<mn>' + f.xbar + '</mn></mfrac></math><br>' +
        '<math><msub><mi>v</mi><mi>x</mi></msub><mo>=</mo><mn>' + f.vx + '</mn><br>' +
        '<math><msub><mi>v</mi><mi>x</mi></msub><mo>=</mo><mn>' + f.vxPercent + '</mn><mo>%</mo></math>' +
        '</p>')


        MathJax.Hub.Typeset();
    } else {
        bootbox.alert('Es wurde noch keine Datei geladen.');
    }
}
