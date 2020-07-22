var sec1 = document.getElementById('section1ans');
var sec2 = document.getElementById('section2ans');
var sec3 = document.getElementById('section3ans');
var sec4 = document.getElementById('section4ans');
var sec6 = document.getElementById('section6ans');
// power function
function power(a, b) {
    var aa = parseInt(a);
    var bb = parseInt(b);
    var exp = 1;
    for (var i = 1; i <= bb; i++) {
        exp = exp * aa;
    }

    sec1.innerHTML = exp;
}

// leap year funtion
function leapyear(year) {
    var yearr = year.substr(year.length - 1);
    var yearrr = parseInt(yearr);
    if ((yearrr % 4 == 0) && (yearrr % 100 != 0) || (yearrr % 400 == 0)) {
        sec2.innerHTML = "Yes, You Entered a Leap Year";
    } else {
        sec2.innerHTML = "No, this is not a leap year";
    }


}

// area of triangle

function Triangle(t1, t2, t3) {
    var t11 = parseInt(t1);
    var t22 = parseInt(t2);
    var t33 = parseInt(t3);
    var s = t11 + t22 + t33 / 2;
    var s1 = s - t11;
    var s2 = s - t22;
    var s3 = s - t33;
    var area = s * s1 * s2 * s3;
    var exp = Math.sqrt(area);
    sec3.innerHTML = exp;

}
var num1, num2, num3, average, ave, perc;
// marks percentage
function mainFunction(a, b, c) {
    num1 = parseInt(a);
    num2 = parseInt(b);
    num3 = parseInt(c);
    ave = average(num1, num2, num3);
    sec4.innerHTML = num3;
    sec4.innerHTML = percentage(ave);

}

function average(num1, num2, num3) {
    average = num1 + num2 + num3 / 300;
    return average;
}

function percentage(ave) {
    perc = ave * 100;
    return perc;
}
var v;

function vowelremover(text) {
    var textt = text;
    v = textt.replace(/a|e|i|o|u/gi, "");
    sec6.innerHTML = v;
}