// Chapter 1 //



function greetalert() {
    alert("Hello to My Webpage!")
}

function invalidpass() {
    alert("Error! Please enter a valid password");
}

function jsland() {
    alert("Welcome to Js Land... \nHappy Coding!");
}


function sequence() {
    alert("Welcome to Js Land");
    alert("Happy Coding!");
}






// Chapter 2 //

var username;

var myName;
myName = "Ayesha Ghani";

var message;
message = "Hello World";

function helloworld() {
    alert(message);
}



var name = "Ayesha Ghani";
var age = 20;
var course = "Certified Mobile Application Development"

function biodata() {
    alert(name);
    alert(age);
    alert(course);

}


var z = "PIZZA";

function pizz() {
    alert(z.slice(0, 5) + "\n" + z.slice(0, 4) + "\n" + z.slice(0, 3) + "\n" + z.slice(0, 2) + "\n" + z.slice(0, 1));
}

var email = "ayeshaghanichi@gmail.com"

function mail() {
    alert("My Email Address is " + email);
}


var book = "A Smarter\n Way To Learn Javascript "

function bookalert() {
    alert("I'm trying to learn from the book " + book);
}




var l = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"

function showalert() {
    alert(l);
}

function inbrowser() {
    document.write(a);
}

// Chapter 3 //

var age = 20;

function agealert() {
    alert("I am " + age + " years old.")
}

function aload() {
    var div = document.getElementById('p');
    div.innerHTML = div.innerHTML + "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
    var div = document.getElementById('q');
    div.innerHTML = div.innerHTML + "Yah! I can write Html content through Javascript.";
}


// Chapter 4 //

var name, age, course;

// var 4name, ?age, name age, NameOfStudent,   ;
var name, _name, $name, _123name, name_123;



function anothrload() {
    var div = document.getElementById('rule');
    div.innerHTML = div.innerHTML + "<h2>Rules for naming JS variables</h2> <br> Variable names can only contain number, $ and _. For example $my_1stVariable <br> Variables must begin with a letter, $ or _. For example $name, _name or name <br> Variable names are case sensitive <br> Variable names should not be JS keywords";
}

// Chapter 5 //

var a = 8;
var b = 9;
var sum = a + b;
var sub = a - b;
var pro = a * b;
var divi = a / b;
var mod = a % b;

function load() {

    var div = document.getElementById('sum');
    div.innerHTML = div.innerHTML + "Sum of " + a + " and " + b + " is " + sum;
    var div = document.getElementById('subtract');
    div.innerHTML = div.innerHTML + "Difference of " + a + " and " + b + " is " + sub;
    var div = document.getElementById('product');
    div.innerHTML = div.innerHTML + "Product of " + a + " and " + b + " is " + pro;
    var div = document.getElementById('division');
    div.innerHTML = div.innerHTML + "Division of " + a + " and " + b + " is " + divi;
    var div = document.getElementById('modulus');
    div.innerHTML = div.innerHTML + "Modulus of " + a + " and " + b + " is " + mod;
    var s;

    var div = document.getElementById('a');
    div.innerHTML = div.innerHTML + "Value after variable declaration is:" + s;
    s = 5;
    var div = document.getElementById('a');
    div.innerHTML = div.innerHTML + "<br>Initial Value:" + s;
    s++;
    var div = document.getElementById('a');
    div.innerHTML = div.innerHTML + "<br>Value After Increment:" + s;
    s = s + 7;
    var div = document.getElementById('a');
    div.innerHTML = div.innerHTML + "<br>Value After Addition:" + s;
    s--;
    var div = document.getElementById('a');
    div.innerHTML = div.innerHTML + "<br>Value After Decrement:" + s;
    s = s / 3;
    var div = document.getElementById('a');
    div.innerHTML = div.innerHTML + "<br>The remainder is:" + s;
    var cost = 400;
    cost = cost * 5;
    var div = document.getElementById('b');
    div.innerHTML = div.innerHTML + "Total cost to buy 5 Tickets to a Movie is: " + cost + " Rs";

    var d = 1;
    const i = 7;
    var m;
    while (d <= 10) {
        m = d * i;
        var div = document.getElementById('c');
        div.innerHTML = div.innerHTML + i + " x " + d + " = " + m + "<br>";
        d++;
    }


    var C = 78;
    var F = 172.4;
    var ans1 = (78 * 9 / 5) + 32;
    var ans2 = (F - 32) * 5 / 9;
    var div = document.getElementById('d');
    div.innerHTML = div.innerHTML + C + " C is " + ans1 + " F" + "<br>";
    var div = document.getElementById('d');
    div.innerHTML = div.innerHTML + F + " F is " + ans2 + " C";


    var poi1 = 600;
    var poi2 = 700;
    var g = poi1 * 4;
    var h = poi2 * 6;
    var sum = g + h + 100;
    var div = document.getElementById('e');
    div.innerHTML = div.innerHTML + "<h1> Shopping Cart </h1> <br> Price of Item 1 is " + poi1 + "<br> Quantity of Item 1 is 4 <br> Price of Item 2 is " + poi2 + "<br> Quantity of Item 2 is 6 <br> Shipping Charges is 100 <br> <br> Total cost of your order is " + sum + " Rs ";


    var marks_obt = 890;
    var total_marks = 1100;
    var per = marks_obt / total_marks * 100;
    var div = document.getElementById('f');
    div.innerHTML = div.innerHTML + "<h1> Marks Sheet </h1> <br> Total Marks:  " + total_marks + "<br> Marks Obtained: " + marks_obt + " <br> Percentage: " + per;

    var dollar = 10;
    var riyal = 25;
    var rs = (dollar * 104.80) + (riyal * 28);
    var div = document.getElementById('g');
    div.innerHTML = div.innerHTML + "<h1> Currency In PKR </h1> <br> Total Currency In PKR: " + rs;

    var num = 4;
    num = ((num + 5) * 10) / 2;
    var div = document.getElementById('h');
    div.innerHTML = div.innerHTML + "var num = 4; <br>  num = ((num + 5) * 10) / 2;  <br> Answer:" + num;



    var currentyear = 2020;
    var birthyear = 2000;
    var age = currentyear - birthyear;
    var div = document.getElementById('i');
    div.innerHTML = div.innerHTML + "Current Year: " + currentyear + "<br>  Birth Year:  " + birthyear + "<br> Your age is: " + age;

    const pi = 3.142;
    var radius = 8.8;
    var area = pi * (radius * radius);
    var circumference = 2 * pi * radius;
    var div = document.getElementById('j');
    div.innerHTML = div.innerHTML + "<h1> The Geometrizer </h1> <br> Radius of a circle: " + radius + "<br>  The circumference is:  " + circumference + "<br> The area is: " + area;

    var fs = "Chillz";
    var ca = 20;
    var ma = 65;
    var pd = 2;
    var sc = (ma - ca) * pd;
    var div = document.getElementById('k');
    div.innerHTML = div.innerHTML + "<h1> The Lifetime Supply Calculator </h1> <br> Favourite Snack : " + fs + "<br>  Current age:  " + ca + "<br> Estimated Maximum Age: " + ma + "<br> Amount of snacks Per day: " + pd + "<br> You will need " + sc + " Chillz to last you until the ripe old age of 65 ";

}


