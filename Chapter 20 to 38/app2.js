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