function entername() {
    var fn = prompt("Enter you First Name");
    var sn = prompt("Enter you Last Name");
    var titled = fn + " " + sn;
    alert("Hello " + titled);
}

function model() {
    var mobile = document.getElementById('mobilemodel').value;
    var Length = mobile.length;
    var div = document.getElementById('mod');
    div.innerHTML = div.innerHTML + "Length of given input " + Length;
}


function Pakistani() {
    var pak = "Pakistani";
    var index = pak.indexOf('n');
    var div = document.getElementById('pk');
    div.innerHTML = div.innerHTML + "Index of 'n' " + index;
}

function lastindex() {
    var hw = "Hello World";
    var div = document.getElementById('li');
    div.innerHTML = div.innerHTML + "Last Index : " + hw.lastIndexOf('l');
}


function Pakistani2() {
    var pak = "Pakistani";
    var div = document.getElementById('pk2');
    div.innerHTML = div.innerHTML + "Character at index '3' " + pak.charAt(3);
}


function Hyd() {
    var hyd = "Hyderabad";
    var div = document.getElementById('hyder');
    div.innerHTML = div.innerHTML + hyd.replace("Hyder", "Islam");
}

function and() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var newmsg = message.replace(/and/g, "&");
    var div = document.getElementById('&');
    div.innerHTML = div.innerHTML + newmsg;

}

function typechange() {
    var str = "472";
    var div = document.getElementById('type');
    div.innerHTML = div.innerHTML + "Value: " + str + "<br> Type: " + typeof(str) + "<br>";
    var integer = parseInt(str);
    var div = document.getElementById('type');
    div.innerHTML = div.innerHTML + "Value: " + integer + "<br> Type: " + typeof(integer) + "<br>";

}

function uc() {
    var uc = document.getElementById('uppercase').value;
    var div = document.getElementById('up');
    div.innerHTML = div.innerHTML + uc.toUpperCase();
}

function tc() {
    var sentence = document.getElementById('titlecase').value;
    sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    var div = document.getElementById('tcase');
    div.innerHTML = div.innerHTML + sentence.join();
}



function numtostr() {
    var num = 47.2;
    var div = document.getElementById('nts');
    div.innerHTML = div.innerHTML + "Value: " + num + "<br> Type: " + typeof(num) + "<br>";
    var integer = num.toString();
    var int = integer.split(".");
    int = int.join("");
    var div = document.getElementById('nts');
    div.innerHTML = div.innerHTML + "Value: " + int + "<br> Type: " + typeof(int) + "<br>";

}


function split() {
    var university = "University of Karachi";
    var array = university.split("");
    for (var i = 0; i < university.length; i++) {
        var div = document.getElementById('splitt');
        div.innerHTML = div.innerHTML + array[i] + "<br>";
    }

}

function lastchar() {
    var word = document.getElementById('laastchar').value;
    var div = document.getElementById('lc');
    div.innerHTML = div.innerHTML + "Last Character : " + word.charAt(word.length - 1);
}


function occurrencecheck() {
    var sentence = "The quick brown fox jumps over the lazy dog";
    var sen = sentence.split(" ");
    var count = 0;
    for (var i = 0; i < sen.length - 1; i++) {
        if (sen[i] == "the" || sen[i] == "The" || sen[i] == "THE") {
            count++;
        }
    }
    var div = document.getElementById('oc');
    div.innerHTML = div.innerHTML + "Text: The quick brown fox jumps over the lazy dog <br>";
    var div = document.getElementById('oc');
    div.innerHTML = div.innerHTML + "There are " + count + " occurences of 'the' <br>";
}



function rn() {
    var numbe = document.getElementById('numb').value;
    var number = parseFloat(numbe);
    var div = document.getElementById('q1');
    div.innerHTML = div.innerHTML + "Number: " + number + " <br>";
    var round = Math.round(number);
    var div = document.getElementById('q1');
    div.innerHTML = div.innerHTML + "Round off value: " + round + " <br>";
    var floor = Math.floor(number);
    var div = document.getElementById('q1');
    div.innerHTML = div.innerHTML + "Floor value: " + floor + " <br>";
    var ceil = Math.ceil(number);
    var div = document.getElementById('q1');
    div.innerHTML = div.innerHTML + "Ceil value: " + ceil + " <br>";

}

function negrn() {
    var numbe = document.getElementById('numb2').value;
    var number = parseFloat(numbe);
    var div = document.getElementById('q2');
    div.innerHTML = div.innerHTML + "Number: " + number + " <br>";
    var round = Math.round(number);
    var div = document.getElementById('q2');
    div.innerHTML = div.innerHTML + "Round off value: " + round + " <br>";
    var floor = Math.floor(number);
    var div = document.getElementById('q2');
    div.innerHTML = div.innerHTML + "Floor value: " + floor + " <br>";
    var ceil = Math.ceil(number);
    var div = document.getElementById('q2');
    div.innerHTML = div.innerHTML + "Ceil value: " + ceil + " <br>";

}


function absolute() {
    var numbe = document.getElementById('numb3').value;
    var number = parseInt(numbe);
    var numberr = Math.abs(number);
    var div = document.getElementById('q3');
    div.innerHTML = div.innerHTML + "The Absolute Value of " + number + " is " + numberr + " <br>";
}

function dice() {
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 6) + 1;
    var randomnumb = Math.floor(improvedNum);
    var div = document.getElementById('q4');
    div.innerHTML = div.innerHTML + "Random Dice Value:" + randomnumb + "<br>";
}

function coin() {
    x = (Math.floor(Math.random() * 2) == 0);
    if (x) {
        var div = document.getElementById('q5');
        div.innerHTML = div.innerHTML + "2 <br> Random coin value: " + "Heads <br>";
    } else {
        var div = document.getElementById('q5');
        div.innerHTML = div.innerHTML + "1 <br> Random coin value: " + "Tails <br>";
    }
}



function randomgen() {
    var a = Math.floor(Math.random() * 100) + 1;
    var div = document.getElementById('q6');
    div.innerHTML = div.innerHTML + "Random Number Between 1 to 100: " + a + "<br>";
}


function guessgame() {
    var secretnmb = 5;
    var guessnmb = document.getElementById('guessnmb').value;
    var guessnm = parseInt(guessnmb);
    if (guessnm == secretnmb) {
        var div = document.getElementById('q8');
        div.innerHTML = div.innerHTML + "Bingo! Correct Answer<br>";
    } else if (guessnmb - secretnmb == 1 || guessnmb - secretnmb == -1) {
        var div = document.getElementById('q8');
        div.innerHTML = div.innerHTML + "Close Enough to Correct Answer<br>";
    } else {
        var div = document.getElementById('q8');
        div.innerHTML = div.innerHTML + "Try Again<br>";
    }
}