// Chapter 6---9 //

function bload() {
    var t = 10;
    var div = document.getElementById('ab');
    div.innerHTML = div.innerHTML + "Radius: <br> The value of t is: " + t + "<br>..................................<br> ";
    ++t;
    var div = document.getElementById('ab');
    div.innerHTML = div.innerHTML + " <br> <br> The value of ++t is: " + t + "<br> Now the value of t is: " + t;
    t++;
    var div = document.getElementById('ab');
    div.innerHTML = div.innerHTML + " <br><br> The value of t++ is: " + t + "<br> Now the value of t is: " + t;
    --t;
    var div = document.getElementById('ab');
    div.innerHTML = div.innerHTML + " <br><br> The value of --t is: " + t + "<br> Now the value of t is: " + t;
    t--;
    var div = document.getElementById('ab');
    div.innerHTML = div.innerHTML + " <br><br> The value of t-- is: " + t + "<br> Now the value of t is: " + t;

    var numb1 = 2;
    var numb2 = 1;
    var div = document.getElementById('cd');
    div.innerHTML = div.innerHTML + "a is: " + numb1 + "<br> b is: " + numb2;
    var result = --numb1 - --numb2 + ++numb2 + numb2--;
    var div = document.getElementById('cd');
    div.innerHTML = div.innerHTML + "<br> Result is: " + result;






}

function na() {
    var nam = document.getElementById('name').value;
    var div = document.getElementById('ef');
    div.innerHTML = div.innerHTML + "Hello! " + nam;
}

function table() {

    var nmb = document.getElementById('nmb').value;
    if (nmb >= 0) {
        var d = 1;
        const i = nmb;
        var m;
        while (d <= 10) {
            m = d * i;
            var div = document.getElementById('gh');
            div.innerHTML = div.innerHTML + i + " x " + d + " = " + m + "<br>";
            d++;
        }
    } else {

        var d = 1;
        const i = 5;
        var m;
        while (d <= 10) {
            m = d * i;
            var div = document.getElementById('gh');
            div.innerHTML = div.innerHTML + i + " x " + d + " = " + m + "<br>";
            d++;
        }
    }
}


function ms() {
    var subject_1 = document.getElementById('sub1').value;
    var s1 = parseInt(subject_1);
    var div = document.getElementById('sub11');
    div.innerHTML = div.innerHTML + s1;
    var div = document.getElementById('s1p');
    div.innerHTML = div.innerHTML + s1 + " %";
    var subject_2 = document.getElementById('sub2').value;
    var s2 = parseInt(subject_2);
    var div = document.getElementById('sub22');
    div.innerHTML = div.innerHTML + s2;
    var div = document.getElementById('s2p');
    div.innerHTML = div.innerHTML + s2 + " %";

    var subject_3 = document.getElementById('sub3').value;
    var s3 = parseInt(subject_3);
    var div = document.getElementById('sub33');
    div.innerHTML = div.innerHTML + s3;
    var div = document.getElementById('s3p');
    div.innerHTML = div.innerHTML + s3 + " %";
    var total = s1 + s2 + s3;
    var div = document.getElementById('totl');
    div.innerHTML = div.innerHTML + total;
    var tp = total / 300 * 100;
    var div = document.getElementById('tp');
    div.innerHTML = div.innerHTML + tp + " %";
}
// Chapter 9--11 //