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